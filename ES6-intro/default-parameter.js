function add(num1,num2 = 5){
//    if(num2 == undefined){
//        num2 = 0;
//    }

    // num2 = num2 || 0;
    return num1 + num2;
}
console.log(add(12, 6));


function myName(first,last = 'Ananna'){
    return first + ' ' + last;
}
console.log(myName('Humayra'));