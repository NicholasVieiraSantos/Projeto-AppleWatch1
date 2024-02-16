let dark-mode = document.querySelector("#dark-mode");

dark-mode.onclick = () => {
    if (dark-mode.classList.contains("bx-moon")) {
        dark-mode.classList.replace("bx-moon", "bx-sun");
        document.body.classList.add('color')
    } else {
        dark-mode.classList.replace("bx-sun", "bx-moon");
        document.classList.remove('color')
    }
};
