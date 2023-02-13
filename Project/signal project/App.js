 function a() {
 const red = document.getElementById('red')
 const yellow = document.getElementById('yellow')
 const green = document.getElementById('green')
 const count = document.getElementById('counter')

 function myTimer() {
 var d = new Date();
 document.getElementById("demo").innerHTML=d.toLocaleTimeString();

 }
 var myVar=setInterval(myTimer, 1000);
///////////////////////////////////////////
 function counter() {
    var i = 0 ;
//exicute 100 time
    setInterval(  function() {
        if (i == 100) clearInterval(this); 
        else count.innerText = 'Currently at' + (1+i++);   
    }, 1000);
} 
     //end

 counter()
 ////////////////////////////////////////////////////////////
 const redBulpOn= () => {
    red.style.backgroundColor = "red"
    console.log('redbulb turned on');
 }

 const yellowBulpOn= () => {
    yellow.style.backgroundColor="yellow"
    console.log('yellowBulp turned on');
 }

 const greenBulpOn= () => {
    green.style.backgroundColor="green"
    console.log('greenBulp turned on');
 }
 
 const redBulpOff = () => {
    red.style.backgroundColor="black"
    console.log('redBulb Turned off');
 }
 const yellowBulpOff = () => {
    yellow.style.backgroundColor="black"
    console.log('yellowBulb Turned off');
 }
 const greenBulpOff = () => {
    green.style.backgroundColor="black"
    console.log('greenBulb Turned off');
 }

 setInterval(
    () => {
        console.log('second');
    },
    1000
 );


 let  lights =() => {
    setTimeout(redBulpOn, 50)
    setTimeout(redBulpOff, 3000)
    setTimeout(yellowBulpOn, 3000)
    setTimeout(yellowBulpOff, 4000)
    setTimeout(yellowBulpOn, 5000)
    setTimeout(yellowBulpOff, 5000)
     setTimeout(yellowBulpOn, 7000)
    setTimeout(yellowBulpOff, 8000)
    setTimeout(greenBulpOn, 8500)
    setTimeout(greenBulp0ff, 13500)
 }
 lights();
 setInterval(lights, 13500)
}
a();
