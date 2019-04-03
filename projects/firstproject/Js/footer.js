jQuery('.top-button').on('click',function(){
    jQuery("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
});