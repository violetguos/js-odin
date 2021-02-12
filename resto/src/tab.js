const tab = (() => {
    const contentDiv = document.querySelector("#content");
    
  
    const divElement= document.createElement("div");
    divElement.classList.add("tabsy");
    const inputTab1 = document.createElement("input");
    inputTab1.setAttribute("type", "radio");
    inputTab1.setAttribute("name", "tab");
    inputTab1.setAttribute("id", "tab1");
    inputTab1.checked = true;

    const label = document.createElement("label");
    label.setAttribute("class", "tabButton");
    label.setAttribute("for", "tab1");
    const label_content = document.createTextNode("Resto");
    label.appendChild(label_content);



    divElement.appendChild(inputTab1);
    divElement.appendChild(label);
    contentDiv.appendChild(divElement);
    
  })();
  
  export {tab};