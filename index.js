// Reverse words
function reverseWords(sentences) {
  const splitWords = sentences.split(" ");
  const reverseWords = splitWords.reverse();
  const joinTheWords = reverseWords.join(" ");
  return joinTheWords;
}
//console.log(reverseWords("Hello JavaScript Developer"));
//Trim extra space
function trimExtraSpace(str) {
  const trimStr = str.trim();
  const replaceStr = trimStr.replace(/\s+/g, " ");
  return replaceStr;
}
//console.log(trimExtraSpace("This  is  lots  of  space. "));
//count consonant
function countConst(count) {
  let vowels = ["a", "e", "o", "e", "i", "u"];
  let countConsonant = 0;
  let lowerCase = count.toLowerCase();
  for (let char of lowerCase) {
    if (char >= "a" && char <= "z" && !vowels.includes(char)) {
      countConsonant++;
    }
  }
  return countConsonant;
}
//console.log(countConst("hello galaxy!"));
//find the first longest words
function longestWords(str) {
  const splitStr = str.trim().split(/\s+/);
  if (splitStr.length < 2) {
    return null;
  }
  const sortArray = splitStr.sort((a, b) => b.length - a.length);
  return sortArray[0];
}
//console.log(longestWords("I like to practice javascript."));
// removing Duplicate from array
function removeDuplicate(arr) {
  const removeArr = new Set(arr);
  const arrayOfDup = Array.from(removeArr);
  return arrayOfDup;
}
//console.log(removeDuplicate([1,2,2,3,3,4,5,5,6,6,6,7]));
// same using with filter method
function removeArrWithFilter(array) {
  const result = array.filter((item, index) => array.indexOf(item) === index);
  return result;
}
//console.log(removeArrWithFilter(["a","a","b","b","c","d"]));
//if two words are anagrams(same characters)
function wordsAnagrams(str1, str2) {
  const normalized = (str) => {
    return str.replace(/\s*/g, "").toLowerCase().split("").sort().join("");
  };
  const normalizeStr1 = normalized(str1);
  const normalizeStr2 = normalized(str2);
  return normalizeStr1 === normalizeStr2;
}
//console.log(wordsAnagrams("Listen", "Silent"));
//character frequency (counting each character in a string)
function countingChar(str) {
  const countingStr = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char !== " ") {
      char.toLowerCase();
      countingStr[char] = (countingStr[char] || 0) + 1;
    }
  }
  return countingStr;
}
//console.log(countingChar("hello world"));
// sorting arrays
function sortingArrays(str1, str2) {
  let merged = [];
  let i = 0;
  let j = 0;
  while (i < str1.length && j < str2.length) {
    if (str1[i] < str2[j]) {
      merged.push(str1[i]);
      i++;
    } else {
      merged.push(str2[j]);
      j++;
    }
  }
  while (i < str1.length) {
    merged.push(str1[i]);
    i++;
  }
  while (j < str2.length) {
    merged.push(str2[j]);
    j++;
  }
  return merged;
}
//console.log(sortingArrays([1, 2, 3, 4], [6, 5, 8, 7]));
//find the missing numbers
function findMissingNum(num){
const n = num.length;
const expectedSum = (n * (n + 1)/ 2);
const actualSum = num.reduce((acu, cur)=> acu + cur, 0);
return expectedSum - actualSum;
}
//console.log(findMissingNum([3, 0, 1]));
//find the kth largest element in an array : kth mean the position of an element in a sequences
function findKth(arr, k){
const sortArr = arr.sort((a, b)=> b - a);
return sortArr[k - 1]
}
//console.log(findKth([3,2,1,5,6,4], 1));
//FizzBuzz
function fizzBuzz(n){
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }else if(i % 3 === 0){
            console.log("Fizz")
        }else if(i % 5 === 0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }
}
console.log(fizzBuzz(15));


