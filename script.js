let randnum = Math.floor((Math.random() * 100) + 1);



let check=()=>{
    let num = document.querySelector("#inputnum").value;
    console.log(randnum);
    console.log(num);
    if(randnum == num)
    {
        alert("Success");
    }
    else if(num>randnum){
        alert("Sorry. Try a Smaller number");
    }
    else{
        alert("Sorry. Try a bigger number");
    }
}