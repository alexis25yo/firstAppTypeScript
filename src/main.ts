import "./style.css";
import "./topics/01-basic-types"
import "./topics/02-object-interface"
import "./topics/0.3-functions"


document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
      <h1>Hola mundo</h1>
  </div>
`;

console.log("Hola mundo");

