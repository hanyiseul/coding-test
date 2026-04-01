const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const FILE_PATH = path.join(__dirname, 'files.csv');
const TARGET_ID = 'file000012';
const SEARCH_REPEAT = 10;

function readCsvLines() {
    if (!fs.existsSync(FILE_PATH)) {
        throw new Error('files.csv 파일이 없습니다.');
    }

    const content = fs.readFileSync(FILE_PATH, 'utf8');
    return content.trim().split('\n');
}

function parseCsvToArray() {
    const lines = readCsvLines();
    const header = lines[0].split(',');

    const rows = [];

    for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split(',');
        rows.push({
            file_id: cols[0],
            content: cols[1],
            hash: cols[2]
        });
    }

    return rows;
}

function createHash(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
}

function buildHashIndex(rows) {
    const index = Object.create(null);

    for (let i = 0; i < rows.length; i++) {
        index[rows[i].file_id] = rows[i];
    }

    return index;
}

function verifyByFullScan(targetId, targetContent) {
    const lines = readCsvLines();

    for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split(',');

        if (cols[0] === targetId) {
            return cols[1] === targetContent;
        }
    }

    return false;
}

function verifyByHash(rows, targetId, targetContent) {
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].file_id === targetId) {
            const newHash = createHash(targetContent);
            return rows[i].hash === newHash;
        }
    }

    return false;
}

function verifyByHashIndex(index, targetId, targetContent) {
    const row = index[targetId];
    if (!row) return false;

    const newHash = createHash(targetContent);
    return row.hash === newHash;
}

function measurePerformance(rows, index) {
    let start;
    let end;

    const targetContent = "sample_data_123";

    start = process.hrtime.bigint();
    verifyByFullScan(TARGET_ID, targetContent);
    end = process.hrtime.bigint();
    console.log(`원본 비교 방식: ${Number(end - start) / 1000000} ms`);

    start = process.hrtime.bigint();
    verifyByHash(rows, TARGET_ID, targetContent);
    end = process.hrtime.bigint();
    console.log(`해시 비교 방식: ${Number(end - start) / 1000000} ms`);

    start = process.hrtime.bigint();
    verifyByHashIndex(index, TARGET_ID, targetContent);
    end = process.hrtime.bigint();
    console.log(`해시 인덱스 방식: ${Number(end - start) / 1000000} ms`);
}

function main() {
    const rows = parseCsvToArray();
    console.log(`총 파일 수: ${rows.length}`);

    const index = buildHashIndex(rows);
    measurePerformance(rows, index);
}

main();