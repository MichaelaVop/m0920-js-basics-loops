const testScores = {
    koji: 80,
    inae: 77,
    yuri: 89,
    marina: 91,
    ayumi: 72,
    ami: 77,
    danilo: 83,
    miriam: 97,
    moses: 81
}

// ==============================================
// using For..In to iterate an object
// ==============================================

for (let person in testScores){
    console.log(`${person} scored ${testScores[person]}`);
}

// ==============================================
// using Object method to iterate - turn an object into an array
// ==============================================

let total = 0;
let scores = Object.values(testScores);
for(let score of scores){
    total += score;
}
console.log(total / scores.length);