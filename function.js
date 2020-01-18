

// function checkPositiveOrNegative(num) {
//     if(num >= 1){
//         return 'positive';

//     }
//     else {
//         return 'negative';
//     }
// }

// return res = checkPositiveOrNegative(15);


// function abs(num){
//     if (num>=0) {
//         return num;
//     }
//     else {
//         return temp = num*-1;
//         return temp;
//     }
// } 
// // return  num = num*-1;
// // return num *= -1;
// // return num * -1;

// console.log(abs(-5));
// console.log(abs(30000));

// return number=-5.5
// number1 = Math.abs(number);
// console.log(number1);


// function shtrodel(email){
//     if(email.indexOf('@') > 1 && email.indexOf('.') > 1 && email.indexOf('.')>email.indexOf('@')) {
//     console.log('very good');
//     } else {
//         console.log('wrong');
//     }
// }
//     shtrodel('chashe21@gmail.com');


// function FnLn(firstName, lastName) { 
//     console.log(firstName + ' ' + lastName);
// }

// FnLn('chanoch', 'shechter');



// function biggest(num1,num2,num3) {
//     if(num1 % 10 > num2 % 10 && num1 % 10 > num3 % 10) {
//         console.log(num1 % 10)
//     }
//     else if(num2 % 10 > num1 % 10 && num2 % 10 > num3 % 10) {
//         console.log(num2 % 10)
//     } else console.log(num3 % 10)
// }

// biggest(33,448,5555);


// let str1three, str2three, str3three, str4three;
//     function moreThan3(str1,str2,str3,str4) {
//         if(str1/100>1) {
//              str1three=1;
//         } else {
//              str1three=0;
//         }
//         if(str2/100>1) {
//              str2three=1;
//         } else {
//              str2three=0;
//         }
//         if(str3/100>1){
//              str3three=1;
//         } else {
//              str3three=0;
//         } 
//         if(str4/100>1){
//              str4three=1;
//         } else {
//              str4three=0;
//         } 
//         }

//         moreThan3(3522,54,566,7);
    
//     console.log(str1three+str2three+str3three+str4three);
    


// function checkUserName() {
//     return inputValue = document.getElementById('userName').value;
//     if(inputValue.length >= 4){
//         alert('welcome to my website');
//         document.getElementById('error').innerHtml='';
//     }
//     else {
//         document.getElementById('error').innerHTML='error';
//     }
// }


// function inputA() {
//     let inputValue = document.getElementById('inputV').value;
//     if(inputValue.indexOf('A') >= 0) {
//         let valueA = inputValue.replace('A', 'a') ;
//         document.getElementById('newValue').innerHTML=valueA;
//       } else {
//         document.getElementById('newValue').innerHTML=inputValue;
//       }
//     }


// function poNeOdEv(num1) {
//     if(num1%2==0 && num1>0) {
//     return 'even positive';
// } else if(num1%2==0 && num1<0) {
//     return 'even negative';
// } else if(num1%2!=0 && num1<0) {
//     return 'odd negative';
// } else {
//     return 'odd positive';
// }
// }
// num = poNeOdEv(-7);
// console.log(num);


// function firLasSame(str1) {
//     if(str1.charAt(0) == str1.charAt(str1.length-1)) {
//         return str1.substr(1,str1.length-2);
//     } else {
//         return str1;
//     }
// }
// string = firLasSame('dad');
// console.log(string);


// function simbol(str1) {
//     if(str1.indexOf('*')>=0) {
//     return str1.replace('*', '');
//     } else if (str1.indexOf('@')>=0){
//     return '*'+str1+'*';
//     } else if (str1.indexOf('₪')>=0 && str1.indexOf('₪')==str1.length-1) { 
//     return 'new shekel';
//     } else {
//     return str1;
//     }
// }

// string=simbol('chashedfg₪');
// console.log(string);


// function inputA() {
//     let inputValue = document.getElementById('inputV').value;
//     if(inputValue.indexOf('A') >= 0) {
//         let valueA = inputValue.replace('A', 'a') ;
//         document.getElementById('newValue').innerHTML=valueA;
//       } else {
//         document.getElementById('newValue').innerHTML=inputValue;
//       }
//     }

function convert() {
    let num1=document.getElementById('shInput').value;
    let coin1=document.getElementById('coinListSelect').value;
    if(num1<=0) {
        alert('error')
    } else if(coin1=='euro') {
        num1*=3.855;
        document.getElementById('coOutput').innerHTML = num1.toFixed(2);
        alert(num1.toFixed(2));
    } else if(coin1 == 'dollar') {
        num1 *= 3.459;
        document.getElementById('coOutput').innerHTML = num1.toFixed(2);
        alert(num1.toFixed(2));
    } else if(coin1 == 'pound') {
        num1 *= 4.498;
        document.getElementById('coOutput').innerHTML = num1.toFixed(2);
        alert(num1.toFixed(2));
    } else if (coin1 == 'swissfrank') {
        num1 *= 3.583;
        document.getElementById('coOutput').innerHTML = num1.toFixed(2);
        alert(num1.toFixed(2));
    } else if (coin1 == 'yen') {
        num1 *= 314.86;
        document.getElementById('coOutput').innerHTML = num1.toFixed(2);
        alert(num1.toFixed(2));
    } else alert('bye')
}