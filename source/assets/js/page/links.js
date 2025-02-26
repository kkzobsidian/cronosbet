// links.js
const links = {
    plataform: "https://cronosbet.space/home/game?gameCategoryId=0",
    kirvano: "#",
};

function updateElements() {
    for (const id in links) {
        const element = document.getElementById(id);
        if (element) {
            if (element.tagName === 'IFRAME') {
                element.src = links[id];
            } else if (element.tagName === 'A') {
                element.href = links[id];
            }
        }
    }
    
    const footer = document.getElementById('footer');
    if (footer) {
        footer.innerHTML = links.footerText;
    }
}

window.onload = updateElements;
