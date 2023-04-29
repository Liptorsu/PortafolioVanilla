const d = document;

const $menuResponsive = d.querySelector(".menu-responsive"),
        $btnHamburguer = d.querySelector(".hamburguer-menu")

const $project = d.querySelector(".project-tittle");


d.addEventListener("click", (e)=>{
   if (e.target===$btnHamburguer){
    $menuResponsive.classList.toggle("menu-plegable");
    console.log(e.target)
   }
        if (e.target === $project) {
                window.scroll(0,900)
   }
})
