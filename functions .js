

//if statement


let temperature = 90;
if(temperature>80){
  console.log("it's hot outside");
}

else if(temperature<=80){
  console.log("it's not hot outside");
}

let age =24;
if(age>=18){
  console.log("elligible to vote");
}
else if(age<18){
  console.log("not applicable to vote");
}


//fuctions to calculate area of a rectangle
function areaOfRectangle(length,width){
  let area = length*width;
  return area;
}
let length = 5;
let width = 3;
console.log("Area of  rectangle is:" + areaOfRectangle(length,width));




//fuction to calculate area of a circle
function areaOfCircle(radius){
  let area=Math.PI*radius*radius;
  return area;
}
let radius=6;
console.log("the area of a circle is:" + areaOfCircle(radius) + "cm^2");


//function to calculate discounted price
function discount(originalPrice, discountPercentage){
   let discountAmount=originalPrice*discountPercentage;
   return discountAmount;

}

let originalPrice=100;
let discountPercentage=0.2;
console.log("the discounted price is:" + discount(originalPrice,discountPercentage));



//function login
function login(username,password){
  if(username==="benson" && password==="bensoh1234"){

    console.log("the user is logged in");

  }

  else{
    console.log("invalid username or password");

  }

}
login("benson","bensoh1234");






//function to withdraw money from an account and deosit moneny to the account
function withdrawMoney(amount,accountNo,BankName ){
 let deposit=2000;
 let accounNo=123456789;
 let withdraw=amount;
 let bankName="kcb";
 console.log("you have deposited:$" + deposit + "to your account number:" +accountNo + "at" + BankName);
 console.log("you have withdrawn:$" +withdraw + "from your account number:" + accountNo);

 
 }
withdrawMoney(500,123456789,"kcb");
