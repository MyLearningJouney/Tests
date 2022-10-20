#!/usr/bin/env node

// fetch name from command argument, environment, or fallback
const nameArg = capitalize(process.argv[2] || process.env.USER ||
    process.env.USERNAME || 'world');

// output message
console.log(`Hello ${ nameArg }!`);


function capitalize(str) {
    return str
        .split(' ')
        .map(str => str.replace(str[0], str[0].toUpperCase()))
        .join(' ')
}