{
  /**
  * 인접 행렬 (Adjacency Matrix)
  * - 2차원 배열을 사용하여 연결 상태를 0과 1로 저장
  */
  class AdjacencyMatrix {
    // 인스턴스 초기화 (정점 배열 세팅, 행렬 사이즈 초기화, 정점을 인덱스로 변환 등)
    constructor(vertices) {
      this.vertices = vertices; // 정점 이름 배열 (예: ['A', 'B', ...])
      this.size = vertices.length;
      // 초기 상태: 모두 0으로 채워진 size x size 행렬
      this.matrix = Array.from({ length: this.size }, () => Array(this.size).fill(0));
      // 정점 이름을 인덱스로 변환하기 위한 맵 (A -> 0, B -> 1)
      this.indexMap = {};
      vertices.forEach((v, i) => this.indexMap[v] = i);
    }

    // 방향성 간선 추가: v1 -> v2
    // 정점들의 방향성 간선 추가 메서드
    // 정점들에 방향성 간선을 추가하여 그래프 형성
    addEdge(v1, v2) { 
      const i = this.indexMap[v1];
      const j = this.indexMap[v2];
      if (i !== undefined && j !== undefined) {
        this.matrix[i][j] = 1;
      }
    }

    // 매트릭스 출력 메서드
    // vertices를 join으로 배열 변환
    printMatrix() {
      console.log("   " + this.vertices.join(" "));
      this.matrix.forEach((row, i) => {
        console.log(`${this.vertices[i]} [ ${row.join(" ")} ]`);
      });
    }
  }

  // --- 호출부 ---
  const vList = ['A', 'B', 'C', 'D', 'E'];
  const matrixGraph = new AdjacencyMatrix(vList);

  matrixGraph.addEdge('A', 'B');
  matrixGraph.addEdge('A', 'C');
  matrixGraph.addEdge('D', 'B');
  matrixGraph.addEdge('D', 'C');
  matrixGraph.addEdge('D', 'E');
  matrixGraph.addEdge('B', 'E');

  console.log("=== 인접 행렬 결과 ===");
  matrixGraph.printMatrix();
}

{
  /**
   * 인접 리스트 (Adjacency List)
   * - 각 정점을 Key로, 연결된 정점 배열을 Value로 갖는 객체(Map) 사용
   */
  class AdjacencyList {
    constructor() {
      this.list = {};
    }

    addVertex(v) {
      if (!this.list[v]) this.list[v] = [];
    }

    // 방향성 간선 추가: v1 -> v2
    addEdge(v1, v2) {
      this.addVertex(v1);
      this.addVertex(v2);
      this.list[v1].push(v2);
    }

    printList() {
      for (let v in this.list) {
        console.log(`${v} => [ ${this.list[v].join(", ")} ]`);
      }
    }
  }

  // --- 호출부 ---
  const listGraph = new AdjacencyList();

  // 이미지 데이터 기반 간선 추가
  const directedEdges = [
    ['A', 'B'], ['A', 'C'], 
    ['D', 'B'], ['D', 'C'], ['D', 'E'],
    ['B', 'E']
  ];

  directedEdges.forEach(([from, to]) => listGraph.addEdge(from, to));

  console.log("\n=== 인접 리스트 결과 ===");
  listGraph.printList();
}

