var usuarios = [[],[],[],[]]
var logado = false
var nome_usuario = null

function cadastro() {
    var email = document.email.username.value
    console.log(email)
    usuarios[3].push(email)
    console.log(usuarios)
    window.location.href = "../paginas/cadastro2.html";
}
function finalizar_cad(){
    var login = document.form.nome.value
    var senha = document.form.senha.value
    var nome_i = document.form.nome_invocador.value
    usuarios[0].push(login);
    usuarios[1].push(senha);
    usuarios[2].push(nome_i);
    window.location.href = "../paginas/login.html";
}
function login(){
    alert("autenticado")
    logado = true
    window.location.href = "../index.html";
}
