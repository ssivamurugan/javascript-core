const markRange = function(grade) {

    switch (grade) {
        case 'A':
            case 'a':
            console.log('91 to 100');
            break;

        case 'B':
            case 'b':
            console.log('71 to 90');
            break;

        case 'C':
            case 'c':
            console.log('51 to 70');
            break;
    
        default:
            console.log('less than 50');
            
            break;
    }
}

let grade = 'B';

markRange(grade);