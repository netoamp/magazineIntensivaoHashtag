
const catalogoProduto = document.getElementById("container-produto");

function exibirTodos() {
    const produtosEscondidos = 
    Array.from(catalogoProduto.getElementsByClassName("hidden"));

    for (const produto of produtosEscondidos) {
        produto.classList.remove("hidden");
    };
}

function esconderMaculino() {
    exibirTodos();
    const produtosMasculinos = 
        Array.from(catalogoProduto.getElementsByClassName("masculino"));

    for(const produto of produtosMasculinos){
        produto.classList.add("hidden");
    };
}

function esconderFeminino() {
    exibirTodos();
    const produtosFemininos = 
        Array.from(catalogoProduto.getElementsByClassName("feminino"));

    for(const produto of produtosFemininos){
        produto.classList.add("hidden");
    };
}

export function inicializarFiltros() {
    document.getElementById("exibir-todos").addEventListener("click", exibirTodos);
    
    document.getElementById("exibir-fem").addEventListener("click", esconderMaculino);

    document.getElementById("exibir-masc").addEventListener("click", esconderFeminino);
}