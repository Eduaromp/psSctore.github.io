let box;

menu.addEventListener('click', () => {
    if (!box) {
        box = document.createElement('div');
        box.classList.add('menu-box');
        box.innerHTML = `
        <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#computer">Computer</a></li>
        <li><a href="#laptop">Laptop</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#contact">Contact Us</a></li>
        </ul>
        `;
        document.querySelector("#menu").appendChild(box);
    }
    box.style.display = box.style.display === "block" ? "none" : "block";
});