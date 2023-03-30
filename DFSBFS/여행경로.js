const tickets = [["ICN", "B"], ["B", "ICN"], ["ICN", "A"], ["A", "D"], ["D", "A"]]; // ["ICN", "B", "ICN", "A", "D", "A"]
[["ICN", "ATL"], ["ICN", "SFO"], ["SFO", "HND"], ["HND", "ICN"]]; // ICN SFO HND ICN ATL
[["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]];
[["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]];


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

    return answer;
}

const answer = solution(tickets);
console.log(answer);