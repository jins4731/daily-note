function greetUser(userName='user') {
    console.log("Hi " + userName + " there!");
}

greetUser();

function sumUp(...numbers){
    let result = 0;
    for(const number of numbers){
        result += number;
    }

    return result;
}

const inputNumbers = [1, 5, 10, 11, 20, 31];
console.log(sumUp(inputNumbers));