// // Question No 1
// const clickOnLink = document.createElement('a');
// clickOnLink.setAttribute("href","#");
// clickOnLink.setAttribute("onclick","myHandler()");
// clickOnLink.innerText = 'Click me';
// document.body.appendChild(clickOnLink)
// console.log(clickOnLink);
// function myHandler(){
//     alert('Welcome to our land')
// }

// // Question No 2
// const mobilePhones = document.querySelector('.mobilePhones');
// const imgTag = document.getElementsByTagName('img');
// const mobilesPic = [
//     {
//         imgsSrc: "./Assets/1.jpg",
//         descrip: "iPhone6Plus.gif"
//     },
//     {
//         imgsSrc: "./Assets/2.jpg",
//         descrip: "Galaxys6Plus.gif"
//     },
//     {
//         imgsSrc: "./Assets/3.jpg",
//         descrip: "V10.gif"
//     },
//     {
//         imgsSrc: "./Assets/4.jpg",
//         descrip: "HuaweiE5.gif"
//     },
// ]
// mobilesPic.forEach( (pictures) => {
//     mobilePhones.innerHTML += `<div><img onclick="myhandler()" src="${pictures.imgsSrc}" alt="">
//     <p>${pictures.descrip}</p></div>`
// })
// function myhandler(){
//     alert("Thanks for purchasing a phone from us")
// }

// // Qusetion No 3
// const studentsMarks= [ 
//     {
//         serial: 0,
//         name: "Sami",
//         class: "10th",
//         dlt: "Delete",
//         id: "one"
//     },
//     {
//         serial: 1,
//         name: "Fahad",
//         class: "10th",
//         dlt: "Delete",
//         id: "one"
//     },
//     {
//         serial: 2,
//         name: "Ayaz",
//         class: "9th",
//         dlt: "Delete",
//         id: "one"
//     },
//     {
//         serial: 3,
//         name: "Umair",
//         class: "9th",
//         dlt: "Delete",
//         id: "one"
//     },
//     {
//         serial: 4,
//         name: "Saqib",
//         class: "10th",
//         dlt: "Delete",
//         id: "one"
//     },
//     {
//         serial: 5,
//         name: "Haroon",
//         class: "10th",
//         dlt: "Delete",
//         id: "one"
//     },

// ];
// const table = document.querySelector('table');
// console.log(table.firstElementChild);
// const check =studentsMarks.map(function(student){
//     table.innerHTML += `<tr>
//     <td>${student.serial}</td>
//     <td>${student.name}</td>
//     <td>${student.class}</td>
//     <td id='${student.id}' onclick="deleteHandler('${student.serial}')">${student.dlt}</td>
// </tr>`
// return student.serial
// })
// console.log(check);
// const idSelect = document.querySelectorAll("#one");
// console.log(idSelect);
// console.log(check[0]);
// function deleteHandler(check){

//     if(check){ 
//         table.childNodes[2].remove()
// }
// }
// // Question No 4
// const picture = document.getElementById('picture');
// function myImg(){
//     picture.setAttribute('src','./Assets/img2.jpg');
//     picture.setAttribute('onmouseout','myHandle()');
// }
// function myHandle(){
//     picture.src = "./Assets/img1.jpg";
// }

// // Question No 5
// const h1 = document.querySelector('h1');
// let index = 0;
// function increaseBtn(){
//     h1.innerHTML = index++
// }
// function decreaseBtn(){
//     h1.innerHTML = index--
// }