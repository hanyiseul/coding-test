const graph = {
  "집": [
    { node: '역곡역', cost: 10 },
  ],
  "역곡역": [
    { node: "집", cost: 10 },
    { node: "충정로", cost: 30 },
    { node: "서울역", cost: 32 }
  ],
  "충정로": [
    { node: '역곡역', cost: 30 },
    { node: '학원', cost: 5 },
  ],
  "서울역": [
    { node: '역곡역', cost: 32 },
    { node: '학원', cost: 17 }
  ],
  "학원": [
    { node: '충정로', cost: 5 },
    { node: '서울역', cost: 17 }
  ],
};

function dfs(graph, start, visited = {}, result = []) {
  visited[start] = true;
  result.push(start);

  for (let edge of graph[start]) {
    if (!visited[edge.node]) {
      dfs(graph, edge.node, visited, result);
    }
  }

  return result;
}

console.log("전체 구조를 확인", dfs(graph, '집'));

function hasPath(graph, start, target) {
  const queue = [start];
  const visited = {};

  visited[start] = true;

  while (queue.length > 0) {
    const current = queue.shift();

    if (current === target) return true;

    for (let edge of graph[current]) {
      if (!visited[edge.node]) {
        visited[edge.node] = true;
        queue.push(edge.node);
      }
    }
  }

  return false;
}

console.log("경로 존재 여부 판단", hasPath(graph, '집', '학원'));

function dijkstra(graph, start) {
  const dist = {};
  const visited = {};
  const queue = [];

  for (let node in graph) {
    dist[node] = Infinity;
  }

  dist[start] = 0;
  queue.push({ node: start, cost: 0 });

  while (queue.length > 0) {
    queue.sort((a, b) => a.cost - b.cost);
    const { node } = queue.shift();

    if (visited[node]) continue;
    visited[node] = true;

    for (let edge of graph[node]) {
      const newCost = dist[node] + edge.cost;

      if (newCost < dist[edge.node]) {
        dist[edge.node] = newCost;
        queue.push({ node: edge.node, cost: newCost });
      }
    }
  }

  return dist;
}

console.log("최소 비용 계산", dijkstra(graph, '집'));

function dijkstraPath(graph, start, end) {
  const dist = {};
  const prev = {};
  const visited = {};
  const queue = [];

  for (let node in graph) {
    dist[node] = Infinity;
    prev[node] = null;
  }

  dist[start] = 0;
  queue.push({ node: start, cost: 0 });

  while (queue.length > 0) {
    queue.sort((a, b) => a.cost - b.cost);
    const { node } = queue.shift();

    if (visited[node]) continue;
    visited[node] = true;

    for (let edge of graph[node]) {
      const newCost = dist[node] + edge.cost;

      if (newCost < dist[edge.node]) {
        dist[edge.node] = newCost;
        prev[edge.node] = node;
        queue.push({ node: edge.node, cost: newCost });
      }
    }
  }

  const path = [];
  let current = end;

  while (current !== null) {
    path.unshift(current);
    current = prev[current];
  }

  return {
    distance: dist[end],
    path: path
  };
}

console.log("최적 경로 추적",dijkstraPath(graph, '집', '학원'));

function removeEdge(graph, from, to) {
  graph[from] = graph[from].filter(e => e.node !== to);
  graph[to] = graph[to].filter(e => e.node !== from);
}

removeEdge(graph, '역곡역', '충정로');

console.log("장애 상황 처리", dijkstraPath(graph, '집', '학원'));

function findMaxEdge(graph) {
  let max = { cost: 0 };

  for (let node in graph) {
    for (let edge of graph[node]) {
      if (edge.cost > max.cost) {
        max = { from: node, to: edge.node, cost: edge.cost };
      }
    }
  }

  return max;
}

console.log("병목 구간 분석", findMaxEdge(graph));

function filterGraph(graph, limit) {
  const newGraph = {};

  for (let node in graph) {
    newGraph[node] = graph[node].filter(e => e.cost <= limit);
  }

  return newGraph;
}

const limitedGraph = filterGraph(graph, 5);

console.log("조건 기반 경로 제한", dijkstraPath(limitedGraph, '집', '학원'));