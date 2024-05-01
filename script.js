let titulo = document.createElement("h1");

titulo.id = "titulo";
titulo.innerText = "Açaiteria";

let body = document.querySelector("body");

body.appendChild(titulo);

let produto = document.createElement("div");

produto.innerHTML = `
  <div>
    <h2>Açaí 500ml</h2>
    <p>Acompanha leite ninho, granola e banana.</p>
    <p id="preco">R$ 21.50</p>
  </div>
`;

body.appendChild(produto)