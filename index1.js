var mDiv = document.getElementById('check');

var check = document.createElement('i')
check.className='fas fa-check';

var abouctCheck=document.createElement('div')
abouctCheck.className="about-check";
var heading = document.createElement('h1')
heading.innerHTML='Order Placed Successfully ';
var para = document.createElement('p')
para.innerHTML="We've sent you an email with the order details :)";

mDiv.appendChild(check)
mDiv.appendChild(abouctCheck)
abouctCheck.appendChild(heading)
abouctCheck.appendChild(para)
console.log(mDiv)