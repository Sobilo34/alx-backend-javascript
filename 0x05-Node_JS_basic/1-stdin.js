#!/usr/bin/node

// Create a program named 1-stdin.js that will be executed through command line:

// It should display the message Welcome to Holberton School, what is your name?
// The user should be able to input their name on a new line
// The program should display Your name is: INPUT

console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
    if (data != null) {
        process.stdout.write(`Your name is: ${data}`);
    }
});
// When the user ends the program, it should display This important software is now closing
process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
});
