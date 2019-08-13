function solution(N, users) {
    let answer = [];
    let stageFailureRate = [];
    let totalUnprocessedUsers = users.length;

    let max = -1;

    for (let stage = 1; stage <= N; stage++) {
        let nStucked = users.filter(x => x === stage).length;
        stageFailureRate[stage] = [stage, nStucked !== 0 ? nStucked / totalUnprocessedUsers : 0];
        totalUnprocessedUsers = totalUnprocessedUsers - nStucked;
        max = stageFailureRate[stage] > max ? stageFailureRate[stage] : max;
    }

    stageFailureRate.sort((a, b) => a[1] <= b[1] ? 1 : -1);

    for (let stage = 0; stage < N; stage++) {
        answer.push(stageFailureRate[stage][0]);
    }

    return answer;
}

export {
    solution
}