// // // q no 1
// // // function dathandler() {
// // //     let today = new Date()
// // //     document.write(today)    
// // // }

// // q no 2

// // function greetUser(firstName, lastName) {
// //     var fullName = firstName + " " + lastName;
// //     var greetingMessage = "Hello, " + fullName + "! Welcome!"
// //     alert(greetingMessage);
// // }
// // greetUser("sami", "memon");

// // q no 3

// // function addtwonum(){
// //     let number1 = parseFloat(prompt("add the first number"))
// //     let number2 = parseFloat(prompt("add the secound number"))

// //     let ad = number1+number2

// //     return ad;
// // }
// // let result = addtwonum();
// // document.write("The sum of the two numbers is: " + result);

// q no 4

// function calculate(num1, num2, operator) {
//     var result;
  
//     switch (operator) {
//       case '+':
//         result = num1 + num2;
//         break;
//       case '-':
//         result = num1 - num2;
//         break;
//       case '*':
//         result = num1 * num2;
//         break;
//       case '/':
//         result = num1 / num2;
//         break;
//       default:
//         return "Invalid operator";
//     }
  
//     document.write("The result of the operation is: " + result);
//   }
  
//   calculate(2,1,'-');



// q no 5


// function square(num) {
//     return num * num;
//   }

// var number = 5;
// var squaredNumber = square(number);
// console.log("The square of " + number + " is: " + squaredNumber)

// q no 6

// function factorial(num) {
//     if (num === 0 || num === 1) {
//       return 1;
//     } else {
//       return num * factorial(num - 1);
//     }
//   }
//   var number = 5;
// var factorialNumber = factorial(number);
// console.log("The factorial of " + number + " is: " + factorialNumber);
// q no 7
// function countNumbers(start, end) {
//     if (isNaN(start) || isNaN(end)) {
//       console.log("Invalid input. Please enter valid numbers.");
//       return;
//     }
  
//     if (start <= end) {
//       for (let i = start; i <= end; i++) {
//         document.write(i + "");
//       }
//     } else {
//       console.log("Invalid range. Start number should be less than or equal to end number.");
//     }
//   }
  

//   countNumbers(1, 10);

// q no 8
// function calculateHypotenuse(base, height) {
//     function square(num) {
//       return num * num;
//     }
  
//     const baseSquared = square(base);
//     const heightSquared = square(height);
  
//     const hypotenuse = Math.sqrt(baseSquared + heightSquared);
    
//     return hypotenuse;
//   }
  
//   const base = 4;
//   const height = 3;
//   const hypotenuse = calculateHypotenuse(base, height);
//   console.log("Hypotenuse:", hypotenuse);
  
  
// q no 9

// function calculateRectangleArea(width, height) {
//     return width * height;
//   }
  
//   const area = calculateRectangleArea(5, 10);
//   console.log("Area:", area);
  
//   function calculateRectangleArea(width, height) {
//     return width * height;
//   }
  
//   const width = 8;
//   const height = 6;
//   const areas = calculateRectangleArea(width, height);
//   console.log("Area:", areas);
  
// q no 10

// function isPalindrome(str) {
//     str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
//     return str === str.split('').reverse().join('');
// }

// const word = "saqib";
// const result = isPalindrome(word);
// console.log(`Is "${word}" a palindrome? ${result}`)

// q no 11

// function capitalizeWords(str) {
//     const words = str.split(" ");

//     const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
//     const capitalizedString = capitalizedWords.join(" ");

//     return capitalizedString;

    
// }  
// const sentence = "the fox";
// const capitalizedSentence = capitalizeWords(sentence);
// console.log(`Original: ${sentence}`);
// console.log(`Capitalized: ${capitalizedSentence}`);

// qno 12

// function findLongestWord(str) {
//     const words = str.split(" ");
    
//     let longestWord = "";
//     let longestWordLength = 0;
    
//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > longestWordLength) {
//         longestWord = words[i];
//         longestWordLength = words[i].length;
//       }
//     }
    
//     return longestWord;
//   }
  
//   const sentences = "Web Development Tutorial";
//   const longestWord = findLongestWord(sentences);
//   console.log(`Longest word: ${longestWord}`);


// q no 13
// function countLetterOccurrences(string, letter) {
//     const lowercaseString = string.toLowerCase();
//     const lowercaseLetter = letter.toLowerCase();
    
//     let count = 0;
    
//     for (let i = 0; i < lowercaseString.length; i++) {
//       if (lowercaseString[i] === lowercaseLetter) {
//         count++;
//       }
//     }
    
//     return count;
//   }
  
//   const sentence = "Samazz";
//   const letter = "a";
//   const occurrences = countLetterOccurrences(sentence, letter);
//   console.log(`Number of occurrences of '${letter}': ${occurrences}`);


// q no 14

// function calcCircumference(radius) {
//   var circumference = 2 * Math.PI * radius;
//   console.log("The circumference is " + circumference);
// }

// function calcArea(radius) {
//   var area = Math.PI * Math.pow(radius, 2);
//   console.log("The area is " + area);
// }
// calcCircumference(1);
// calcArea(2); 

