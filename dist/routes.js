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