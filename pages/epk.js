import { renderPageWithoutMainSection } from "../common/util.js";

//await renderPageWithMain("epk");


function setupJs() {
    console.log("epk.js");
    renderPageWithoutMainSection("../common");
    /*
    const myButton = document.getElementById("myButton");
    myButton.onclick = function() {
        window.alert("hello world!");
    }
    */
}

setupJs();