// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const select = document.querySelector("select");
const COUNTRY_LS = 'country';

function saveCountry(text){
    localStorage.setItem(COUNTRY_LS, text);
}

function handleSelect(event){
    const currentValue = event.target.value;
    saveCountry(currentValue);
}

function init(){
    select.addEventListener("change", handleSelect);
}
init();