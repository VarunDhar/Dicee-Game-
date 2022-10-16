let rand1 = 1 + Math.floor(Math.random()*6);
let rand2 = 1 + Math.floor(Math.random()*6);
if(rand1 > rand2){
    document.querySelector(".message p").innerHTML='<img src="Red_flag.png" width=40px height=40px> Player 1 wins!';
}
else if(rand1 < rand2){
    document.querySelector(".message p").innerHTML='Player 2 wins! <img src="Red_flag.png" width=40px height=40px>';
}
else{
    document.querySelector(".message p").innerHTML="It's a draw!";
}

    document.querySelector(".d1").setAttribute("src","df"+rand1+".PNG");
    document.querySelector(".d2").setAttribute("src","df"+rand2+".PNG");