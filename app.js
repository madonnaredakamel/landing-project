// global variables
const sections=document.querySelectorAll("section");
const nav=document.querySelector("#navbar__list");
const fragment=document.createDocumentFragment();


// create nav list
sections.forEach((elm)=>{
    const dataNav=elm.getAttribute("data-nav");
    const newLi=document.createElement("li");
    newLi.innerText=dataNav;
    fragment.appendChild(newLi);
    newLi.addEventListener("click",()=>{
        elm.scrollIntoView({behavior:"smooth"});
    });
});
nav.appendChild(fragment)
window.addEventListener("scroll",()=>{
    sections.forEach((sec)=>{
        rect=sec.getBoundingClientRect();

        if(rect.top>=-50 && rect.top<= 200){
              sec.style.background="lightblue";
              let activeDataNav=sec.getAttribute("data-nav");
              
              const allli=document.querySelectorAll("li");
              allli.forEach((theli)=>{
              if(theli.innerText==activeDataNav)
                  {
                      theli.style.background="lightblue"
      
                  }
                  else
                  {
                      theli.style.background="rgba(0,13,60,1)";
                  }
        })
    }
         else {
                 sec.style.background="rgba(0,13,60,1)";
    }
    })
})