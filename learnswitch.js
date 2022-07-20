const color = "Yellow";

switch(color){
    case 'red':
        console.log("Color red");
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    case "green":
        console.log("Color is green");
        break;
    default:
        console.log("Color is not red, blue or green");
}

const grade = 60

switch(true){
    case grade >= 70: 
        console.log('excellent');
        break;
    case grade <= 69 && grade >= 60:
        console.log('very good');
        break;
    case grade <= 59 && grade >= 50:
        console.log("good");
        break;
    case grade <= 49 && grade >= 50:
        console.log("Pass");
        break;
    default:
        console.log("They did noit write the exam");
    }
    

