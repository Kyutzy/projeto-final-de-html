var usuarios = [[],[],[],[]]
var logado = false
var nome_usuario = null

function cadastro() {
    var email = document.email.username.value
    alert(email)
    usuarios[3].push(email)
    localStorage.setItem('lista_usuarios', JSON.stringify(usuarios));
    console.log(usuarios)
}
function finalizar_cad(){
    var login = document.form.nome.value
    var senha = document.form.senha.value
    var nome_i = document.form.nome_invocador.value
    var cadastros = JSON.parse(localStorage.getItem('lista_usuarios')) || [];
    cadastros[0].push(login);
    cadastros[1].push(senha);
    cadastros[2].push(nome_i);
    localStorage.setItem('lista_usuarios', JSON.stringify(cadastros));
    window.location.href = "../paginas/login.html";
}
function login(){
    var login = document.loginForm.usuario.value
    var senha = document.loginForm.senha.value
    var cadastros = JSON.parse(localStorage.getItem('lista_usuarios')) || [];
    for(var i = 0; i<cadastros[0].length;i++){
        if(cadastros[0][i] == login){
            if(cadastros[1][i] == senha){
                alert("autenticado!")
                logado = true;
                nome_usuario = cadastros[2][i]
                localStorage.setItem("logado", logado);
                break;
            }
        }
    } if (logado != true){
        alert("Conta não encontrada, verifique suas credenciais e tente novamente!")
    }
    if (logado == true){
        location.href.replace
    }
}
function carrinho(){

}
function comprar(){

}
