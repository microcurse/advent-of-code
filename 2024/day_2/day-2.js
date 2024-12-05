/**
 * 2024 Day 2: Red-Nosed Reports
 * https://adventofcode.com/2024/day/1
 * 
 * PEDAC
 * Understanding the Problem
 * The unusual data consists of many "reports", one report per line. Each report is a list of numbers called levels that are separated by spaces. For example:
 * 
 * 7 6 4 2 1
 * 1 2 7 8 9
 * 9 7 6 2 1
 * 1 3 2 4 5
 * 8 6 4 4 1
 * 1 3 6 7 9
 * 
 * This example contains six reports each containing five levels.
 * 
 * The engineers are trying to figure out which reports are safe. The Red-Nosed reactor safety systems can only tolerate levels that are either gradually increasing or gradually decreasing. So, a report only counts as safe if both of the following are true:
 * 
 * - The levels are either all increasing or all decreasing.
 * - Any two adjacent levels differ by at least one and at most three.
 *
 * Explicit Requirements:
 * - Input: A list containing at least five, space separated, elements (levels)
 * - Output: A number representing the total number of safe reports.
 * - A report is safe if all levels are either increasing or decreasing.
 * - Any two adjacent levels must differ by at least one and at most three.
 * - A list consists of at least five elements (levels) that are separated by spaces
 * 
 * Implicit requirements:
 * - N/A
 * 
 * Examples and Test Cases:
 * - 7 6 4 2 1 is Safe because the levels are all decreasing by 1 or 2.
 * - 1 2 7 8 9 is Unsafe because 2 7 is an increase of 5.
 * - 9 7 6 2 1 is Unsafe because 6 2 is a decrease of 4.
 * - 1 3 2 4 5 is Unsafe because 1 3 is increasing but 3 2 is decreasing.
 * - 8 6 4 4 1 is Unsafe because 4 4 is neither increasing or decreasing.
 * - 1 3 6 7 9 is Safe because the levels are all increasing by 1, 2, or 3.
 * 
 * Data Structure
 * - list of numbers separated by spaces. Convert to array to iterate and perform operations.
 * 
 * Algorithm
 * - Parse data into an array
 * - Collect two elements from the array
 *  - 
 * - Subtract them
 * - Set conditions for "safe" and "unsafe" designations
 *  - Safe condition:
 *    - Difference is 1 <= diff <= 3 move onto the next pair
 *    - The difference is increasing or decreasing (first iteration)
 *  - Unsafe condition: 
 *    - Difference is > 3
 *    - If the difference flips from increasing or decreasing
 * - If array ever see's an unsafe condition exit loop
 * - Iteration completes with only "safe" designations, increment "safe count" variable by 1.
 * - Return safe count
 * 
 * 
 * PART 2 PEDAC
 * Understanding the Problem
 * The program can tolerate a single "bad level" in a report. Rewrite it so that if it removes a singular bad level (number/element) in the report, it would still consider the report safe.
 * 
 * Inputs: Array of numbers -> [1, 2, 7, 8, 9] "Unsafe because 2 and 7 is an increase of 5" 
 * What transformations need to happen?
 * - When coming across an unsafe report, remove a singular element.
 *  - The element that is removed should be the first of two elements that cause an unsafe difference.
 * - Recheck if that report is considered safe after removing either elements that had an unsafe difference.
 * - If not, the report should still be considered unsafe
 * - If yes, report should now be considered safe.
 * 
 * Step 1: [1, 2, 7, 8, 9] // 2 and 7 are unsafe
 * Step 2: [1, 7, 8, 9] // remove 2 and check isValidRange
 * Step 3: [1, 2, 8, 9] // Put 2 back and remove 7 and check isValidRange
 * Step 4: false // Still unsafe
 * 
 * Data Structures
 * - How can I transform current data into desired data?
 * - What array methods fit these transformations?
 * 
 * map()    // transform each element
 * filter() // select elements
 * every()  // check all elements
 * some()   // check any elements
 * 
 * input -> transform1 -> transform2 -> output
 * numbers -> remove element -> get difference -> check safety
 * [1,2,7,8,9] -> [1,7,8,9] -> [-6,-1,-1] -> false
 * 
 * number
 * -> generate all possible arrays with one removal
 * -> test each array for safety
 * -> check if any array is safe
 * 
 * map() // generate arrays with removals
 * some() // will check if any modified array is safe
 * filter() // get arrays that pass safety check
 * 
 * 
 */
import { rawData } from './data.js';

const parseData = (dataString) => {
  return dataString.trim().split('\n').map(line => line.split(' ').map(Number));
}

const data = parseData(rawData);

const isValidRange = (diff) => {
  return Math.abs(diff) >= 1 && Math.abs(diff) <= 3;
}

const getDifferences = (numbers) => {
  return numbers.slice(1).map((num, i) => num - numbers[i]);
}

const hasSameTrend = (diffs) => {
  const firstDiff = diffs[0];
  return diffs.every(diff => (diff > 0) === (firstDiff > 0));
}

const removeOneElement = (numbers) => {
  return numbers.map((_, idx) => {
    return numbers.filter((_, i) => i !== idx);
  });
}

const canBeMadeSafe = (numbers) => {
  return removeOneElement(numbers).some(isSafeSequence);
}

const isSafeSequence = (numbers) => {
  const diffs = getDifferences(numbers);
  return diffs.every(isValidRange) && hasSameTrend(diffs);
}

const countSafeReportsWithRemoval = (reports) => {
  return reports.filter(report => isSafeSequence(report) || canBeMadeSafe(report)).length;
};

console.log(countSafeReportsWithRemoval(data));