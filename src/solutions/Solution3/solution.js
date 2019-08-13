function solution(relation) {
    let answer = 0;
    let columns = [];
    let uniqueCombination = []; // List to save column combination that have unique data

    for (let i = 0; i < relation[0].length; i++) {
        columns[i] = i;
    }

    let subsets = getSubset(columns);

    subsets.sort((a, b) => a.length > b.length ? 1 : -1);

    for (let i = 1; i < subsets.length; i++) {
        let data = [];
        //get paired columns data(s)
        for (let j = 0; j < subsets[i].length; j++) {
            let col = subsets[i][j];
            for (let k = 0; k < relation.length; k++) {
                if (!data[k]) {
                    data[k] = []
                }
                data[k].push(relation[k][col]);
            }
        }
        //merge data as string to make comparison easier
        for (let l = 0; l < data.length; l++) {
            data[l] = data[l].join();
        }

        //check if data for paired columns is unique
        if (isUnique(data)) {
            //if subset contained combination between more than one columns check it's sub subset
            if (subsets[i].length > 1) {
                let subsubsets = getSubset(subsets[i]);
                let isUnique = true;
                //check if sub subset already in founded combination
                for (let subsubset of subsubsets) {
                    if (uniqueCombination.find(x => JSON.stringify(x) === JSON.stringify(subsubset))) {
                        isUnique = false;
                        break;
                    }
                }
                if (isUnique) {
                    // add new column combination to unique combination list
                    uniqueCombination.push(subsets[i]);
                    answer++;
                }
            } else {
                uniqueCombination.push(subsets[i]);
                answer++;
            }
        }
    }
    return answer;
}

function getSubset(arr) {
    let subsets = [];
    for (let i = 0; i < (1 << arr.length); i++) {
        let subset = [];
        for (let j = 0; j < arr.length; j++) {
            if ((i & (1 << j)) > 0) {
                subset.push(arr[j]);
            }
        }
        subsets.push(subset);
    }
    return subsets;
}

function isUnique(arr) {
    arr.sort();
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return false;
        }
    }

    return true;
}

export {
    solution
}