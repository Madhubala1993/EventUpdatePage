let loadnum=()=>{
    let n1=Math.floor(Math.random()*10);
    let n2=Math.floor(Math.random()*10);
    console.log(n1, n2);
    document.querySelector("#num1").value=n1;
    document.querySelector("#num2").value=n2;
}

let ans=()=>{
    let n1= Number(document.querySelector("#num1").value);
    let n2= Number(document.querySelector("#num2").value);
    
    let sum = n1+n2;
    let answer = document.querySelector("#output").value;
    console.log(answer);
    if(answer==sum){
        alert("Correct");
    }
    else
        alert("Check. Correct ans is " +sum); 
        loadnum();  
}