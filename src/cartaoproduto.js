import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";


export function renderizarCatalogo (){ 
  for ( const produtocatalogo of catalogo){
    const cartaoProduto = `<div class='border-solid  w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group' id="card-produto-${produtocatalogo.id}">
    <img 
      src="./assets/img/${produtocatalogo.imagem}"
      alt="Produto-1 do Magazine Hashtag"
      class='group-hover:scale-110 duration-300 my-3 rounded-lg'
    />
    <pclass='text-sm'>${produtocatalogo.marca}</p>
    <p class='text-sm'>${produtocatalogo.nome}</p>
    <p class='text-sm'>$${produtocatalogo.preco}</p>
    <button id = 'adicionar-${produtocatalogo.id}' class='pl-20 pr-20 hover:bg-slate-300 text-slate-950'
    ><i class="fa-solid fa-cart-plus" ></i></button>
    </div>`;
    
    document.getElementById("conteiner-produto").innerHTML += cartaoProduto;
    }

    for( const produtocatalogo of catalogo){
      document
      .getElementById(`adicionar-${produtocatalogo.id}`)
      .addEventListener("click", () => adicionarAoCarrinho(produtocatalogo.id));
    }
}