{
  class Graph {
    constructor() {
      this.adjacencyList = {}; // 정점별 인접 노드를 배열로 관리하는 인접 리스트
    }

    // 정점 추가: 리스트에 해당 키가 없으면 빈 배열로 초기화
    addVertex(v) {
      if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
    }

    // 간선 추가 (방향성: src -> dest)
    addEdge(src, dest) {
      this.addVertex(src);
      this.addVertex(dest);
      this.adjacencyList[src].push(dest);
    }

    /**
     * DFS (깊이 우선 탐색): 재귀 방식
     * @param {string} start - 탐색을 시작할 정점 이름
     */
    dfs(start) {
      const result = [];      // 방문한 순서대로 저장할 배열
      const visited = {};     // 중복 방문을 방지하기 위한 체크 객체 (Hash Map 역할)
      const list = this.adjacencyList; // 인접 리스트 참조

      // 재귀적으로 동작하는 내부 헬퍼 함수
      (function traverse(vertex) {
        if (!vertex) return;       // 정점이 없으면 종료
        visited[vertex] = true;    // 1. 현재 정점 방문 처리 (체크)
        result.push(vertex);       // 2. 결과 배열에 기록

        // 3. 현재 정점과 연결된 인접 노드들을 하나씩 확인
        list[vertex].forEach(neighbor => {
          // 아직 방문하지 않은 이웃 노드가 있다면 바로 그 노드로 깊게 침투(재귀 호출)
          if (!visited[neighbor]) {
            traverse(neighbor);
          }
        });
      })(start);

      return result;
    }

    /**
     * BFS (너비 우선 탐색): 큐 방식
     * @param {string} start - 탐색을 시작할 정점 이름
     */
    bfs(start) {
      const queue = [start];  // 방문 예정인 노드를 담는 큐 (FIFO)
      const result = [];      // 방문 완료 순서
      const visited = {};     // 방문 체크 객체

      visited[start] = true;  // 시작 노드 예약 처리

      // 큐가 빌 때까지 반복 (더 이상 갈 곳이 없을 때까지)
      while (queue.length > 0) {
        // 1. 큐의 맨 앞(가장 먼저 들어온 노드)을 꺼냄
        const current = queue.shift(); 
        result.push(current);

        // 2. 꺼낸 노드와 인접한 노드들을 수평적으로 확인
        this.adjacencyList[current].forEach(neighbor => {
          // 아직 방문하지 않은 이웃 노드라면
          if (!visited[neighbor]) {
            visited[neighbor] = true; // 방문 예정이라고 체크 (중복 방지)
            queue.push(neighbor);     // 큐의 뒤쪽에 추가하여 다음 순번으로 대기시킴
          }
        });
      }

      return result;
    }
  }

  /**
   * 실행 및 호출부 
   */
  const graph = new Graph();

  // 이미지 속 Directed Graph 관계도 입력
  const directedEdges = [
    ['A', 'B'], ['A', 'C'], 
    ['D', 'B'], ['D', 'C'], ['D', 'E'],
    ['B', 'E']
  ];
  directedEdges.forEach(([from, to]) => graph.addEdge(from, to));

  console.log("--- 그래프 탐색 결과 ---");

  // A에서 시작할 경우
  console.log("DFS (시작: A) ->", graph.dfs('A')); 
  // 예상 결과: [ 'A', 'B', 'E', 'C' ] (A->B 방문 후 끝까지(E) 갔다가 돌아와서 C 방문)

  console.log("BFS (시작: A) ->", graph.bfs('A')); 
  // 예상 결과: [ 'A', 'B', 'C', 'E' ] (A의 이웃 B, C를 먼저 다 보고 그다음 멀리 있는 E 방문)

  // D에서 시작할 경우 (모든 정점 방문 가능)
  console.log("BFS (시작: D) ->", graph.bfs('D'));
  // 예상 결과: [ 'D', 'B', 'C', 'E' ]
}

