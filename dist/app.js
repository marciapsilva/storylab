var database = firebase.database();

$(document).ready(function(){
  //Pagina HOME
  $('main').on('click', '#show-signup-modal', showSignUpModal);
  $('main').on('click','#close-signup-modal', hideSignUpModal);
  $('#nav-login').on('click','#logoff', logOff);
  $('#nav-login').on('click', showLoginModal);
})

//Requisicoes genéricas

const getUserId = () => {
  database.ref(`users/`).once('value')
  .then(snapshot => {
    console.log(snapshot);
    // snapshot.forEach( friendsUserFollows => {
    //   var username = friendsUserFollows.val().username;
    // })
  });
}

//JS DA NAVBAR

const showLoginModal = () => {
  $('#login-container').css('display', 'block');
}

//JS DA PAGINA HOME - CADASTRO

const renderHome = () => {
  return `
    <div class="about-container d-flex f-wrap j-between">
      <div class="about-img-container">
        <img src="" alt="foto do app funcionando">
      </div>
      <div class="about-text">
        <h1 class="title-font">Planejar sua história nunca foi tão fácil</h1>
        <p>Explicação do que é o Storylab</p>
        <button id="show-signup-modal">Cadastre-se</button>
      </div>
    </div>

    <div id="signup-modal" class="signup-modal overlay w-100 h-100">
      <div class="modal-container d-flex j-center h-100">
        <div class="modal-header d-flex w-100">
          <h4>Cadastre-se:</h4>
          <span id="close-signup-modal" class="close">&times;</span>
        </div>
        <div class="modal-body d-flex j-center">
          <div>
            <div class="sign-up-modal-block">
              <label>Nome:</label>
              <input type="text" id="signup-first-name">
            </div>
            <div class="sign-up-modal-block">
              <label>Sobrenome:</label>
              <input type="text" id="signup-last-name">
            </div>
            <div class="sign-up-modal-block">
              <label>E-mail:</label>
              <input type="text" id="signup-email">
            </div>
            <div class="sign-up-modal-block">
              <label>Senha:</label>
              <input type="password" id="signup-password">
            </div>
            <button id="sign-up">Cadastrar</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

const showSignUpModal = () => {
  $('#signup-modal').css('display', 'block');
}

const hideSignUpModal = () => {
  $('#signup-modal').css('display', 'none');
}

const createUserData = (USER_UID, firstName, lastName, username, email) => {
  database.ref('users/' + USER_UID).push({
    name: firstName,
    lastName: lastName,
    username: username,
    email: email
  });
}

//PÁGINA PRINCIPAL DO USUÁRIO

const changeToLogged = () => {
  let template = `
    <div class="user-avatar">
      <img src="" alt="IMAGEM">
      <div class="logged-block">
        <ul>
          <li><a href="/user/${username}" id="logoff">Projetos</a></li>
          <li><a href="#">Configurações</a></li>
          <li><a href="/" id="logoff">Sair</a></li>
        </ul>
      </div>
    </div>
  `; 
  $('#nav-login').html(template);
}

const logOff = () => {
  $('#login-container').css('display', 'none');

  let template = `
    <a href="" class="nav-login">login</a>
    <div class="login-container" id="login-container">
      <form class="login-block">
        <input type="text" id="user-email" placeholder="E-mail">
        <input type="password" id="password" placeholder="Senha">
      </form>
      <button id="login">Entrar</button>
      <!-- <div>
        <a href="#" id="recover-password">Esqueci a senha</a>
      </div> -->
    </div>
  `
  $('#nav-login').html(template);
}

function renderUserLandingPage() {
  return '<p>Página principal do usuário</p>';
}

//SESSÃO DE ERROS 

const showErrorMessage = error => alert(error);

//função do HOME
    //página de boas-vindas e CADASTRO

//função do botão ENTRAR (com firebase)
    //mudar o navegador com o usuário logado (trocar os inputs de logar para CONFIGURACOES e SAIR)
    //salvar no local storage

  //PERGUNTAR PRO RAFA SE NO ROTAS VAO SÓ AS ROTAS OU PODE TER OUTRAS COISAS

//função de cada PROJETO para a página de funcionalidades
    //criar funcionalidade de ADICIONAR projeto (modal + banco de dados)
    //criar funcionalidade de EDITAR projeto (modal + banco de dados)
    //criar funcionalidade de DELETAR projeto (modal + banco de dados)

//função da funcionalidade de REFERENCIA
    //criar funcionalidade de ADICIONAR referencia de LIVRO (modal + banco de dados)
    //criar funcionalidade de ADICIONAR referencia de FILME (modal + banco de dados)

    //criar funcionalidade de EDITAR referencia de LIVRO (modal + banco de dados)
    //criar funcionalidade de EDITAR referencia de FILME (modal + banco de dados)

    //criar funcionalidade de DELETAR referencia de LIVRO (modal + banco de dados)
    //criar funcionalidade de DELETAR referencia de FILME (modal + banco de dados)

    //implementar a API de livros
    //implementar a API de filmes

//função do micro menu do projeto (RETORNAR para a página com as funcionalidades e todos os projetos)

