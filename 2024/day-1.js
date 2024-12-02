/**
 * 2024 Day 1: Historian Hystaria
 * https://adventofcode.com/2024/day/1
 * 
 * PEDAC
 * Understanding the Problem
 * Pair up the smallest number in the left list with the smallest number in the right list, then the second-smallest left number with the second-smallest right number, and so on.
 * 
 * Within each pair, figure out how far apart the two numbers are; you'll need to add up all of those distances. For example, if you pair up a 3 from the left list with a 7 from the right list, the distance apart is 4; if you pair up a 9 with a 3, the distance apart is 6.
 * 
 *
 * Explicit Requirements:
 * - Input: 2 lists (arrays) of numbers.
 * - Output: A number representing total "distance" between numbers in each list.
 * - The "distance" is the difference between two numbers on both lists.
 * - The "distance" will not be a negative number.
 * 
 * Implicit requirements:
 * - Each list will contain the same amount of numbers.
 * 
 * Examples and Test Cases:
 * - Smallest left list num: 1
 * - Smallest right list num: 3
 * - Distance between = 2
 * 
 * - Second-smallest left list num: 2
 * - Second-smallest right list num: 3
 * - Distance between = 1
 * 
 * 
 * Data Structure
 * - Numbers
 * - Arrays to iterate over
 * 
 * Algorithm
 * - Sort each list from smallest to largest.
 * - Iterate over each list and output the current number for subtraction.
 * - Output the difference without a sign (no negative).
 * - Store the result in a variable.
 * - Repeat until there are no numbers, appending each result to the result variable.
 * - Output the total distance.
 *  
 */

fs = require('fs');
const data = JSON.parse(fs.readFileSync('day-1.json'));
const list1 = data.list1;
const list2 = data.list2;

const sortNumsAscending = (list) => list.sort((a, b) => a - b); 

const findTheDistanceBetweenLists = (list1, list2) => {
  const sortedList1 = sortNumsAscending(list1);
  const sortedList2 = sortNumsAscending(list2);
  let result = 0;

  sortedList1.forEach((value, idx) => {
    result += Math.abs(value - sortedList2[idx]);
  });

  return result;
}

console.log(findTheDistanceBetweenLists(list1, list2));