const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

const FILE_PATH = path.join(__dirname, 'videos.csv');
const TARGET_ID = 'video000123';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'testuser',
    password: '1234',
    database: 'testdb'
});

function readCsvLines() {
    if (!fs.existsSync(FILE_PATH)) {
        throw new Error('videos.csv 파일이 없습니다.');
    }

    const content = fs.readFileSync(FILE_PATH, 'utf8');
    return content.trim().split('\n');
}

function parseCsvToArray() {
    const lines = readCsvLines();
    const rows = [];

    for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split(',');
        rows.push({
            video_id: cols[0],
            file_path: cols[1],
            file_hash: cols[2]
        });
    }

    return rows;
}

function buildHashIndex(rows) {
    const index = Object.create(null);

    for (let i = 0; i < rows.length; i++) {
        index[rows[i].video_id] = rows[i];
    }

    return index;
}

function hashSearch(index, targetId) {
    return index[targetId] || null;
}

async function getVideoMetaFromDB(videoId) {
    const sql = `
        SELECT video_id, title, channel_name, views, created_at, status
        FROM video_metadata
        WHERE video_id = ?
    `;

    const [rows] = await pool.execute(sql, [videoId]);
    return rows.length > 0 ? rows[0] : null;
}

async function main() {
    const csvRows = parseCsvToArray();
    const index = buildHashIndex(csvRows);

    const videoFile = hashSearch(index, TARGET_ID);

    if (!videoFile) {
        console.log('영상 파일을 찾지 못했습니다.');
        return;
    }

    console.log('영상 파일 정보');
    console.log(videoFile);

    const videoMeta = await getVideoMetaFromDB(videoFile.video_id);

    if (!videoMeta) {
        console.log('영상 메타데이터를 찾지 못했습니다.');
        return;
    }

    console.log('영상 서비스 정보');
    console.log(videoMeta);

    const mergedResult = {
        video_id: videoFile.video_id,
        file_path: videoFile.file_path,
        file_hash: videoFile.file_hash,
        title: videoMeta.title,
        channel_name: videoMeta.channel_name,
        views: videoMeta.views,
        created_at: videoMeta.created_at,
        status: videoMeta.status
    };

    console.log('결합 출력 결과');
    console.log(mergedResult);

    await pool.end();
}

main().catch(function (err) {
    console.error(err);
});