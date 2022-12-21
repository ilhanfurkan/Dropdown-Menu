function slideMenu(slideId,number){
    var slideS=document.getElementById(slideId);
	var row=document.getElementsByClassName("row")[number];
    slideS.style.top=row.offsetTop+"px";
}
function noneDisplay(slideId,none){
    var slideS=document.getElementById(slideId);
    slideS.style.visibility=none;
}
function getValue(defaultId,content,menuId,arrowId){
    var defaultD=document.getElementById(defaultId);
    var menu=document.getElementById(menuId);
        var arrow=document.getElementById(arrowId);


    defaultD.innerHTML="";
    if (content==1) {
        content="<i class='fa-brands fa-instagram'></i><span>Instagram</span>"
    }
    else if (content==2) {
        content="<i class='fa-brands fa-twitter'></i><span>Twitter</span>"

    }
    else if (content==3) {
        content="<i class='fa-brands fa-facebook'></i><span>Facebook</span>"

    }
    else if (content==4) {
        content="<i class='fa-brands fa-linkedin'></i><span>Linkedin</span>"

    }
    else{
        content="<i class='fa-brands fa-youtube'></i><span>Youtube</span>"

    }
    defaultD.innerHTML=content;
    menu.style.display="none";
    arrow.style.transform="rotate(0deg)";
}
function openMenu(arrowId,menuId){
    var arrow=document.getElementById(arrowId);
    var menu=document.getElementById(menuId);
	menu.style.display="inline-block";
    arrow.style.transform="rotate(180deg)";
    menu.style.visibility="visible";
    menu.style.height="250px";
    menu.style.transition="0.5s ease-in-out";

}
