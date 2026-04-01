const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'logs.csv');
const TARGET_ID = 'user099999';
const SEARCH_REPEAT = 10;

// csv 파일 읽는 함수
function readCsvLines() {
    if (!fs.existsSync(FILE_PATH)) { // 만약 읽을 파일이 없다면
        throw new Error('logs.csv 파일이 없습니다.'); // 강제 에러 처리
    }

    const content = fs.readFileSync(FILE_PATH, 'utf8'); // 파일을 읽고 인코딩 설정해서 content 변수에 담음 (utf8: 인코딩 설정) 
    return content.trim().split('\n'); // 줄단위로 나눠서 반환
}

// 레코드에 데이터 담는 함수
function parseCsvToArray() {
    const lines = readCsvLines(); // line에 읽은 파일을 줄단위로 나눠서 반환한 데이터 저장
    const header = lines[0].split(','); // 헤더에는 첫번째 lines를 , 로 나눠서 저장

    const rows = [];

    // 라인 수 만큼 반복문 돌리기
    for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split(','); // n번째 배열 lines을 ,로 나눈 뒤 cols 변수에 담음
        rows.push({ // rows 배열에 push (cols의 , 기준으로)
            [header[0]]: cols[0],   // user_id
            [header[1]]: cols[1],   // event_type
            [header[2]]: cols[2],   // timestamp
            [header[3]]: cols[3]    // ip
        });
    }

    return rows;
}

// 해시 인덱스 생성 함수
function buildHashIndex(rows) {
    const index = Object.create(null); // null 객체 생성

    // 인덱스 객체에 해당번째 레코드 값을 담음
    for (let i = 0; i < rows.length; i++) {
        index[rows[i].user_id] = rows[i]; // user_id를 키로 하는 해시 인덱스 객체 생성
    }

    return index;
}

// 타겟 아이디 검색 (csv에서 탐색)
function linearSearchFromFile(targetId) {
    const lines = readCsvLines(); // csv파일을 불러서

    // 한줄씩 탐색
    for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split(',');

        if (cols[0] === targetId) { // 만약 유저 아이디 부분에서 타겟 아이디가 있다면
            return { // 해당 레코드 반환
                user_id: cols[0],
                event_type: cols[1],
                timestamp: cols[2],
                ip: cols[3]
            };
        }
    }

    return null;
}

// 타겟 아이디의 해당 레코드를 검색하는 함수 (메모리에서 탐색)
function linearSearchFromRows(rows, targetId) {
    // 이미 메모리에 있는 배열을 탐색
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].user_id === targetId) { // 만약 타겟 아이디에 해당하는 유저 아이디가 있다면
            return rows[i]; // 해당 레코드 반환
        }
    }

    return null; // 없으면 null 반환
}

// 해시 검색 함수
function hashSearch(index, targetId) {
    // 타겟 아이디의 인덱스가 있으면 해당 데이터 반환하고 없으면 null 반환
    return index[targetId] || null;
}

// 해시 인덱스 생성 시간 계산 함수
function measureIndexBuildCost(rows) {
    // 순차 진행 start-index-end
    const start = process.hrtime.bigint(); // hash 인덱스 생성 시작 process.hrtime.bigint() : 고해상도 시간 측정 함수
    const index = buildHashIndex(rows); // hash 인덱스 생성 함수
    const end = process.hrtime.bigint(); // hash 인덱스 생성 종료

    console.log(`해시 인덱스 생성 시간: ${Number(end - start) / 1000000} ms`); // (종료시간 - 시작시간) / 1000000 : ms 시간 계산
    return index;
}

// 탐색 시간 계산 함수
function measureSingleSearch(rows, index) {
    let start; // 시작 변수 초기화 선언
    let end;  // 종료 변수 초기화 선언

    start = process.hrtime.bigint();
    linearSearchFromFile(TARGET_ID); // 타겟 아이디 검색 (csv에서 탐색)
    end = process.hrtime.bigint();
    console.log(`파일 직접 선형 탐색 시간: ${Number(end - start) / 1000000} ms`);

    start = process.hrtime.bigint();
    linearSearchFromRows(rows, TARGET_ID); // 레코드의 타겟 아이디 검색 (메모리에서 검색)
    end = process.hrtime.bigint();
    console.log(`메모리 배열 선형 탐색 시간: ${Number(end - start) / 1000000} ms`);

    start = process.hrtime.bigint();
    hashSearch(index, TARGET_ID); // 해시 인덱스에서 타겟 아이디 검색 (해시 인덱스에서 검색)
    end = process.hrtime.bigint();
    console.log(`해시 인덱스 탐색 시간: ${Number(end - start) / 1000000} ms`);
}

// 탐색 횟수 계산 함수
function measureRepeatedSearch(rows, index) {
    let start;
    let end;

    start = process.hrtime.bigint();
    for (let i = 0; i < SEARCH_REPEAT; i++) { // 검색을 몇번 하는지 반복문으로 검색
        linearSearchFromFile(TARGET_ID);
    }
    end = process.hrtime.bigint();
    console.log(`파일 직접 선형 탐색 ${SEARCH_REPEAT}회: ${Number(end - start) / 1000000} ms`);

    start = process.hrtime.bigint();
    for (let i = 0; i < SEARCH_REPEAT; i++) { // 검색을 몇번 하는지 반복문으로 검색
        linearSearchFromRows(rows, TARGET_ID);
    }
    end = process.hrtime.bigint();
    console.log(`메모리 배열 선형 탐색 ${SEARCH_REPEAT}회: ${Number(end - start) / 1000000} ms`);

    start = process.hrtime.bigint();
    for (let i = 0; i < SEARCH_REPEAT; i++) { // 검색을 몇번 하는지 반복문으로 검색
        hashSearch(index, TARGET_ID);
    }
    end = process.hrtime.bigint();
    console.log(`해시 인덱스 탐색 ${SEARCH_REPEAT}회: ${Number(end - start) / 1000000} ms`);
}

function main() {
    const rows = parseCsvToArray();
    console.log(`총 로그 수: ${rows.length}`);

    const index = measureIndexBuildCost(rows);
    measureSingleSearch(rows, index);
    measureRepeatedSearch(rows, index);
}

main();