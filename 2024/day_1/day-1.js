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
 * 
 * Part Two
 * 
 * Figure out exactly how often each number from the left list appears in the right list. Calculate a total "similarity score" by adding up each number in the left list after multiplying it by the number of times that number appears in the right list.
 * 
 * Explicit Requirements:
 * - Input: Two lists (arrays) of numbers.
 * - Output: A number representing the total "similarity score".
 * - A "similarity score" is calculated by multiplying a number from the left list by the number of times it appears in the right list.
 * - Add up all "similarity scores" to receive a total for output.
 * 
 * Implicit Requirements:
 * - If a number from the left list appears 0 times in the right list, then it's multiplied by 0.
 * - Don't worry about sorting.
 * 
 * Examples and Test Cases:
 * list1 = [3, 4, 2, 1, 3, 3]
 * list2 = [4, 3, 5, 3, 9, 3]
 * 
 * First number 3 appears 3 times in list2 -> similarity score = 3 * 3 = 9
 * Second number 4 appears 1 time in list2 -> similarity score = 4 * 1 = 4
 * etc..
 * 
 * Algorithm
 * - Iterate over the list1 and store the current number into a variable
 * - Create a variable and store the number of times the current number occurs in list2
 *  - Iterate over list2 and increment a count by 1 for each occurance.
 *  - Repeat until all numbers have been iterated over.
 *  - Return the count.
 * - Multiply the current number by the number of occurances and store into a similarity score variable
 * - Repeat until all numbers are iterated over
 * - Output the similarity score
 * 
 */

const fs = require('fs');
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

const calculateSimilarityScore = (list1, list2) => {
  let similarityScore = 0;

  list1.forEach((num) => {
    similarityScore += num * numOfOccurences(num, list2);
  });

  return similarityScore;
}

const numOfOccurences = (num, list) => {
  let count = 0;
  list.forEach((num2) => {
    if (num === num2) count++;
  })
  return count;
}

// console.log(findTheDistanceBetweenLists(list1, list2));
console.log(calculateSimilarityScore(list1, list2));