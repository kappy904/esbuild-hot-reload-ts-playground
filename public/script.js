(() => {
  // src/index.ts
  "use strict";
  var el = document.getElementById("root");
  var fetchItem = (item) => {
    fetch(`https://ghibliapi.herokuapp.com/${item}`).then((res) => res.json()).then((item2) => {
      const list = item2.map((item3) => `<li>${item3.name}</li>`).join("\n");
      return el.innerHTML = `<ul>${list}</ul>`;
    });
  };
  fetchItem("people");
})();
