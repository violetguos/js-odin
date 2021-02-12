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

function tabPopulate(parentDiv){
  const divTab = tabDivs();

  const contentTab = tabContent();
  for(let i = 0; i<contentTab.length; i++)
    divTab.appendChild(contentTab[i]);
  
  parentDiv.appendChild(divTab);

}

export {tabPopulate};