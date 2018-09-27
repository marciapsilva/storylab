page('/', home);
page('/logar', login);
page('/projects', projects);
page(); 

function home() {
  $('main').html(renderHome());
}

function login() {
  $('main').html(renderLogin());
}

function projects() {
  $('main').html(renderProjects());
}

//rota do HOME

//rota do botão ENTRAR (com firebase)

  //PERGUNTAR PRO RAFA SE NO ROTAS VAO SÓ AS ROTAS OU PODE TER OUTRAS COISAS

//rota de cada PROJETO para a página de funcionalidades

//rota da funcionalidade de REFERENCIA

//rotas do micro menu do projeto (RETORNAR para a página com as funcionalidades e todos os projetos)