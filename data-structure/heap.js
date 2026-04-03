class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] <= this.heap[i]) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    heapifyDown() {
        let i = 0;
        while (2 * i + 1 < this.heap.length) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smaller = left;

            if (right < this.heap.length && this.heap[right] < this.heap[left]) {
                smaller = right;
            }

            if (this.heap[i] <= this.heap[smaller]) break;

            [this.heap[i], this.heap[smaller]] = [this.heap[smaller], this.heap[i]];
            i = smaller;
        }
    }

    peek() {
        return this.heap[0];
    }
}

// 테스트 코드 추가
const minHeap = new MinHeap();
console.log("Inserting: 10, 5, 20, 2");
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(2);

console.log("Current Min (peek):", minHeap.peek());
console.log("Extracting Min:", minHeap.extractMin());
// console.log("Extracting Min:", minHeap.extractMin());
console.log("Final Heap State:", minHeap.heap);


{
  class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] <= this.heap[i]) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    heapifyDown() {
        let i = 0;
        while (2 * i + 1 < this.heap.length) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smaller = left;

            if (right < this.heap.length && this.heap[right] < this.heap[left]) {
                smaller = right;
            }

            if (this.heap[i] <= this.heap[smaller]) break;

            [this.heap[i], this.heap[smaller]] = [this.heap[smaller], this.heap[i]];
            i = smaller;
        }
    }
  }

  const heap = new MinHeap();
  heap.insert(40);
  heap.insert(10);
  heap.insert(30);
  heap.insert(5);

  console.log(heap.extractMin()); // 5
  console.log(heap.extractMin()); // 10
}

{
  class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(value, priority) {
        this.heap.push({ value, priority });
        this.heapifyUp();
    }

    heapifyUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[parent].priority <= this.heap[i].priority) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    dequeue() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return top;
    }

    heapifyDown() {
        let i = 0;
        while (2 * i + 1 < this.heap.length) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smaller = left;

            if (right < this.heap.length && this.heap[right].priority < this.heap[left].priority) {
                smaller = right;
            }

            if (this.heap[i].priority <= this.heap[smaller].priority) break;

            [this.heap[i], this.heap[smaller]] = [this.heap[smaller], this.heap[i]];
            i = smaller;
        }
    }
  }

  const pq = new PriorityQueue();
  pq.enqueue("긴급 장애 처리", 1);
  pq.enqueue("일반 문의", 5);
  pq.enqueue("보안 점검", 2);

  console.log("동기처리 : ", pq.dequeue()); // { value: '긴급 장애 처리', priority: 1 }
  console.log(pq.dequeue()); // { value: '보안 점검', priority: 2 }
}

{
  class PriorityQueue {
    constructor() {
      this.heap = [];
    }

    enqueue(value, priority) {
      this.heap.push({ value, priority });
      this.heapifyUp();
    }

    heapifyUp() {
      let i = this.heap.length - 1;

      while (i > 0) {
        let parent = Math.floor((i - 1) / 2);

        if (this.heap[parent].priority <= this.heap[i].priority) break;

        [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
        i = parent;
      }
    }

    dequeue() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();

      const top = this.heap[0];
      this.heap[0] = this.heap.pop();

      this.heapifyDown();
      return top;
    }

    heapifyDown() {
      let i = 0;

      while (2 * i + 1 < this.heap.length) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let smaller = left;

        if (
          right < this.heap.length &&
          this.heap[right].priority < this.heap[left].priority
        ) {
          smaller = right;
        }

        if (this.heap[i].priority <= this.heap[smaller].priority) break;

        [this.heap[i], this.heap[smaller]] = [
          this.heap[smaller],
          this.heap[i],
        ];

        i = smaller;
      }
    }
  }

  const taskQueue = new PriorityQueue();


  // JS 실제 task 이름 기반
  taskQueue.enqueue("process.nextTick()", 1);
  taskQueue.enqueue("queueMicrotask()", 1);
  taskQueue.enqueue("Promise.then()", 1);
  taskQueue.enqueue("MutationObserver callback", 1);

  taskQueue.enqueue("setTimeout()", 2);
  taskQueue.enqueue("setInterval()", 2);
  taskQueue.enqueue("setImmediate()", 2);
  taskQueue.enqueue("MessageChannel", 2);

  taskQueue.enqueue("requestAnimationFrame()", 3);
  taskQueue.enqueue("I/O callback", 3);


  // 이벤트 루프 시뮬레이션
  function eventLoopSimulation() {

    console.log("===== Event Loop Start =====");

    let step = 1;

    while (true) {

      const task = taskQueue.dequeue();

      if (!task) break;

      console.log(`Step ${step} 실행 → ${task.value}`);
      step++;

    }

    console.log("===== Event Loop End =====");

  }

  eventLoopSimulation();
}

{
  class EmergencyQueue {
    constructor() {
        this.heap = [];
    }

    addPatient(name, level) {
        this.heap.push({ name, level });
        this.heapifyUp();
    }

    heapifyUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[parent].level <= this.heap[i].level) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    treatPatient() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const patient = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return patient;
    }

    heapifyDown() {
        let i = 0;
        while (2 * i + 1 < this.heap.length) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smaller = left;

            if (right < this.heap.length && this.heap[right].level < this.heap[left].level) {
                smaller = right;
            }

            if (this.heap[i].level <= this.heap[smaller].level) break;

            [this.heap[i], this.heap[smaller]] = [this.heap[smaller], this.heap[i]];
            i = smaller;
        }
    }
  }

  const er = new EmergencyQueue();
  er.addPatient("환자A", 3);
  er.addPatient("환자B", 1);
  er.addPatient("환자C", 2);

  console.log(er.treatPatient()); // 응급도 1인 환자B 먼저 처리
}

{
  class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(node, cost) {
        this.heap.push({ node, cost });
        this.heap.sort((a, b) => a.cost - b.cost);
    }

    dequeue() {
        return this.heap.shift();
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

function dijkstra(graph, start) {
    const dist = {};
    const pq = new PriorityQueue();

    for (const node in graph) {
        dist[node] = Infinity;
    }

    dist[start] = 0;
    pq.enqueue(start, 0);

    while (!pq.isEmpty()) {
        const current = pq.dequeue();
        const currentNode = current.node;
        const currentCost = current.cost;

        if (currentCost > dist[currentNode]) continue;

        for (const next of graph[currentNode]) {
            const newCost = currentCost + next.cost;
            if (newCost < dist[next.node]) {
                dist[next.node] = newCost;
                pq.enqueue(next.node, newCost);
            }
        }
    }

    return dist;
  }

  const graph = {
      A: [{ node: "B", cost: 1 }, { node: "C", cost: 4 }],
      B: [{ node: "C", cost: 2 }, { node: "D", cost: 5 }],
      C: [{ node: "D", cost: 1 }],
      D: []
  };

  console.log(dijkstra(graph, "A")); // { A: 0, B: 1, C: 3, D: 4 }
}