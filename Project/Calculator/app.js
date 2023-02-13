(function () {
    let display=document.querySelector('.display');
    let buttons=document.querySelectorAll('.btn');
    let clear=document.querySelector('.btn-clear');
    let eqaul=document.querySelector('.btn-equal');

      buttons.forEach(function (button) {
    
   button.addEventListener('click',function(e){
   let value=e.target.dataset.num;
   display.value+=value;
   })
    
});
     eqaul.addEventListener('click',function(e){
        if (display.value=='') {
            display.value="";
        }else
        {
            let answer=eval(display.value);
            display.value=answer;
        }
     })
     clear.addEventListener('click',function(e){
        display.value="";
     })
    

})();