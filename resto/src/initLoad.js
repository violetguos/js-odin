const initLoad = (() =>{
  const contentDiv = document.querySelector("#resto");
  

  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  const head_content = document.createTextNode("pizza academy");
  h1.appendChild(head_content);
  header.appendChild(h1);
  contentDiv.appendChild(header);

  const paragraph = document.createElement("p");
  const pDiv = document.createTextNode("the best");
  paragraph.appendChild(pDiv);
  contentDiv.appendChild(paragraph);

  const img = document.createElement("img");
  img.src = "img/restaurant.jpg"; 
  contentDiv.appendChild(img);
})();

export default initLoad;