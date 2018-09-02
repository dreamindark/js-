
//使选项栏固定
    function tab() {
        var top = document.getElementById("top");
        var height = top.offsetHeight;
        var option = document.getElementById("option");
        var foot = document.getElementById("foot");
        window.onscroll = function () {
            if (scroll().top > height) {
                option.className += " fixed";
                foot.style.paddingTop = option.offsetHeight+ "px";
                foot.style.paddingleft = option.offsetLeft+"px";
            }else{
               option.className = " option";
                foot.style.paddingTop = 0;
            }
        }
    }
//轮转图
function over() {
    var foot = document.getElementById("foot");
    var center = foot.firstElementChild || foot.firstChild;
    var ul = center.firstElementChild || center.firstChild;
    var li =ul.firstElementChild ||ul.firstChild;
    var imgWidth = li.offsetWidth;
    var ol = center.children[1];
    var arr = document.getElementById("arr");
    var spanArr = arr.children;
    //复制第一张图片
    var ulNewLi = li.cloneNode(true);
    ul.appendChild(ulNewLi);
    //把图片插入到ol中

    for(var i=0;i<ul.children.length-1;i++){
       var olNewLi = document.createElement("li");
        olNewLi.innerHTML = i+1;
        ol.appendChild(olNewLi);
    }
    olLiArr = ol.children;
    olLiArr[0].className = "current";
    //点击下方方块后开始轮转
    for(var i=0;i<olLiArr.length;i++){
        olLiArr[i].index = i;
        olLiArr[i].onmouseover = function(){
           for(var j=0;j<olLiArr.length;j++){
               olLiArr[j].className = "";
           }
            this.className = "current";
            key = square = this.index;
            animate(ul,-this.index*imgWidth);
        }
    }
    //定时器
    var key = 0;
    var square = 0;
    var timer  = setInterval(auto,3000);
    function auto(){
        key++;
        if(key>olLiArr.length){
            key = 1;
            ul.style.left = 0;
        }
        animate(ul,-key*imgWidth);
        square++;
        if(square>olLiArr.length-1){
            square = 0
        }
        for(var j=0;j<olLiArr.length;j++){
            olLiArr[j].className = "";
        }
        olLiArr[square].className = "current";
    }
    center.onmouseover = function () {
        arr.style.display = "block";
        clearInterval(timer);
    };
    center.onmouseout = function () {
        arr.style.display = "none";
        timer =setInterval(auto,2000)
    };
    //左右切换
    spanArr[0].onclick = function () {
        key--;
        if(key<0){
            ul.style.left = -(olLiArr.length)*imgWidth+"px";
            key = olLiArr.length-1;
        }
        animate(ul,-key*imgWidth);
        square--;
        if(square<0){
            square = olLiArr.length-1;
        }
        for(var j=0;j<olLiArr.length;j++){
            olLiArr[j].className = "";
        }
        olLiArr[square].className = "current";

    };
    spanArr[1].onclick = function(){
        auto();
    };
}


//跳转
    function gud(){
            var gud = document.getElementById("gud");
            window.onscroll = function(){
                if(scroll().top>10){
                    gud.style.display = "block";
                }else{
                    gud.style.display = "none";
                }
                leader = scroll().top;
            };
        var heigth = document.body.offsetHeight;
        var guide = document.getElementById("guide");
        oldLi = guide.children;
        //直接跳转而不是滚动
        oldLi[0].onclick = function(){
            window.scrollTo(0,0)
        };
        oldLi[1].onclick = function(){
            window.scrollTo(0,heigth)
        };
        //滚动
        //var timer = null
        //var target = 0;
        //var leader = 0;
        //oldLi[0].onclick = function () {
        //    clearInterval(timer);
        //    timer = setInterval(function () {
        //        var step = (target-leader)/10;
        //        step = step>0?Math.ceil(step):Math.floor(step);
        //        leader = leader+step;
        //        window.scrollTo(0,leader);
        //        if(leader ===0){
        //            clearInterval(timer);
        //        }
        //    },1)
        //}
        //oldLi[1].onclick = function () {
        //    clearInterval(timer);
        //    timer = setInterval(function () {
        //        var step = (heigth-leader)/10;
        //        step = step>0?Math.ceil(step):Math.floor(step);
        //        leader = leader+step;
        //        window.scrollTo(0,leader);
        //        if(leader ===0){
        //            clearInterval(timer);
        //        }
        //    },1)
        //}

    }
//跟随

addload(tab);
addload(over);
addload(gud);
