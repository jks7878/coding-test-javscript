// idx 0 : dia, 1 : iron, 2 : stone
// const picks = [1, 0, 1]; 
// const minerals = ["iron", "diamond", "diamond", "diamond", "diamond", "diamond", "diamond", "diamond", "diamond", "stone"];
// const picks = [1, 3, 2]; 
// const minerals = ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"];
// const picks = [1, 1, 0]; 
// const minerals = ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone","iron", "iron", "diamond","diamond"]; // 14
const picks = [0, 1, 0]; 
const minerals = ['stone', 'stone', 'stone', 'stone', 'stone']; // 5

function solution(picks, minerals) {
    var answer = 0;

    let mineralCost = Array(picks[0] + picks[1] + picks[2]).fill(0);
    let cnt = 0;
    for(let m of minerals) {
        let i = parseInt(cnt / 5);
        if(i >= mineralCost.length) break;
        if(m === "diamond") mineralCost[i] += 25;
        if(m === "iron") mineralCost[i] += 5;
        if(m === "stone") mineralCost[i] += 1;
        cnt++;
    }  
    mineralCost.sort((a, b) => b - a);
    console.log(mineralCost);
    mineralCost.forEach(e => {
        if(picks[0]+picks[1]+picks[2] > 0 && e != 0) {
            let pick = 0;
            
            if(e >= 25) pick = picks[0] > 0 ? 0 : picks[1] > 0 ? 1 : 2;
            else if(e >= 5) pick = picks[1] > 0 ? 1 : picks[0] > 0 ? 0 : 2;
            else pick = picks[2] > 0 ? 2 : picks[1] > 0 ? 1 : 0;
            console.log(`pick : ${pick}`);
            if(pick === 0) {
                if(e >= 25) {
                    answer += parseInt(e / 25) + parseInt(e % 25 / 5) + (e % 25 % 5);
                }else if(e >= 5 && minerals.length > 1) {
                    answer += parseInt(e / 5) + (e % 5);
                }else {
                    answer += e;
                }
            }else if(pick === 1) {
                if(e >= 5) {
                    answer += parseInt(e / 5) + (e % 5);
                }else {
                    answer += e;
                }
            }else answer += e / 1;
            console.log(`answer : ${answer}`);
            picks[pick] -= 1;
        }
    });

    return answer;
}

const answer = solution(picks, minerals);
console.log(answer);