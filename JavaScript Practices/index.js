// let randomNum = Math.random()         
// let numBtnZeroAndTen = (randomNum * 12)

// console.log(numBtnZeroAndTen)       

// let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
// console.log(randomNumRoundToFloor)  
// //  Question2
// let nameOfStudent=" ";
// let number=parseInt(prompt("Enter number"));
// switch(number){
//     case 1:
//         nameOfStudent="Monday";
//         break;
//     case 2:
//         nameOfStudent ="Tuesday";
//         break;
//     case 3:
//         nameOfStudent="Wednessday";
//         break;

//     case 4:
//         nameOfStudent="Thursday";
//         break;
//     case 5:
//         nameOfStudent="Friday";
//         break;
//     case 6:
//         nameOfStudent="Saturday";
//         break;
//     case 7:
//         nameOfStudent="Sunday";
//         break;S
//     default:
//         nameOfStudent="Others";
// }
// document.write(nameOfStudent,"<br>");
// let count=0;
// let counter=1;
// while(counter<5000){
//     counter*=2;
//    count++;
// }

// console.log(count);
// console.log(counter,"<br>");
// let number1=10;
//     for(let count=0;count<number1;count++){
//         if(number%count==0){
//             return false;
//         }
//          return true;
//         }
//    for(let counter=0;counter<10;counter++){
//     document.write(counter);
//    }
let years=[1855,1648,1420];

let countries=["Canada","France","Nigeria","Thailand","United States"];

let mess=[53,"Canada",true,1420];


document.write(" The Countries are: "+countries)
document.write("<br>")
document.write("The years are: "+years)
document.write("<br>")
document.write("These are your mess: "+mess)

console.log(countries);
console.log(mess);
console.log(years);

let len=countries.length;
console.log(len);
console.log(countries[len-1]);


let country=["Canada","France","Thailand","United States"];

country.push('Zambia');
console.log(country)
country.pop();
console.log(country)
country.unshift("Angola");
console.log(country)
country.shift();

console.log(country);


let countryCopy=countries.slice();
console.log(countryCopy);

// concat methods in an array
var hege = ["United State", "Portugal"];
  var stale = ["England", "Brazil", "Argentina"];
  var kai = ["Robin"];
  var children = hege.concat(stale,kai); //
  console.log(children)

  var countryCount = ["Nigeria", "Ghana", "Canada", "Mauritania"];
  let king = countryCount.join(" ");
  console.log(king)
  let k=countryCount.reverse();
  console.log(k)
  let ky=countryCount.sort();
  console.log(ky);

    
 let product={
     name:"Apple",
     category:'Fruits',
     price:1.99,
     nutrients:{
         carbs:0.95,
         fats:0.3,
         protein:0.2
     }
 } 
 console.log(product.name,product.nutrients.carbs); 


 let foodValue={
     Apple:{ 
     fat:1.2,
     energy:3.4,
     price :20,
     calories:5.7,
     vitamins:14,
     

     Orange:{
        fat:0.2,
        energy:0.4,
        price :40,
        calories:0.7,
        vitamins:100,   
     

     Burger:{
        fat:10.2,
        energy:30.4,
        price :50,
        calories:20.7,
        vitamins:44,
     
    Coffee:{
        fat:15.2,
        energy:31.4,
        price :20,
        calories:5.7,
        vitamins:24,
    }
     
 }
  }
 }
}
console.log(foodValue.Burger);


var sub=function subtota(price,quantity){
    return price*quantity;

};
var result=sub(10,22);
console.log(result)
// function calculateTax(subtotal){
//         var taxRate=0.05;
//         var tax=subtotal*taxRate;
//         return tax;
//     }
// function calculateTotal(price,quantity){
//     var subtotal=price*quantity;
//     return  subtotal +calculateTax(subtotal);
    
// }
// var kk=calculateTax(subtotal)


function calculateTotal(price,quantity){
    var subtotal=price*quantity;
    return  subtotal +calculateTax(subtotal);
    function calculateTax(subtotal){
        var taxRate=0.05;
        var tax=subtotal*taxRate;
        return tax;
    }
}
console.log(calculateTotal(12,34));


//callback function
//These are functions that we put in a function ,when you call it ,it must not have is parenteces
// Read on promise and observables


// No 1
function isTrue(number1,number2){ 

if(number1==50||number2==50||number1+number2==50){
    return true;
}
else 
return false;

}
// No 2
function checkNumbers(parameter1,parameter2){
    if((parameter1<0||parameter2>0)||(parameter1>0||parameter2<0 )){
        return true;
    }
    else return false;
}

//No 3
function AreaOfAScaleneTriangle(parameter1,parameter2,parameter3){
    let s=(parameter1+parameter2+parameter3)/2
    let a=(s-parameter1)*(s-parameter2)*(s-parameter3);
    let x=s*a
 let AreaOfAScaleneTriangle=Math.sqrt(x);
return AreaOfAScaleneTriangle;
}
// No 4

function toArray(parameter1,parameter2,parameter3,parameter4,parameter5){
    let stuffs=[parameter1,parameter2,parameter3,parameter4,parameter5];
    return stuffs;
}
//No 5
function addWithSubCharge(amount1,amount2){
    var addAmount;
    if(amount1<=10&&amount2<=10){
     var  subCharge=1;
   addAmount=amount1+amount2+subCharge;
    }
    else if(amount1>10&&amount2>10){
   var  subCharge=2;
    addAmount=amount1+amount2+subCharge;
    }
return addAmount;
}
let alpha=["a","b","c"];
function rotate(array){
    let first=array.shift();
    array.push(first)
    return array;
}
function twoSum(number1,number2){
    
}
console.log(isTrue(45,34));
console.log(checkNumbers(1,-1));
console.log(AreaOfAScaleneTriangle(5,6,7));
console.log(toArray("kingsley","Man","Woman","Peace","Friend"))
console.log(addWithSubCharge(11,5));
console.log(rotate(alpha));