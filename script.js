//lógica aqui - Projeto Guiado I - Adriana Charpe

let estoque =[]
let proximoId =1;

function adicionarProduto (nome, quantidade, preco, descricao){
    let produto= {
        id: proximoId++,
        nome: nome,
        quantidade: quantidade, 
        preco: preco,
        descricao: descricao

    }
    estoque.push(produto);
}

 let novoProduto1= adicionarProduto("Tênis", "15", "100.00", "Tênis Drica01");
 let novoProduto2= adicionarProduto("Tênis", "25", "200.00", "Tênis Drica02");
 let novoProduto3= adicionarProduto("Tênis", "35", "300.00", "tênis Drica03");



function listarProduto(){
    for (let i=0; i< estoque.length; i++){
        let produto= estoque[i];
        console.log("\n Lista de Produtos", produto);
    }
 }

function atualizarProduto (id , informacaoAtualizada){
    for(let i=0; i< estoque.length; i++){
        if (estoque[i].id === id){
            estoque[i]=Object.assign(estoque[i], informacaoAtualizada) //O método Object. assign() é usado para copiar os valores de todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto destino. 
        break;
            }
    }
    
}


function removerProduto(id){
    for (let i=0; i< estoque.length; i++){
        if(estoque[i].id === id){
            let removerProduto = estoque.splice(i,1)
            console.log("\n Remover Produto", removerProduto)
            return;
        }
    }
}

// Chamndo as funções

    console.log("Listar Produto pela primeira vez ");
listarProduto()// listar Produtos

    console.log("\n Atualizar Produto");
atualizarProduto(1, {nome:"Tênis Adri"})// Atualizar o nome do tênis

    console.log("\n Remover Produto"); // Remover Produto
removerProduto(2)

adicionarProduto("Saia", "45", "320.00", "Saia Bela")// Adicionanar Produto


    console.log("\n Listar Produto Novamente");
listarProduto()

//console.log("Produtos \n ",estoque);
//  estoque.find(produto=>produto.id)==id;