{
  /**
   * 방향 그래프 (Directed Graph) 클래스 정의
   */
  class DirectedGraph {
    constructor() {
      // 각 정점과 그에 연결된 인접 정점들을 저장할 객체
      this.adjacencyList = {};
    }

    // 정점(Vertex) 추가
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
        console.log(`[시스템] 정점 '${vertex}'가 생성되었습니다.`);
      }
    }

    // 방향성 간선(Edge) 추가 (v1 -> v2)
    addEdge(source, destination) {
      if (this.adjacencyList[source] && this.adjacencyList[destination]) {
        this.adjacencyList[source].push(destination);
        console.log(`[연결] ${source} → ${destination} (단방향)`);
      } else {
        console.error("[오류] 존재하지 않는 정점이 포함되어 있습니다.");
      }
    }

    // 그래프 전체 구조 출력
    display() {
      console.log("\n--- 현재 소셜 네트워크 관계도 ---");
      for (let user in this.adjacencyList) {
        const follows = this.adjacencyList[user].length > 0 
                        ? this.adjacencyList[user].join(", ") 
                        : "없음";
        console.log(`${user} 팔로우 목록: [ ${follows} ]`);
      }
    }
  }

  /**
   * 실행 및 호출부 
   */
  const sns = new DirectedGraph();

  // 1. 사용자(정점) 등록
  sns.addVertex("BTS_Official");
  sns.addVertex("User_A");
  sns.addVertex("User_B");

  // 2. 관계(방향 간선) 설정
  // 일반 유저들이 공식 계정을 팔로우함 (일방적 관계)
  sns.addEdge("User_A", "BTS_Official");
  sns.addEdge("User_B", "BTS_Official");

  // 유저들끼리의 관계
  sns.addEdge("User_A", "User_B"); // A가 B를 팔로우함

  // 3. 네트워크 시각화 출력
  sns.display();

  /* [출력 결과]
  BTS_Official 팔로우 목록: [ 없음 ] (영향력 있는 노드/Sink Node)
  User_A 팔로우 목록: [ BTS_Official, User_B ]
  User_B 팔로우 목록: [ BTS_Official ]
  */
}

{
  /**
   * 방향 그래프 클래스 구현
   */
  class DirectedGraph {
    constructor() {
      this.adjacencyList = {}; // 인접 리스트 객체
    }

    // 정점(Vertex) 추가
    addVertex(v) {
      if (!this.adjacencyList[v]) {
        this.adjacencyList[v] = [];
        console.log(`정점 [${v}] 생성`);
      }
    }

    // 방향성 간선(Edge) 추가 (source -> destination)
    addEdge(src, dest) {
      if (this.adjacencyList[src] && this.adjacencyList[dest]) {
        this.adjacencyList[src].push(dest);
        console.log(`연결: ${src} → ${dest}`);
      }
    }

    // 그래프 전체 구조 출력
    showGraph() {
      console.log("\n--- 인접 리스트 출력 ---");
      for (let node in this.adjacencyList) {
        const neighbors = this.adjacencyList[node].join(", ");
        console.log(`${node}: [ ${neighbors} ]`);
      }
    }
  }

  /**
   * 실행 및 호출부 (이미지 데이터 기준)
   */
  const myGraph = new DirectedGraph();

  // 1. 이미지상의 모든 정점 등록
  ["A", "B", "C", "D", "E"].forEach(v => myGraph.addVertex(v));

  // 2. 이미지의 화살표 방향에 따른 간선 연결
  myGraph.addEdge("A", "B");
  myGraph.addEdge("A", "C");
  myGraph.addEdge("D", "B");
  myGraph.addEdge("D", "C");
  myGraph.addEdge("D", "E");
  myGraph.addEdge("B", "E");

  // 3. 결과 확인
  myGraph.showGraph();

  /* 실행 결과:
  A: [ B, C ]
  B: [ E ]
  C: [ ]
  D: [ B, C, E ]
  E: [ ]
  */
}

