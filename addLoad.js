/**
 * Created by 墨宇 on 2017/10/23.
 */
function addload(func){
    var oldonload = window.onload;
    if(typeof window.onload!='function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}