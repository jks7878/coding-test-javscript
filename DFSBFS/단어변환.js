
const begin = "hit";
const target = "cog";
const words = ["hot", "dot", "lot", "dog", "cog"];

function solution(begin, target, words) {
    var answer = 0;

    let visited = []; // 방문한 노드를 저장하기 위한 배열
    let tmpArr = [{str: begin, depth: 0}]; // 변환된 단어와 depth를 저장하기 위한 queue 
    while(tmpArr.length != 0) { // queue에서 값을 하나씩 꺼내 이하의 for문으로 검사
        console.log(tmpArr);
        let tmp = tmpArr.shift(); 

        if(tmp.str === target) { 
            console.log(tmp.depth);
            return tmp.depth;
        }
        
        for(let word of words) { // for문을 돌면서 words의 단어와 비교하여 바뀌는 글자수가 1일 경우 새로 queue에 넣고 depth + 1
            let nq = 0;
            if(visited.includes(word)) continue;
            for(let i=0;i<word.length;i++) {
                if(tmp.str[i] !== word[i]) {
                    nq++;
                }
            }
            console.log(word);
            if(nq === 1) {
                visited.push(word);
                tmpArr.push({str: word, depth: tmp.depth + 1});        
            }

        }
    }

    console.log(answer);
    return answer;
}

solution(begin, target, words);