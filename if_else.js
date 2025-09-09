const gradeSystem = function(grade) {

    if(grade > 100) {console.log('Invalid mark'); return;};
    

    if(grade <=100 && grade > 90) {
        console.log('First Grade');
    }else if(grade <=90 && grade > 70) {
        console.log('Second Grade');
    }else if(grade <= 70 && grade > 50) {
        console.log('Third Grade');
    }else {
        console.log('Fail');
    }
}

let grade = 700;

gradeSystem(grade)