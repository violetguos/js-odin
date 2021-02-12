const initLoad = (() =>{
  const contentDiv = document.querySelector("#content");
  const pDiv = document.createTextNode("hot circle of garbage");
  contentDiv.appendChild(pDiv);
})();

export default initLoad;