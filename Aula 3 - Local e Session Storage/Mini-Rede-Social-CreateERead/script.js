// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        date: "12/10/2023 12:00:00"
    }
];


// Inicialização
window.onload = function() {
    carregarPost();
    displayPosts();
 
    document.querySelector('#postForm').addEventListener('submit', addPost);
    document.querySelector('#postList').addEventListener('click', handleClick);
};
 
function handleClick(event){
    const action = event.target.dataset.action;
    const index = event.target.dataset.index;

    if(action === "Editar"){
        editarPost(index)
    }
    else if(action === "Apagar"){
        apagarPost(index)
}
}

// Função para exibir os posts
function displayPosts() {
    const postList = document.getElementById('postList');
    postList.innerHTML = '';

    posts.forEach((pegaPost,index) => {
            const postElement = document.createElement('div');
            postElement.classList.add('card-post');
  
            postElement.innerHTML = `
                <p>${pegaPost.text}</p>
                ${pegaPost.image ? `<img src="${pegaPost.image}" alt="Imagem do post" style="max-width:150px;">` : ""}
                <p><em>Categoria: ${pegaPost.category}</em></p>
                <p><em>Data e Hora: ${pegaPost.date}</em></p>
                <button data-action="Editar" data-index="${index}"><i class="fa-solid fa-pen-to-square"></i> Editar</button>
                <br>
                <button data-action="Apagar" data-index="${index}"><i class="fa-solid fa-eraser"></i> Apagar</button>
                <hr style="margin:30px;">`;
               
            postList.append(postElement);
        });
}

// Função para adicionar um novo post
function addPost(event) {
    event.preventDefault();
    
    const postText = document.getElementById('postText').value;
    const postCategory = document.getElementById('postCategory').value;
    const postImage = document.getElementById('postImage').value
    const postDate = new Date().toLocaleString(); 

    const post = { 
        text: postText, 
        category: postCategory, 
        image: postImage, 
        date: postDate 
    };
    
    posts.unshift(post);
    
    document.querySelector('#postForm').reset();

    
    displayPosts();
}

//Update
function editarPost(index){
    const novoTexto = prompt('Edite seu post',posts[index].text);
    posts[index].text = novoTexto;

    salvarPosts()
    displayPosts();
}
//Delete
function apagarPost(index){
    const confirmar = confirm("Você realmente deseja excluir isso?")
    if(confirmar){
        posts.splice(index,1);
    }
    
    salvarPosts()
    displayPosts();
}

function salvarPosts(){
    localStorage.setItem("posts", JSON.stringify(posts));
}

function carregarPost(){
    const postGuardardados = localStorage.getItem("posts");
    if(postGuardardados){
        posts = JSON.parse(postGuardardados)
    }
}