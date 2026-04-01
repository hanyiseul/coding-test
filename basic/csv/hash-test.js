const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'users.csv');
const TARGET_ID = 'user0000016';
const SEARCH_REPEAT = 10;

function readCsvLines() {
    if (!fs.existsSync(FILE_PATH)) {
        throw new Error('users.csv 파일이 없습니다.');
    }

    const content = fs.readFileSync(FILE_PATH, 'utf8'); // 인코딩 설정 필수
    return content.trim().split('\n');
}

function parseCsvToArray() {
    const lines = readCsvLines();
    const header = lines[0].split(',');

    const rows = [];

    for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split(',');
        rows.push({
            [header[0]]: cols[0],
            [header[1]]: cols[1],
            [header[2]]: Number(cols[2]),
            [header[3]]: cols[3]
        });
    }

    return rows;
}

function buildHashIndex(rows) {
    const index = Object.create(null);

    for (let i = 0; i < rows.length; i++) {
        index[rows[i].user_id] = rows[i];
    }

    return index;
}

function linearSearchFromFile(targetId) {
    const lines = readCsvLines();

    for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split(',');

        if (cols[0] === targetId) {
            return {
                user_id: cols[0],
                name: cols[1],
                age: Number(cols[2]),
                city: cols[3]
            };
        }
    }

    return null;
}

function linearSearchFromRows(rows, targetId) {
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].user_id === targetId) {
            return rows[i];
        }
    }

    return null;
}

function hashSearch(index, targetId) {
    return index[targetId] || null;
}

function measureIndexBuildCost(rows) {
    const start = process.hrtime.bigint();
    const index = buildHashIndex(rows);
    const end = process.hrtime.bigint();

    console.log(`해시 인덱스 생성 시간: ${Number(end - start) / 1000000} ms`);
    return index;
}

function measureSingleSearch(rows, index) {
    let start;
    let end;
    let result;

    start = process.hrtime.bigint();
    result = linearSearchFromFile(TARGET_ID);
    end = process.hrtime.bigint();
    console.log(`파일 직접 선형 탐색 시간: ${Number(end - start) / 1000000} ms`);

    start = process.hrtime.bigint();
    linearSearchFromRows(rows, TARGET_ID);
    end = process.hrtime.bigint();
    console.log(`메모리 배열 선형 탐색 시간: ${Number(end - start) / 1000000} ms`);

    start = process.hrtime.bigint();
    hashSearch(index, TARGET_ID);
    end = process.hrtime.bigint();
    console.log(`해시 인덱스 탐색 시간: ${Number(end - start) / 1000000} ms`);

    if (result) {
        console.log(`\n[대상 ID 정보]`);
        console.log(`- ID: ${result.user_id}`);
        console.log(`- 이름: ${result.name}`);
        console.log(`- 나이: ${result.age}`);
        console.log(`- 도시: ${result.city}`);
    } else {
        console.log(`\n[대상 ID 정보를 찾을 수 없습니다: ${TARGET_ID}]`);
    }
}

function measureRepeatedSearch(rows, index) {
    let start;
    let end;

    start = process.hrtime.bigint();
    for (let i = 0; i < SEARCH_REPEAT; i++) {
        linearSearchFromFile(TARGET_ID);
    }
    end = process.hrtime.bigint();
    console.log(`파일 직접 선형 탐색 ${SEARCH_REPEAT}회: ${Number(end - start) / 1000000} ms`);

    start = process.hrtime.bigint();
    for (let i = 0; i < SEARCH_REPEAT; i++) {
        linearSearchFromRows(rows, TARGET_ID);
    }
    end = process.hrtime.bigint();
    console.log(`메모리 배열 선형 탐색 ${SEARCH_REPEAT}회: ${Number(end - start) / 1000000} ms`);

    start = process.hrtime.bigint();
    for (let i = 0; i < SEARCH_REPEAT; i++) {
        hashSearch(index, TARGET_ID);
    }
    end = process.hrtime.bigint();
    console.log(`해시 인덱스 탐색 ${SEARCH_REPEAT}회: ${Number(end - start) / 1000000} ms`);
}

function main() {
    const rows = parseCsvToArray();
    console.log(`총 레코드 수: ${rows.length}`);

    const index = measureIndexBuildCost(rows);
    measureSingleSearch(rows, index);
    measureRepeatedSearch(rows, index);
}

main();