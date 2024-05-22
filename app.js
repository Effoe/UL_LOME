
let bouton=document.getElementById('button');
let affiche=document.getElementById('affiche')

let display=false
bouton=addEventListener('click', function () {
    // affiche.style.display='block'
    if (!display) {
        affiche.style.display='block'
        display=true
    } else {
        affiche.style.display='none'
        display=false
    }
})