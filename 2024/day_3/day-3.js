/**
 * 2024 Day 3: Mull It Over
 * https://adventofcode.com/2024/day/3
 * 
 * PEDAC
 * Understanding the Problem
 * Create a program that "multiply some numbers" and ignore some invalid characters. The program should take in a string of numbers and characters and return the product of the numbers.
 * 
 * Explicit requirements:
 * - Input: a string
 * - Output: a number
 * - The string contains valid and invalid characters
 * - Valid characters: mul(#, #)
 * - Invalid characters are everything else
 * - mul(#, #) returns the result of multiplying the two numbers
 * - Output number is a result of adding up all the valid multiples
 * 
 * Implicit requirements:
 * - There will alwyas be at least one valid character set
 * - The valid character set will always contain whole numbers
 * 
 * Examples and Test Cases:
 * xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))
 * mul(2, 4) + mul(5, 5) + mul(11, 8) + mul(8, 5)
 * (2 * 4) + (5 * 5) + (11 * 8) + (8 * 5)
 * 8 + 25 + 88 + 40 = 161
 * 
 * Data Structures
 * - Regex
 * - Arrays
 * - Arithmetic operations
 * 
 * match(validMuls) will output mul[#, #]
 * Using match[1] and match[2] will output the numbers #, #
 * invoking mul(match[1], match[2]) will return the resulting multiplication. 
 * 
 * Algorith
 * - Locate valid character set and store somewhere
 *  - Iterate over string and find mul(#, #)
 *  - Perform mul function and return the result of multiplying those numbers
 *  - Repeat till there are no more valid mul(#, #)
 * - Perform mul() and output results
 * - Output reuslt of adding together all results
 * 
 */ 

import { rawData, testData } from './data.js';

const mul = (num1, num2) => {
  return num1 * num2;
}

const validMuls = /mul\((\d+),\s*(\d+)\)/g;

const scanForValidMuls = (data) => {
  const arrValidMuls = data.matchAll(validMuls);
  const result = [...arrValidMuls].map(match => {
    const [fullMatch, num1, num2] = match;
    return mul(Number(num1), Number(num2));
  });
  return result.reduce((acc, curr) => acc + curr, 0);
}

console.log(scanForValidMuls(rawData));