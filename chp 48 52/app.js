// Question No 1
/*
const formVali = document.querySelector('.formVali')
const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const signUp = document.querySelector('.signUp');
function myHandle() {
    if(fName.value === "" ||
       lName.value === "" ||
       password.value === "" ||
       cpassword.value === "" ){
        alert("Please enter valid name & password")
       }else if(password.value !== cpassword.value){
        alert("Password should be same")
       }else{
        formVali.style.display = 'none';
        signUp.innerHTML = `<div class="signUp" style="display: flex;">
        <p>Hey dear ${fName.value}, you signed up successfully</p>
    </div>
        `
       }
}

// Question No 2
const div =document.querySelector('.textArea');
const p = document.createElement('p');
p.innerText = `On the eve of the occasion, Absar Alam, former chief of the country’s electronic media regulator, made a damning statement before the Supreme Court alleging that a senior ISI officer, as well as his subordinates, attempted to control and coerce the media through Pemra during Mr Alam’s tenure.
There are many in the industry who will attest to the fact that 
the climate of repression that prevailed during retired Lt-Gen Faiz Hameed’s time at ISI’s helm was one of the worst experienced by Pakistani media. The former spy chief gained notoriety for pressuring Pakistani media in ways never 
seen or heard before, including with direct threats.`;
div.appendChild(p)
document.body.appendChild(div);
p.setAttribute("onclick","showless()");
const showMoreText = p.textContent.slice(0) + "...Showless"
console.log(showMoreText);
const readLess =p.textContent.slice(0, 26) +"...Readmore";

function showless(){
    p.textContent = readLess
    p.setAttribute("onclick","showMore()")
}
showless()
function showMore(){
    p.textContent = showMoreText
    p.setAttribute('onclick',"showless()")
}
*/
// Question No 3
// const studentsMarks = [" 10th","9th","9th","10th"," 10th","9th","9th","10th",]
// const table = document.querySelector('table');
// const inputForm =document.querySelector('.form-control');
// let index = 0;
// function myHandler(){
//     const inputVal = inputForm.value;
//     if(inputVal == ""){
//         alert('Please enter a valid name')
//     }else{ 
//     table.innerHTML += `<tbody>
//     <tr >
//         <td>${index++}</td>
//         <td id=${inputVal}>${inputVal}</td>
//         <td>${studentsMarks[index -1]}</td>
//         <td id="edit" onclick="myHandler2('${inputVal}')">Edit</td>
//         <td id="dlt" onclick="dltHandler('${inputVal}')">Delete</td>
//     </tr>
// </tbody>
//     `
// }
//     inputForm.value = ""
    
// }
// function myHandler2(inputVal){
//     const check = document.getElementById(inputVal);
//     const submtBtn = document.getElementById('submtBtn');
//     submtBtn.innerText = "Edit";
//     inputForm.value = check.textContent;
//     submtBtn.setAttribute("onclick",`editHandler('${inputVal}')`);
// }
// function editHandler(inputVal){
//     const check = document.getElementById(inputVal);
//     const submtBtn = document.getElementById('submtBtn');
//     check.textContent = inputForm.value;
//     submtBtn.textContent = "Search"
//     inputForm.value = ""
//     submtBtn.setAttribute("onclick",`myHandler()`)

// }
// function dltHandler(inputVal){
//     const dlt = document.getElementById(inputVal);
//     dlt.parentElement.remove()
// }
// const btn = document.querySelector('button');
// const submtBtn = document.querySelector('#submtBtn')
// console.log(btn);
// function myHandler3(inputVal){
//     const edit = document.getElementById("edit");
//     const name = document.getElementById(inputVal);
//     name.textContent = inputForm.value
//     submtBtn.textContent = "Search"
//  }