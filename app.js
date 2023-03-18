console.log("Hello World!\n==========\n");


console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
    if(count < 0){
        for(let i = -1; i >= count; i--){
            if(i % 2 != 0){
                console.log(i);
            }
        }
    }else{
        for(let i = 1; i <= count; i++){
            if(i % 2 != 0){
                console.log(i);
            }
       }
    
    }
}

printOdds(10);
printOdds(100);
printOdds(-5);





console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    let aboveSixteen = `Congrats ${userName}, you can drive!`
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`
    let noInput = "Hey there! I am not sure if you're old enough to drive or not."

    if(age < 16){
        console.log(belowSixteen);
    }
    if(age > 16){
        console.log(aboveSixteen);
    }else{
        console.log(noInput)
    }
    
}

checkAge("Celeste", 29);
checkAge("Jordan", 14);
checkAge();


 console.log("EXERCISE 3:\n==========\n");

 function coordinates(x , y){
    if(x > 0 && y == 0 || x <= -1 & y == 0){
        console.log(`${x},${y} is on the x axis`)
    }
    else if(x == 0 && y > 0 || x == 0 & y <= -1){
        console.log(`${x},${y} is on the y axis`)
    }
    else if(x > 0 && y > 0){
        console.log(`${x},${y} is in Quadrant 1`)
    }
    else if(x <= -1 && y > 0){
        console.log(`${x},${y} is in Quadtant 2`)
    }
    else if( x < 0 && y < 0){
        console.log(`${x},${y} is in Quadtant 3`)
    }
    else if (x > 0 && y <= -1){
        console.log(`${x},${y} is in Quadtant 4`)
    }
    else if ( x == 0 && y == 0){
        console.log(`${x}, ${y} Origin`)
    }
 }

 coordinates(2, 0);
 coordinates(0, -3);
 coordinates(4,4);
 coordinates(-5,5);
 coordinates(-6,-6);
 coordinates(7,-4);
 coordinates(0,0);



console.log("EXERCISE 4:\n==========\n");

function isValidTriangle(a, b, c){
    return a + b > c && a + c > b && b + c > a;
}


function checkTriangles(a, b, c ){
    let isValid = isValidTriangle(a, b, c);
    if(isValid){
        if(a == b && b == c){
            return "Equilateral";
        }else if(a == b || b == c || a == c){
            return "Isosceles";
        }else{
            return "Scalene"
        }
    }else{
        return "Is not valid";
    }

}

console.log(checkTriangles(2,3,4));
console.log(checkTriangles(2,2,2));
console.log(checkTriangles(1,2,2));
console.log(checkTriangles(1,1,4));


console.log("EXERCISE 5:\n==========\n");

function cellData(planLimit, day, usage){
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;


    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining`);
    console.log(`Average projected use: ${projectedAvg} GB/day`);

    if(currentAvg > projectedAvg){
        statusMsg = "EXCEEDING";
    }else if(currentAvg < projectedAvg){
        statusMsg = "UNDER";
    }else{
        statusMsg = "AT";
    }

    console.log(`You are ${statusMsg} your average daily use (${currentAvg} GB/day), continuing this 
    usage, you'll end up using ${planLimit - (usage + projectedUsage)} GB from your data limit.`);
}

cellData(50, 15, 25);
