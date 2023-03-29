const park = 
["SOOXOO",
 "XOOXOX",
 "XXOXOX",
 "XXOOOX"];
const routes = ["E 2","S 3","E 2", "N 3", "E 1"];
function solution(park, routes) {
    var answer = [];

    for(let i=0;i<park.length;i++) {
        let idx = park[i].indexOf('S');
        if(idx >= 0) {
            answer = [i, idx];
            break;
        }
    }
    
    const MAX_W = park[0].length; 
    const MAX_H = park.length;
    let movable = true;
    for(let c of routes) {
        const arr = c.split(' ');
        const step = parseInt(arr[1]);
        switch(arr[0]) {
            case 'E':
                if(MAX_W > answer[1] + step) {
                    for(let i=0;i<arr[1];i++) {
                        if(park[answer[0]][answer[1] + (i + 1)] == 'X') {
                            movable = false;
                            break;
                        }
                    }
                    if(movable) {
                        answer = [answer[0], answer[1] + step];
                    }
                }
                break;
            case 'W':
                if(answer[1] - step >= 0) {
                    for(let i=0;i<arr[1];i++) {
                        if(park[answer[0]][answer[1] - (i + 1)] == 'X') {
                            movable = false;
                            break;
                        }
                    }
                    if(movable) {
                        answer = [answer[0], answer[1] - step];
                    }
                }
                break;
            case 'S':
                if(MAX_H > answer[0] + step) {
                    for(let i=0;i<arr[1];i++) {
                        if(park[answer[0] + (i + 1)][answer[1]] == 'X') {
                            movable = false;
                            break;
                        }
                    }
                    if(movable) {
                        answer = [answer[0] + step, answer[1]];
                    }
                }
                break;
            case 'N': 
            if(answer[0] - step >= 0) {
                for(let i=0;i<arr[1];i++) {
                    if(park[answer[0] - (i + 1)][answer[1]] == 'X') {
                        movable = false;
                        break;
                    }
                }
                if(movable) {
                    answer = [answer[0] - step, answer[1]];
                }
            }
                break;   
        }
        movable = true;
        console.log(answer);
    }
        
    return answer;
}

const answer = solution(park, routes);
console.log(answer);