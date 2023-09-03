const express = require('express');
const app = express();
const port = 8081;

//app.use('/static', express.static('public'))
app.use(express.static('public'))
app.listen(port, () => console.log(`listening on port ${port}!`));

const container = document.getElementById("gameContainer");
const squareArray = [];
let nextMove = "X";
function gameOver(message){
    document.getElementById("winner").innerHTML=message;
    container.style.display="none";
    document.getElementById("gameOver").style.display="block";

}
function isDraw(){
    let shouldReturn = true;
    squareArray.forEach(({state})=>{
        if(state=="")
        shouldReturn=false;
    });
    return shouldReturn;
}
function wonGame(){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for(let i=0;i<lines.length;i++){
        const [a,b,c]=lines[i];
        if(squareArray[a].state!==""&&
        squareArray[a].state===squareArray[b].state&&
        squareArray[a].state===squareArray[c].state){
            return true;
        }
    }
    return false;
}
class ClassSquare{
    constructor(element,index){
        this.element=element;
        this.index=index;
        this.state="";
    }
    clicked(){
        this.state=nextMove;
        this.element.classList.remove("notClicked");
        this.element.onclick=function ()
    }


}