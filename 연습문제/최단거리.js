// const maps = [
//     [1,0,1,1,1],
//     [1,0,1,0,1],
//     [1,0,1,1,1],
//     [1,1,1,0,1],
//     [0,0,0,0,1]
// ];
const maps = [
    [1,1,1,0,1]
];
// const maps = [
//     [1,1,1,1,1],
//     [0,0,1,0,1],
//     [0,0,1,0,1],
//     [0,0,1,0,1]
// ];

function solution(maps) {
    var answer = 0;

    const DIRECTIONS = [[1, 0], [0, 1], [-1, 0], [0, -1]]; // 진행 가능한 방향
    const max_row = maps.length - 1;
    const max_col = maps[0].length - 1;
    const visited = Array(max_row + 1).fill().map(() => Array(max_col + 1).fill(false));
    const queue = [[0, 0, 1]]; // [y축, x축, 지나온 길의 횟수]
    while(queue.length > 0) {
        const [row, col, cnt] = queue.shift();

        if(maps[row][col] === 0 || visited[row][col]) continue;
        if(maps[row][col] !== 0 && !visited[row][col]) visited[row][col] = true;

        for(let direction of DIRECTIONS) {
            const nextRow = row + direction[0];
            const nextCol = col + direction[1];
            if(max_row >= nextRow && nextRow >= 0 && max_col >= nextCol && nextCol >= 0) {

                queue.push([nextRow, nextCol, cnt + 1]);
            }
        }  

        if(visited[max_row][max_col]) {
            answer = cnt;
            break;
        }
    }
    
    if(!visited[max_row][max_col]) answer = -1;

    return answer;
}

const answer = solution(maps);
console.log(answer);