$(document).ready(function () {

    
  
   $('img').hover(function(){
    let value= $(this).attr('src');
    console.log(value)
    let change=$(this).attr('foto2');
    console.log(change)
        $(this).attr('src',change);
        $(this).attr('foto2',value);
   })
   ,function(){
    $('img').hover(function(){
        $(this).attr('src',value);
        $(this).attr('foto2',change);
   })
   }
 
});
