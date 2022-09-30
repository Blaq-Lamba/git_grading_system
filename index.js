var number = 3;
var text = " Characters remaining"

const display = document.getElementById("display").innerHTML = number + text;

function Character(){
    var value = document.getElementById("character").value;
    var length = value.length;
    var remainig = number - length;

   const display = document.getElementById("display").innerHTML = remainig + text;

   if (remainig<=0){
    document.getElementById("display").style.color = "red";
   }else{
    document.getElementById("display").style.color = "#fff";
   }
}

function grade(){
    var value = document.getElementById("character").value;

    if (value >=101){
        alert("Invalid Number: Please input number between 1-100");
    } else if(value >=80){
        alert("Your Score is A+");
    }else if (value >=70){
        alert("Your score is A");
    }else if (value >=60){
        alert("Your Score is B+");
    }else if (value >=50){
        alert("Your Score is B");
    }else if (value >= 40){
        alert("Your score is C");
    }else if (value>=33){
        alert("Your Score is D you are safe but need to study hard!");
    }else if (value<33){
        alert("sorry ! you failed and got F");
    }

}
