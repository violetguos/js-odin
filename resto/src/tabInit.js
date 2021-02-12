const tabFactory = (title, id) => {
    
    const inputTab1 = document.createElement("input");
    inputTab1.setAttribute("type", "radio");
    inputTab1.setAttribute("name", "tab");
    inputTab1.setAttribute("id", "tab"+id);
    inputTab1.checked = true;

    const label = document.createElement("label");
    label.setAttribute("class", "tabButton");
    label.setAttribute("for", "tab1");
    const label_content = document.createTextNode(title);
    label.appendChild(label_content);
    
    return [inputTab1, label];
}; 

const tab = (() => {
    const contentDiv = document.querySelector("#content");
    const divElement = document.createElement("div");
    divElement.classList.add("tabsy");

    const tab1 = tabFactory("Resto", 1);
    // const tab2 = tabFactory("Contact", 1);

    for(let i=0; i<tab1.length; i++){
        divElement.appendChild(tab1[i]);
    }
    contentDiv.appendChild(divElement);
})();


export { tab };