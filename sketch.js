var state="";
var times=0;


function preload(){

}

function setup(){
    createCanvas(windowWidth,windowHeight);



}

function draw(){
    background("black");
    fill("white");
    textSize(50);
    text("Challange to click space bars in 30 seconds",10,100);
    text("SpaceBars Clicked: "+times,width/2 - 300, 250);
    if(state === ""){
        setTimeout(show,30000);
    }

    if(state === "2"){
        fill("white");
        textSize(50);
   text("You Clicked Space Bar "+times+" times", 10,450)
    }

}

function keyPressed(){
    if(state === ""){
    if(keyCode === 32){
        times+=1;
    }
}
}

function show(){
    state = "2";
}