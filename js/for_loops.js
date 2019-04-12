
function showMultiplicationTable(num){
    for(var i=1;i<=10;i++){
        console.log(num + " x " + i + " = " +(num*i))
    }
}
showMultiplicationTable(7);

for(var i=0;i<10;i++) {
    var randomNum = Math.floor(Math.random() * 50) + 50;
    console.log(randomNum + " is " + (randomNum%2?"odd":"even"));
}

for(var i=1;i<10;i++){
    console.log(String(i).repeat(i));
}
for(var i=100;i>0;i-=5){
    console.log(i);
}