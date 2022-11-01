    //   խնդիր 1. (Տպել alert պատուհանի մեջ 1-10 թվերը ներառյալ:)
let i = 1;  
while(i <= 10) {
    alert(i);
    i = i + 1;
}

    //  խնդիր 2. (Տպել alert պատուհանի մեջ 1-10 թվերը ներառյալ, հակառակ հերթականությամբ:)
let j = 10;
while(j >= 1){
    alert(j);
    j = j - 1;
} 

    //   խնդիր 3. (Տպել alert պատուհանի մեջ 1-10 թվերը: Մեկու մեջ բաց թողնելով թվերը:)
let k = 1;
while(k<=10) {
    alert(k)
    k = k + 2;
}

    //   խնդիր 4. (Տպել alert պատուհանի մեջ 10-1 թվերը: Մեկու մեջ բաց թողնելով թվերը:)
let a = 10;
while(a>=1){
    alert(a);
    a = a - 2;
}

    //  խնդիր 5. (Տպել alert պատուհանի մեջ 0-100 թվերի գումարը ներառյալ:)
let z = 0;
let z1 = 0;
while(z <= 100){
    z1 = z1 + z;
     z = z + 1;
}
alert(z1);

    // խնդիր 6. (Տպել alert պատուհանի մեջ 10-15 թվերի արտադրյալը ներառյալ:)
let v = 10;
let v1 = 10
while(v <= 15){
    v1 = v1 * v;
     v = v + 1;
}
alert(v1);

    // խնդիր 7. (Տպել console.log && alert պատուհանի մեջ 1-10 թվերը ներառյալ, զույգ և կենտ թվերը:)
for(let E = 1; E <= 10; E++){
    if(E%2==0){
        alert(`${E}-ԶՈՒՅԳ Է`);
        console.log(`${E}-Zuyg e`);
    }
    if(E%2!==0){
        alert(`${E}-ԿԵՆՏ Է`);
        console.log(`${E}-Kent e`);
    }
}

    // խնդիր 8. (Տպել console.log && prompt պատուհանի մեջ թիվը, զույգ է թե կենտ:)
function say(x){
    if(typeof x == "number" ){
        if(x%2==0){
            console.log(`${x}-zuyg e`);
            alert("the number is even")
        }
     
        if (x%2!==0){
            alert("the number is odd")
            console.log(`${x}-kent e`);
        }
    }
    else{
        alert("not a number")
    }
}

function call(){
let prom = +prompt("Enter number");
    if (isNaN(prom)){
        alert("not a number");

        say(+prompt("Enter number"));
    }
    else {
        say(prom);
    }
}

call()







