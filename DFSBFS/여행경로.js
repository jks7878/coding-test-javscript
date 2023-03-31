const tickets = [["ICN", "ATL"], ["ICN", "SFO"], ["SFO", "HND"], ["HND", "ICN"]]; // ICN SFO HND ICN ATL
[["ICN", "B"], ["B", "ICN"], ["ICN", "A"], ["A", "D"], ["D", "A"]]; // ["ICN", "B", "ICN", "A", "D", "A"]
[["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]];
[["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]];

function bfs(tickets) {
    // 1. 그래프를 인접 리스트 형태로 만든다.
    const graph = {};
    for(const [from, to] of tickets) {
      if(!graph[from]) {
        graph[from] = [];
      }
      graph[from].push(to);
    }
  
    // 2. 출발점에서부터 BFS를 진행한다.
    const queue = [['ICN', ['ICN'], []]];
    while(queue.length > 0) {
        const [current, path, visited] = queue.shift();

        // 3. 모든 티켓을 사용했으면 결과를 반환한다
        if(path.length === tickets.length + 1) {
            return path;
        }
    
        // 4. 아직 사용하지 않은 티켓 중에서 다음 경로를 탐색한다
        if(graph[current]) {
            for(let i = 0; i < graph[current].length; i++) {
                const next = graph[current][i];

                if(visited.includes(`${current}:${next}`)) continue;

                visited.push(`${current}:${next}`) // 중복 방문 방지를 위한 사용한 티켓 목록 추가
                queue.push([next, [...path, next], [...visited]]);
               
                visited.pop(); // 경로별로 다른 티켓을 사용하기 때문에 일전에 추가된 데이터를 제거 후 새로 넣어준다
            }
        }
    }
}

function dfs(start, stack, tickets, visited) {
    if(stack.length === tickets.length) return stack;
    for(let i = 0; i < tickets.length; i++) {
        if(!visited[i] && tickets[i][0] === start) {
            visited[i] = true;
            stack.push([tickets[i][1], i]);

            dfs(tickets[i][1], stack, tickets, visited);

            visited[i] = false;         
            if(stack.length === tickets.length) break;
            else stack.pop();
        }    
    }

    return stack;
}

function solution(tickets) {
    var answer = ["ICN"];

    const sortedTickets = tickets.sort();
    const visited = Array(tickets.length).fill(false);

    const res = dfs(answer[answer.length - 1], [], sortedTickets, visited);
    for(const t of res) {
        answer.push(t[0]);
    }

    const bfs_answer = bfs(tickets);
    console.log(bfs_answer);
    return answer;
}

const answer = solution(tickets);
console.log(answer);