{
  /**
   * SNS 친구 추천 시스템
   */
  class SocialNetwork {
    constructor() {
      this.adjList = {};
    }

    // 사용자(정점) 추가
    addUser(name) {
      if (!this.adjList[name]) this.adjList[name] = [];
    }

    // 친구 관계(무방향 간선) 추가
    addFriendship(u1, u2) {
      this.adjList[u1].push(u2);
      this.adjList[u2].push(u1);
    }

    // 2촌 관계(친구의 친구) 추천 로직
    recommend(target) {
      if (!this.adjList[target]) return [];

      const myFriends = new Set(this.adjList[target]); // 나의 1촌 친구들
      const suggestions = new Set();

      // 내 친구들의 친구 목록을 전수 조사
      for (let friend of myFriends) {
        for (let fof of this.adjList[friend]) {
          // 본인이 아니고, 이미 내 친구가 아닌 사람만 골라냄
          if (fof !== target && !myFriends.has(fof)) {
            suggestions.add(fof);
          }
        }
      }
      return Array.from(suggestions);
    }
  }

  // --- 호출 및 실행 ---
  const sns = new SocialNetwork();
  ["철수", "영희", "민수", "지호", "혜진"].forEach(name => sns.addUser(name));

  sns.addFriendship("철수", "영희"); // 철수-영희 친구
  sns.addFriendship("철수", "민수"); // 철수-민수 친구
  sns.addFriendship("영희", "지호"); // 영희-지호 친구 (철수의 2촌)
  sns.addFriendship("민수", "혜진"); // 민수-혜진 친구 (철수의 2촌)

  console.log(`[인맥 추천] 철수님과 알 수도 있는 사람:`, sns.recommend("철수"));
  // 출력 결과: [ '지호', '혜진' ]
}

{
  /**
   * 배달 경로 소요 시간 관리
   */
  class DeliveryMap {
    constructor() {
      this.locations = {};
    }

    addLocation(loc) {
      this.locations[loc] = [];
    }

    // 구간 정보 추가 (출발, 도착, 소요시간)
    addRoute(from, to, time) {
      this.locations[from].push({ target: to, cost: time });
      this.locations[to].push({ target: from, cost: time });
    }

    // 특정 위치의 배달 가능 경로 확인
    showRoutes(currentLoc) {
      console.log(`\n--- [${currentLoc}] 출발 배달 노선 ---`);
      this.locations[currentLoc].forEach(route => {
        console.log(`목적지: ${route.target} | 예상소요: ${route.cost}분`);
      });
    }
  }

  // --- 호출 및 실행 ---
  const delivery = new DeliveryMap();
  ["강남", "역삼", "선릉", "논현"].forEach(loc => delivery.addLocation(loc));

  delivery.addRoute("강남", "역삼", 10);
  delivery.addRoute("역삼", "선릉", 15);
delivery.addRoute("강남", "논현", 8);

delivery.showRoutes("강남");
/* 출력 결과:
목적지: 역삼 | 예상소요: 10분
목적지: 논현 | 예상소요: 8분
*/
}

{
  /**
   * 수강 신청 선수과목 로드맵
   */
  class CourseRoadmap {
    constructor() {
      this.courses = {};
    }

    addCourse(title) {
      this.courses[title] = [];
    }

    // 선수과목 관계 추가 (A를 들어야 B 수강 가능)
    addPrerequisite(pre, post) {
      this.courses[pre].push(post);
    }

    // 특정 과목 이후의 추천 학습 경로 (DFS 탐색)
    getLearningPath(startCourse) {
      const path = [];
      const visited = new Set();

      const traverse = (course) => {
        visited.add(course);
        path.push(course);
        this.courses[course].forEach(next => {
          if (!visited.has(next)) traverse(next);
        });
      };

      traverse(startCourse);
      return path.join(" → ");
    }
  }

  // --- 호출 및 실행 ---
  const myLecture = new CourseRoadmap();
  ["프로그래밍 입문", "JS 기초", "리액트", "자료구조"].forEach(c => myLecture.addCourse(c));

  myLecture.addPrerequisite("프로그래밍 입문", "JS 기초");
  myLecture.addPrerequisite("JS 기초", "리액트");
  myLecture.addPrerequisite("JS 기초", "자료구조");

  console.log("\n[학습 로드맵]");
  console.log("추천 경로:", myLecture.getLearningPath("프로그래밍 입문"));
  // 출력 결과: 프로그래밍 입문 → JS 기초 → 리액트 → 자료구조
}