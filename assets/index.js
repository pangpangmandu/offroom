menuText = document.querySelectorAll(".menu-text");
Content = document.querySelectorAll(".content");

menuText.forEach( 
    mt=>{mt.addEventListener("click", event=> menuSelect(mt))}
    );


function menuSelect(mt){

    menuText.forEach(
        mt2=>{
            mt2.classList.remove("menu-selected");
            var cnt = String(mt2.innerHTML);
            var cntelem = document.getElementsByClassName(cnt)[0];
            cntelem.classList.remove("content-selected");
        }
    )
    mt.classList.add("menu-selected");
    var cnt =String(mt.innerHTML);
    var cntelem = document.getElementsByClassName(cnt)[0];
    cntelem.classList.add("content-selected");

}