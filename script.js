function menuopen() {
    document.getElementById('menu')
    .style.display = "inline";
    document.getElementById('navitemclose')
    .style.display = "inline";
    document.getElementById('menu')
    .style.animationName = "menuopen";
    document.getElementById('main')
    .style.display = "none";
}  
function menuclose() {
    document.getElementById('menu')
    .style.display = "none";
    document.getElementById('navitemclose')
    .style.display = "none";
    document.getElementById('main')
    .style.display = "inline-block";
    document.getElementById('main')
    .style.maxWidth = "100%";
}  
