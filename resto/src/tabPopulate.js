function tabContent(){
  const divTab = document.createElement("div");
  divTab.classList.add("tab");


  const divContent = document.createElement("div");
  divContent.classList.add("content");
  divContent.id="resto";

  divTab.appendChild(divContent);
  return divTab;
}

const tabPopulate = (() =>{
  const contentDiv = document.querySelector("#tabsy");
  
  const contentTab = tabContent();

  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  const head_content = document.createTextNode("pizza academy");
  h1.appendChild(head_content);
  header.appendChild(h1);
  contentTab.appendChild(header);

  const paragraph = document.createElement("p");
  const pDiv = document.createTextNode("the best");
  paragraph.appendChild(pDiv);
  contentTab.appendChild(paragraph);

  const img = document.createElement("img");
  img.src = "img/restaurant.jpg"; 
  contentDiv.appendChild(img);
  contentTab.appendChild(contentDiv);
})();

export {tabPopulate};