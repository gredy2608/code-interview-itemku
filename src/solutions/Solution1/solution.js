function solution(record) {
    let answer = [];
    let logs = [];
    let users = [];

    //Map record to logs and users list
    for (let rec of record) {
        let activity = rec.split(" ");
        let action = activity[0];
        let uid = activity[1];
        let username = activity[2];
        switch (action) {
            case "Enter":
                logs.push(
                    [uid, "came in."]
                );
                users[uid] = {
                    username: username,
                    active: true
                };
                break;
            case "Leave":
                if (users[uid]) {
                    logs.push(
                        [uid, "has left."]
                    );
                    users[uid].active = false;
                }
                break;
            case "Change":
                if (users[uid] && users[uid].active) {
                    users[uid].username = username;
                }
                break;
            default:
                break;
        }
    }

    //Map user name to logs to return current user name
    for (var log of logs) {
        let uid = log[0];
        log[0] = users[uid].username;
        answer.push(log.join(" "));
    }
    return answer;
}

export {
    solution
}