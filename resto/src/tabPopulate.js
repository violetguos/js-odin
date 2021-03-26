function tabDivs(){
  const divContent = document.createElement("div");
  divContent.classList.add("content");
  divContent.id="resto";
  return divContent;
}

function tabContent(){
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  const head_content = document.createTextNode("pizza academy");
  h1.appendChild(head_content);
  header.appendChild(h1);

  const paragraph = document.createElement("p");
  const pDiv = document.createTextNode("the best");
  paragraph.appendChild(pDiv);

  const img = document.createElement("img");
  img.src = "img/restaurant.jpg"; 
  
  return [h1, header, paragraph, img];
}

function tabContact(){
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  const head_content = document.createTextNode("pizza academy");
  h1.appendChild(head_content);
  header.appendChild(h1);

  const paragraph = document.createElement("p");
  const pDiv = document.createTextNode("Call us");
  paragraph.appendChild(pDiv);


  
  return [h1, header, paragraph];
}

function tabPopulate(parentDiv, id){

  const divTab = tabDivs();

  const contentTab = tabContent();

  if (id===1){
    for(let i = 0; i<contentTab.length; i++)
      divTab.appendChild(contentTab[i]);
    parentDiv.appendChild(divTab);

  }
 
  

  else{
    const contactTab = tabContact();

    for(let i = 0; i<contactTab.length; i++)
      divTab.appendChild(contactTab[i]);
    parentDiv.appendChild(divTab);

  }
  

}

export {tabPopulate};