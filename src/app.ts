import { config } from 'dotenv'

config()
let a = 5
let b = 9
console.log(`Result is ${a + b}`);
console.log('dotenv printing...')
console.log(process.env.LANGUAGE);
console.log(process.env.DEV);
// console.log(process.env.DATABASE_URL);
