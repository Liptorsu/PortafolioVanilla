const d = document;

const $menuResponsive = d.querySelector(".menu-responsive"),
        $btnHamburguer = d.querySelector(".hamburguer-menu")

d.addEventListener("click", (e)=>{
   if (e.target===$btnHamburguer){
    $menuResponsive.classList.toggle("menu-plegable");
    console.log(e.target)
   }
})
