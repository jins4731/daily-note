// let greetingText = "Hi, i\'M MAX!!!";       
// let age = 32;
// alert(greetingText);
// greetingText = 'Hi, i am really MAX!';
// alert(greetingText);
// alert(age);

let age = 32;
let userName = "Max";
let hobbies = ['Sports', 'cooking', 'Reading'];
let job = {
    title: 'Developer', 
    place: 'New York',
    salary: 50000
};

function calculateAdultYears(userAge){
    return userAge-18;
}

let totalAdultYears = calculateAdultYears(age);
alert(totalAdultYears);

alert(hobbies[0]);
alert(job.title);

let person = {
    name: 'Max',
    greet() {
        alert('Hello');
    }
}

person.greet();