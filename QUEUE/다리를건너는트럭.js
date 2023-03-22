const bridge_length	= 2;
const weight = 10;	
const truck_weights = [7,4,5,6];
// const bridge_length	= 100;
// const weight = 100;	
// const truck_weights = [10];
// const bridge_length	= 100;
// const weight = 100;	
// const truck_weights = [10,10,10,10,10,10,10,10,10,10];
function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    
    let q = Array(bridge_length).fill(0);
    let sum = 0;
    while(true) {
        if(q.length == 0 && truck_weights.length == 0) break;
        if(q[0] > 0) {
            sum -= q[0];
        }
    
        q.shift();     

        if(weight >= sum + truck_weights[0] && truck_weights.length > 0) {
            let t = truck_weights.shift();
            q.push(t);
            sum += t;
            answer += 1;
            console.log(q);
        }else {
            if(truck_weights.length > 0) q.push(0);
            answer += 1;
            console.log(q);
        }  
    }

    return answer;
}

const answer = solution(bridge_length, weight, truck_weights);;
console.log(answer);