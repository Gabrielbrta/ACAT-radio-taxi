
export default function themeInit() {
    const elements = document.querySelectorAll('body, form, .red, form .title, form input, .select, .select select, .select option, .select select, .card, .card.active, form span, p.result, p, button, .select label, p.result strong');

    const selectColor = document.querySelector('select.tema');
    let corStorage = window.localStorage.getItem("tema");

    if(corStorage){
         setColor(corStorage);
         selectColor.value = corStorage;
    }

    function setColor(cor) {
        if(cor == "dark") elements.forEach((element) => element.classList.remove("white"));
        else elements.forEach((element) => element.classList.add('white'));
    }

    selectColor.addEventListener('input', () => {
        let tema = selectColor.value;
        setColor(tema);
        window.localStorage.setItem("tema", tema);
        selectColor.value = window.localStorage.getItem('tema');
    });

}