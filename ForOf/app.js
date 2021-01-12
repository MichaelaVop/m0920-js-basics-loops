// ==============================================
//Intro to ForOf
// ==============================================

const subreddits = ['books', 'chickens','funny','travel'];

// for (let i = 0; i < subreddits.length; i++){
//     console.log(`Visit reddit.com/r/${subreddits[i]}`);
// }

for(let subs of subreddits){
    console.log(`Visit reddit.com/r/${subs}`);
}


// ==============================================
//more example....
// ==============================================

const seatingChart = [
    ['Koji', 'Inae','Yuri'],
    ['Marina','Ayumi','Ami'],
    ['Danilo','Miriam','Moses']
];

for  (let i= 0; i < seatingChart.length; i++){
    const row = seatingChart[i];
    console.log(`ROW #${i+1}`);
    for (let j = 0; j < row.length;j++) {
        console.log(`  ${row[j]}`);
    }
}

for (let row of seatingChart){
    for (let student of row){
        console.log(student);
    }
}

// ==============================================
//not just an array....
// ==============================================

for (let char of "hello world"){
    console.log(char);
}