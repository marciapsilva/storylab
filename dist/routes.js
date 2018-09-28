page('/', home);
page('/user/:user', userLandingPage);
page();

$(document).ready(function(){
  $('#nav-login').on('click', '#login', userAuthentication);
  $('main').on('click', '#sign-up', signUp);
})

function home() { $('main').html(renderHome()); };

function userAuthentication() {
  const userEmail = $('#user-email').val();
  const password = $('#password').val();

  firebase.auth().signInWithEmailAndPassword(userEmail, password)
    .then(() => { 
      let username = 'banana';
      page(`/user/${username}`);
      changeToLogged();
    })
    .catch(error => showErrorMessage(error));
}

function userLandingPage(ctx, next) {

  $('main').html(renderUserLandingPage());
}

//ROUTES DA PAGINA HOME - CADASTRO

function signUp() {
  const firstName = $('#signup-first-name').val();
  const lastName = $('#signup-last-name').val();
  const email = $('#signup-email').val();
  const password = $('#signup-password').val();
  const username = (firstName.toLowerCase() + lastName.toLowerCase());

  firebase.auth().createUserWithEmailAndPassword(email, password)    
    .then(response => {
      const USER_UID = response.user.uid;
      createUserData(USER_UID, firstName, lastName, username, email);
      page(`/user/${username}`);
      changeToLogged();
    })
    .catch(error => showErrorMessage(error));
}

//rota do HOME

//rota do botão ENTRAR (com firebase)

  //PERGUNTAR PRO RAFA SE NO ROTAS VAO SÓ AS ROTAS OU PODE TER OUTRAS COISAS

//rota de cada PROJETO para a página de funcionalidades

//rota da funcionalidade de REFERENCIA

//rotas do micro menu do projeto (RETORNAR para a página com as funcionalidades e todos os projetos)

//precisa do document.ready do jquery????
//o pages não funciona com arrow function????