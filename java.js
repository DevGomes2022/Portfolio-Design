function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}

window.sr = ScrollReveal({ reset: true });

sr.reveal(".movimento-a", {
    duration: 800,
    delay: 400
});

sr.reveal(".movimento-b", {
    duration: 800,
    delay: 400
});



let botao_lista = document.querySelector(".botao_lista")
let lista = document.querySelector(".lista")
botao_lista.addEventListener("click", () => {
    lista.classList.toggle("newlista")
})