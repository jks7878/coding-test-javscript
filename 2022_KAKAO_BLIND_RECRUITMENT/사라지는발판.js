let board = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];	
let aloc = [1, 0];	
let bloc = [1, 2];

// [y, x]
function getNextLocate(locate, dest) {
    let x = 0;
    let y = 0;

    switch(dest) {
        case 0:
            x += 1;
            break;
        case 1:
            y = locate[0] + 1;
            break;
        case 2:
            y = locate[0] - 1;
            break;
    }

    return [y, x];
}

function solution(board, aloc, bloc) {
    var answer = -1;
    getNextLocat(aloc, Math.abs(bloc[0] - aloc[0]));
    return answer;
}