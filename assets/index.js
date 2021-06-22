menuText = document.querySelectorAll(".menu-text");
Content = document.querySelectorAll(".content-row");


console.log(Content);

menuText.forEach( 
    mt=>{mt.addEventListener("click", event=> menuSelect(mt))}
    );


function menuSelect(mt){

    menuText.forEach(
        mt2=>{
            mt2.classList.remove("menu-selected");
            var cnt = String(mt2.innerHTML);
            Content.forEach(
                cl=>{
                    cl.classList.add("hidden");
                }
            )
            
        }
    )
    
    menuSelect2(mt);

}

function menuSelect2(mt){
    mt.classList.add("menu-selected");
    var cnt =String(mt.innerHTML);
    console.log(cnt);
    var cntelem = document.querySelectorAll("."+cnt);
    var cntelem2 = document.getElementsByClassName(cnt);
    console.log(cntelem);

    for(var i =0; i<cntelem2.length; i++){
        cntelem2[i].classList.add("content-selected")
        cntelem2[i].classList.remove("hidden");
    }

}


