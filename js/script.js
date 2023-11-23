function openmenu() {
    document.getElementById('mobilemenu')
    .style.display = "block";
    document.getElementById('mobilemenu')
    .style.position = "relative";
    document.getElementById('mobilemenu')
    .style.minWidth = "100%";
    document.getElementById('mobilemenu')
    .style.minHeight = "100px";
    document.getElementById('menucontents')
    .style.display = "flex";
    document.getElementById('menucontents')
    .style.flexDirection = "column";
    document.getElementById('closemenu')
    .style.display = "block";
}  
function closemenu() {
    document.getElementById('mobilemenu')
    .style.display = "none";
    document.getElementById('mobilemenu')
    .style.position = "static";
    document.getElementById('mobilemenu')
    .style.minWidth = "0px";
    document.getElementById('mobilemenu')
    .style.minHeight = "0px";
    document.getElementById('menucontents')
    .style.display = "none";
    document.getElementById('closemenu')
    .style.display = "none";
}  