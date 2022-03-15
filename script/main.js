function openModal() {
    document.getElementById("modal").style.top = "0px";
}

function closeModalMenu() {
    document.getElementById("modal").style.top = "-120%";
}

const links_product = document.querySelectorAll(".btn_product");

for (const link of links_product) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
}

const links_tasting = document.querySelectorAll(".btn_tasting");

for (const link of links_tasting) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
}