function mobilemenu(){
    var menu = document.getElementById('menu')
    var mobile_view= document.getElementById('mobile-view')
    var close =document.getElementById('close')
    if(menu){
        menu.onclick=function(){
            mobile_view.style.visibility='visible'
        }
    }
    if(close){
        close.onclick=function(){
            mobile_view.style.visibility='hidden'
        }
    }
}

function sticky() {
    window.onscroll = function () {
      var header = document.querySelector("header");
      if (window.pageYOffset > 0) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };
  }