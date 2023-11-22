// q no1
// var currentDate = new Date();

// document.write(" <H1>The current date is <H1/> " + currentDate + ".<br>");

// qno2
// var currentDate = new Date();
// var monthnumber = currentDate.getMonth() ;

// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// var monthName = monthNames[monthnumber]

// document.write("The current month is " + monthName + ".<br>" );


// qno3

// var currentDate = new Date();

// var dayNumber = currentDate.getDay();

 
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var dayName = dayNames[dayNumber];

// var dayAbbr = dayName.slice(0, 3);

// alert("The day is " + dayAbbr+ "");

// qnoe4


// var currentDate = new Date();

// var dayNumber = currentDate.getDay();

 
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var dayName = dayNames[dayNumber];

// if (dayName < 6) {
//     alert("its funday ")

// } if(dayName <0){
// alert("its funday")
// }

// else {
//     alert("its working day")
// }


// qn06
// var currentDate = new Date().getDate();

// if (currentDate < 16) {
//     console.log("first fifteen days of the month")
// }else{
//     console.log("last 15 days of month");
// }
    
// qno7

// let now = new Date()

// if (now.getHours() < 12) {
//     alert("its pm")
    
// }else{
//     alert("its am")
// }

// q no 8

// var laterDate = new Date(2020, 11, 0);
// console.log(laterDate)

// q no 9
// var ramadanStart = new Date(2015, 5, 18);
// var today = new Date();
// var daysPast = Math.floor((today - ramadanStart) / (1000 * 60 * 60 * 24));
// alert("The number of days past since 1st Ramadan is: " + daysPast);

// q no 10
// var referenceDate = new Date(1970, 0, 1);
// var beginningOf2015 = new Date(2015, 0, 1);
// var secondsElapsed = (beginningOf2015 - referenceDate) / 1000;
// document.write("Seconds elapsed between the reference date and the beginning of 2015: " + secondsElapsed);
// q no 11 
// var now = new Date();
// var hours = now.getHours();
// now.setHours(hours + 1);
// document.write(now);
// q no 12

// var date = new Date();
// date.setFullYear(date.getFullYear() - 100);
// alert(date);

// q no 13
// function roundOff(value) {
//   return Math.round(value * 100) / 100;

// var customerName = "raheem bngali";
// var currentMonth = "May";
// var numberOfUnits = 200;
// var chargesPerUnit = 10;
// var netAmountPayable = numberOfUnits * chargesPerUnit;
// var latePaymentSurcharge = roundOff(netAmountPayable * 0.1);
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;


// console.log("Customer Name: " + customerName);
// console.log("Current Month: " + currentMonth);
// console.log("Number of Units: " + numberOfUnits);
// console.log("Charges per Unit: " + chargesPerUnit);
// console.log("Net Amount Payable (within Due Date): " + roundOff(netAmountPayable));
// console.log("Late Payment Surcharge: " + roundOff(latePaymentSurcharge));
// console.log("Gross Amount Payable (after Due Date): " + roundOff(grossAmountPayable))











