
function startGame(){
    document.getElementById("dis2").style.display="none";
    document.getElementById("dis1").style.display="block";
}

function cli(){
    var inp1=document.getElementById("D1");
    var inp2=document.getElementById("D2");

   var b1=document.getElementById("b1").innerHTML;
   var b2=document.getElementById("b2").innerHTML;
   var b3=document.getElementById("b3").innerHTML;
   var b4=document.getElementById("b4").innerHTML;
   var b5=document.getElementById("b5").innerHTML;
   var b6=document.getElementById("b6").innerHTML;
   var b7=document.getElementById("b7").innerHTML;
   var b8=document.getElementById("b8").innerHTML;
   var b9=document.getElementById("b9").innerHTML;

   var b1btn=document.getElementById("b1");
   var b2btn=document.getElementById("b2");
   var b3btn=document.getElementById("b3");
   var b4btn=document.getElementById("b4");
   var b5btn=document.getElementById("b5");
   var b6btn=document.getElementById("b6");
   var b7btn=document.getElementById("b7");
   var b8btn=document.getElementById("b8");
   var b9btn=document.getElementById("b9");
    if((b1 == 'X') && (b2 == 'X') && (b3 == 'X')){
        b1btn.style.color="red";
        b2btn.style.color="red";
        b3btn.style.color="red";
        document.getElementById("para").innerHTML="Player "+inp1.value+" WON <br> Beter luck next time player "+inp2.value;
    }
    else if((b1 == 'X') && (b4 == 'X') && (b7 == 'X')){
        b1btn.style.color="red";
        b4btn.style.color="red";
        b7btn.style.color="red";
        document.getElementById("para").innerHTML="Player "+inp1.value+" WON <br> Beter luck next time player "+inp2.value;
    }
    else if((b2 == 'X') && (b5 == 'X') && (b8 == 'X')){
        b2btn.style.color="red";
        b5btn.style.color="red";
        b8btn.style.color="red";
        document.getElementById("para").innerHTML="Player "+inp1.value+" WON <br> Beter luck next time player "+inp2.value;
    }
    else if((b3 == 'X') && (b6 == 'X') && (b9 == 'X')){
        b3btn.style.color="red";
        b6btn.style.color="red";
        b9btn.style.color="red";
        document.getElementById("para").innerHTML="Player "+inp1.value+" WON <br> Beter luck next time player "+inp2.value;
    }
    else if((b4 == 'X') && (b5 == 'X') && (b6 == 'X')){
        b4btn.style.color="red";
        b5btn.style.color="red";
        b6btn.style.color="red";
        document.getElementById("para").innerHTML="Player "+inp1.value+" WON <br> Beter luck next time player "+inp2.value;
    }
    else if((b1 == 'X') && (b5 == 'X') && (b9 == 'X')){
        b1btn.style.color="red";
        b5btn.style.color="red";
        b9btn.style.color="red";
        document.getElementById("para").innerHTML="Player "+inp1.value+" WON <br> Beter luck next time player "+inp2.value;
    }
    else if((b7 == 'X') && (b8 == 'X') && (b9 == 'X')){
        b7btn.style.color="red";
        b8btn.style.color="red";
        b9btn.style.color="red";
        document.getElementById("para").innerHTML="Player "+inp1.value+" WON <br> Beter luck next time player "+inp2.value;
    }
    else if((b3 == 'X') && (b5 == 'X') && (b7 == 'X')){
        b3btn.style.color="red";
        b5btn.style.color="red";
        b7btn.style.color="red";
        document.getElementById("para").innerHTML="Player "+inp1.value+" WON <br> Beter luck next time player "+inp2.value;
    }
    else if((b1 == 'O') && (b2 == 'O') && (b3 == 'O')){
        b1btn.style.color="red";
        b2btn.style.color="red";
        b3btn.style.color="red";
        document.getElementById("para").innerHTML="Player "+inp2.value+" WON <br> Beter luck next time player "+inp1.value;
    }
    else if((b1 == 'O') && (b4 == 'O') && (b7 == 'O')){
        b1btn.style.color="red";
        b4btn.style.color="red";
        b7btn.style.color="red";
        document.getElementById("para").innerHTML="Player "+inp2.value+" WON <br> Beter luck next time player "+inp1.value;
    }
    else if((b2 == 'O') && (b5 == 'O') && (b8 == 'O')){
        b2btn.style.color="red";
        b5btn.style.color="red";
        b8btn.style.color="red";
        document.getElementById("para").innerHTML="Player "+inp2.value+" WON <br> Beter luck next time player "+inp1.value;
    }
    else if((b3 == 'O') && (b6 == 'O') && (b9 == 'O')){
        b3btn.style.color="red";
        b6btn.style.color="red";
        b9btn.style.color="red";
        document.getElementById("para").innerHTML="Player "+inp2.value+" WON <br> Beter luck next time player "+inp1.value;
    }
    else if((b4 == 'O') && (b5 == 'O') && (b6 == 'O')){
        b4btn.style.color="red";
        b5btn.style.color="red";
        b6btn.style.color="red";
        document.getElementById("para").innerHTML="Player "+inp2.value+" WON <br> Beter luck next time player "+inp1.value;
    }
    else if((b1 == 'O') && (b )+inp1.value && (b9 == 'O')){
        b1btn.style.color="red";
        b5btn.style.color="red";
        b9btn.style.color="red";
        document.getElementById("para").innerHTML="Player "+inp2.value+" WON <br> Beter luck next time player "+inp1.value;
    }
    else if((b7 == 'O') && (b8 == 'O') && (b9 == 'O')){
        b7btn.style.color="red";
        b8btn.style.color="red";
        b9btn.style.color="red";
        document.getElementById("para").innerHTML="Player "+inp2.value+" WON <br> Beter luck next time player "+inp1.value;
    }
    else if((b3 == 'O') && (b5 == 'O') && (b7 == 'O')){
        b3btn.style.color="red";
        b5btn.style.color="red";
        b7btn.style.color="red";
        document.getElementById("para").innerHTML="Player "+inp2.value+" WON <br> Beter luck next time player "+inp1.value;
    }
}

var f=1;
function btn(e){
    if(f === 1){
        e.target.innerHTML = "X";
        e.target.disabled = true;
        f=0;
    }
    else if(f===0){
        e.target.innerHTML = "O";
        e.target.disabled = true;
        f=1;
    }
}

function resetbtn(){
	location.reload();
	b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
}
