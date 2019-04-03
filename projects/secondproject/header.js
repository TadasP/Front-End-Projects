var btn = document.querySelector('.fa-bars');
var nav = document.querySelector('.toggle-menu');

var activeMenu = 0;

btn.addEventListener('click', function(){
    if (activeMenu == 0){
        nav.style.display = 'block';
        activeMenu++;
    }else if(activeMenu == 1){
       nav.style.display = 'none';
        if (activeMenu == 1) activeMenu = 0;
    }
})
