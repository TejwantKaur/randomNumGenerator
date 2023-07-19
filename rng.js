let max = prompt("Enter Max Num Range from 1 to : ");

const num = Math.floor (Math.random() * max) + 1;

let guess = prompt("Guess the Number: ")

while(true){
    if(guess === 'quit'){
        console.log(`You Quit!! the number is ${num}`);
        document.write(`You Quit!! the number is ${num} :(`);
        break;  
    }
    else if(guess == num){
        console.log(`Congrats!! the number is ${num}`);
        document.write(`Congrats!! the number is ${num} :)`);
        break;
    }
    else{
        if(guess < num){
            console.log(`The number you entered is Wrong!! Please try again!!`);
            guess = prompt("Please try higher number!!");
        }else{
            console.log(`The number you entered is Wrong!! Please try again!!`);
            guess = prompt("Please try lower number!!");
        }      
    }
}
