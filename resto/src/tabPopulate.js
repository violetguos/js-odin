function tabDivs(){
  const divTab = document.createElement("div");
  divTab.classList.add("tab");


  const divContent = document.createElement("div");
  divContent.classList.add("content");
  divContent.id="resto";

  divTab.appendChild(divContent);
  return divTab;
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

const tabPopulate = (() =>{
  const contentDiv = document.querySelector(".tabsy");
  const divTab = tabDivs();

  const contentTab = tabContent();
  for(var i = 0; i<contentTab.length; i++)
    divTab.appendChild(contentTab[i]);
  contentDiv.appendChild(divTab);

})();

export {tabPopulate};