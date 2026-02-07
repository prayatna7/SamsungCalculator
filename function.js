const screen= document.getElementById('screen');
const result= document.getElementById('result');
const operators = ['+','-','*','/','%'];
let a=0;
function inDisplay(a){
    screen.value += a;
        result.value = eval(screen.value);
    
}
function clearScreen(){
    screen.value ='';
    result.value ='';
}
function backspace(){
    screen.value = screen.value.slice(0, -1);
}
function brackets() {
    a++;
    if(a%2==0){
      screen.value += ")";  
    }
    else{
    screen.value += "(";
    }
}
function calculate(){
    result.value='';
try{  
    screen.value = eval(screen.value);
}
catch(error){
    screen.value = 'ERROR!!';
}
}