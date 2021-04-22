
window.onload = function(){

    $('#onload').fadeOut();
    $('body').removeClass("Hidden");
}


var medidainicial = window.pageYOffset;

window.onscroll = function(){

 var desplsamiento =  pageYOffset; 
 if(medidainicial>=desplsamiento){
     document.getElementById('navegacion').style.top="0";
 }
 else{
     document.getElementById('navegacion').style.top="-100%";
 }
 medidainicial = desplsamiento;

}

