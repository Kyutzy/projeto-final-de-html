var usuarios = [[], [], [], []];
var pedidos = [[], [], [], [], []];
var logado = false;
var nome_usuario = null;

window.onload = prepare;
function prepare() {
  nome_usuario = localStorage.getItem("nome_usuario", nome_usuario);
  if (nome_usuario == null) {
    nome_usuario = "";
  }
  logado = localStorage.getItem("logado", logado);
  if (logado == null) {
    logado = false;
    localStorage.setItem("logado", logado);
  }
  pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
  if (pedidos == null || pedidos.length == 0) {
    pedidos = [[], [], [], [], []];
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
  }
  usuarios = JSON.parse(localStorage.getItem("lista_usuarios")) || [];
  if (usuarios == null || usuarios.length == 0) {
    usuarios = [[], [], [], []];
    localStorage.setItem("lista_usuarios", JSON.stringify(usuarios));
  }
}

function cadastro() {
  var email = document.email.username.value;
  alert(email);
  usuarios[3].push(email);
  localStorage.setItem("lista_usuarios", JSON.stringify(usuarios));
  console.log(usuarios);
  window.location.href = "../paginas/cadastro2.html";
  return false;
}
function finalizar_cad() {
  var login = document.form.nome.value;
  var senha = document.form.senha.value;
  var nome_i = document.form.nome_invocador.value;
  var cadastros = JSON.parse(localStorage.getItem("lista_usuarios")) || [];
  cadastros[0].push(login);
  cadastros[1].push(senha);
  cadastros[2].push(nome_i);
  localStorage.setItem("lista_usuarios", JSON.stringify(cadastros));
  window.location.href = "../paginas/login.html";
  return false;
}
function login() {
  var login = document.loginForm.usuario.value;
  var senha = document.loginForm.senha.value;
  var cadastros = JSON.parse(localStorage.getItem("lista_usuarios")) || [];
  for (var i = 0; i < cadastros[0].length; i++) {
    if (cadastros[0][i] == login) {
      if (cadastros[1][i] == senha) {
        alert("autenticado!");
        logado = true;
        nome_usuario = cadastros[2][i];
        localStorage.setItem("logado", logado);
        localStorage.setItem("nome_usuario", nome_usuario);
        window.location.href = "../index.html";
        return false;
      }
    }
  }
  if (logado != true) {
    alert(
      "Conta não encontrada, verifique suas credenciais e tente novamente!"
    );
  }
  if (logado == true) {
    location.href.replace;
  }
}
function carrinho() {
  var carrinho = JSON.parse(localStorage.getItem("pedidos")) || [];
  var nome_usuario = localStorage.getItem("nome_usuario");

  escrever = "";
  for (var i = 0; i < carrinho[0].length; i++) {
    if (carrinho[4][i] == "lol-ej" && carrinho[2][i] == nome_usuario) {
      escrever +=
        '<div class="conteudo"><span class=duo><i class="fas fa-user fa-2x"></i></span>';
      escrever +=
        "<div class=" +
        "foto_elo1" +
        "><img src=" +
        "../imagens/" +
        carrinho[0][i] +
        ".png width= " +
        '"130%"' +
        "height=" +
        '"130%"' +
        "></div>";
      escrever += '<div class="seta">';
      escrever += '<i class="fas fa-arrow-right fa-7x"></i>';
      escrever +=
        '<div class="nome_invocador"><p>' + carrinho[2][i] + "</p></div>";
      escrever += "</div>";
      escrever +=
        "<div class=" +
        "foto_elo2" +
        "><img src=" +
        "../imagens/" +
        carrinho[1][i] +
        ".png width= " +
        '"130%"' +
        "height=" +
        '"130%"' +
        "></div>";
      escrever +=
        '<div class="pagamento"><p>R$' + carrinho[3][i] + ".00</p></div>";
      escrever +=
        '<div class="prosseguir"><i class="far fa-arrow-alt-circle-right fa-5x"></i><br>Elojob</div>';
      escrever += "</div>";
    } else {
      if (carrinho[4][i] == "lol-dj") {
        escrever +=
          '<div class="conteudo"><span class=duo><i class="fas fa-user-friends fa-2x"></i></span>';
        escrever +=
          "<div class=" +
          "foto_elo1" +
          "><img src=" +
          "../imagens/" +
          carrinho[0][i] +
          ".png width= " +
          '"130%"' +
          "height=" +
          '"130%"' +
          "></div>";
        escrever += '<div class="seta">';
        escrever += '<i class="fas fa-arrow-right fa-7x"></i>';
        escrever +=
          '<div class="nome_invocador"><p>' + carrinho[2][i] + "</p></div>";
        escrever += "</div>";
        escrever +=
          "<div class=" +
          "foto_elo2" +
          "><img src=" +
          "../imagens/" +
          carrinho[1][i] +
          ".png width= " +
          '"130%"' +
          "height=" +
          '"130%"' +
          "></div>";
        escrever +=
          '<div class="pagamento"><p>R$' + carrinho[3][i] + ".00</p></div>";
        escrever +=
          '<div class="prosseguir"><i class="far fa-arrow-alt-circle-right fa-5x"></i><br>Duojob</div>';
        escrever += "</div>";
      } else {
        if (carrinho[4][i] == "vava-dj") {
          escrever +=
            '<div class="conteudo"><span class=duo><i class="fas fa-user-friends fa-2x"></i></span>';
          escrever +=
            "<div class=" +
            "foto_elo1" +
            "><img src=" +
            "../imagens/" +
            carrinho[0][i] +
            "-Val.png width= " +
            '"130%"' +
            "height=" +
            '"130%"' +
            "></div>";
          escrever += '<div class="seta">';
          escrever += '<i class="fas fa-arrow-right fa-7x"></i>';
          escrever +=
            '<div class="nome_invocador"><p>' + carrinho[2][i] + "</p></div>";
          escrever += "</div>";
          escrever +=
            "<div class=" +
            "foto_elo2" +
            "><img src=" +
            "../imagens/" +
            carrinho[1][i] +
            "-Val.png width= " +
            '"130%"' +
            "height=" +
            '"130%"' +
            "></div>";
          escrever +=
            '<div class="pagamento"><p>R$' + carrinho[3][i] + ".00</p></div>";
          escrever +=
            '<div class="prosseguir"><i class="far fa-arrow-alt-circle-right fa-5x"></i><br>Duojob</div>';
          escrever += "</div>";
        } else {
          if (carrinho[4][i] == "vava-ej") {
            escrever +=
              '<div class="conteudo"><span class=duo><i class="fas fa-user fa-2x"></i></span>';
            escrever +=
              "<div class=" +
              "foto_elo1" +
              "><img src=" +
              "../imagens/" +
              carrinho[0][i] +
              "-Val.png width= " +
              '"130%"' +
              "height=" +
              '"130%"' +
              "></div>";
            escrever += '<div class="seta">';
            escrever += '<i class="fas fa-arrow-right fa-7x"></i>';
            escrever +=
              '<div class="nome_invocador"><p>' + carrinho[2][i] + "</p></div>";
            escrever += "</div>";
            escrever +=
              "<div class=" +
              "foto_elo2" +
              "><img src=" +
              "../imagens/" +
              carrinho[1][i] +
              "-Val.png width= " +
              '"130%"' +
              "height=" +
              '"130%"' +
              "></div>";
            escrever +=
              '<div class="pagamento"><p>R$' + carrinho[3][i] + ".00</p></div>";
            escrever +=
              '<div class="prosseguir"><i class="far fa-arrow-alt-circle-right fa-5x"></i><br>Elojob</div>';
            escrever += "</div>";
          }
        }
      }
    }
    document.getElementById("itens").innerHTML += escrever;
    escrever = "";
  }
}

function comprarEjLol() {
  if (logado == "false" || logado == null) {
    alert(
      "Este conteúdo está restrito para usuários logados, por favor, faça seu login!"
    );
    window.location.href = "../paginas/login.html";
    return false;
  } else {
    var elos = [
      "Ferro",
      "Bronze",
      "Prata",
      "Ouro",
      "Platina",
      "Diamante",
      "Mestre",
      "Grao-Mestre",
      "Desafiante",
    ];
    var elo_atual = document.form_elo.elo_inicial_lol_ej.value;
    var elo_desejado = document.form_elo.elo_final_lol_ej.value;
    alert(elo_atual);
    alert(elo_desejado);
    for (var i = 0; i < elos.length; i++) {
      if (elos[i] == elo_atual) {
        var inicio = i + 1;
      }
    }
    for (var j = 0; j < elos.length; j++) {
      if (elos[j] == elo_desejado) {
        var fim = j + 1;
      }
    }
    console.log("teste");
    var valor_final = 40 * Number(fim - inicio);
    pedidos[0].push(elo_atual);
    pedidos[1].push(elo_desejado);
    pedidos[2].push(nome_usuario);
    pedidos[3].push(valor_final);
    pedidos[4].push("lol-ej");
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
    alert("pedido feito");
  }
}
function comprarDjLol() {
  if (logado == "false" || logado == null) {
    alert(
      "Este conteúdo está restrito para usuários logados, por favor, faça seu login!"
    );
    window.location.href = "../paginas/login.html";
    return false;
  } else {
    var elos = [
      "Ferro",
      "Bronze",
      "Prata",
      "Ouro",
      "Platina",
      "Diamante",
      "Mestre",
      "Grao-Mestre",
      "Desafiante",
    ];
    var elo_atual = document.form_elo.elo_inicial_lol_dj.value;
    var elo_desejado = document.form_elo.elo_final_lol_dj.value;
    alert(elo_atual);
    alert(elo_desejado);
    for (var i = 0; i < elos.length; i++) {
      if (elos[i] == elo_atual) {
        var inicio = i + 1;
      }
    }
    for (var j = 0; j < elos.length; j++) {
      if (elos[j] == elo_desejado) {
        var fim = j;
      }
    }
    console.log("teste");
    var valor_final = 40 * Number(fim - inicio);
    var tipo = "lol-dj";
    pedidos[0].push(elo_atual);
    pedidos[1].push(elo_desejado);
    pedidos[2].push(nome_usuario);
    pedidos[3].push(valor_final);
    pedidos[4].push(tipo);
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
    alert("pedido feito");
  }
}

function comprarEjvava() {
  if (logado == "false" || logado == null) {
    alert(
      "Este conteúdo está restrito para usuários logados, por favor, faça seu login!"
    );
    window.location.href = "../paginas/login.html";
    return false;
  } else {
    var elos = [
      "Ferro",
      "Bronze",
      "Prata",
      "Ouro",
      "Platina",
      "Diamante",
      "Imortal",
    ];
    var elo_atual = document.elo_vava.elo_inicial_val_ej.value;
    var elo_desejado = document.elo_vava.elo_final_val_ej.value;
    alert(elo_atual);
    alert(elo_desejado);
    for (var i = 0; i < elos.length; i++) {
      if (elos[i] == elo_atual) {
        var inicio = i + 1;
      }
    }
    for (var j = 0; j < elos.length; j++) {
      if (elos[j] == elo_desejado) {
        var fim = j + 1;
      }
    }
    console.log("teste");
    var valor_final = 40 * Number(fim - inicio);
    pedidos[0].push(elo_atual);
    pedidos[1].push(elo_desejado);
    pedidos[2].push(nome_usuario);
    pedidos[3].push(valor_final);
    pedidos[4].push("vava-ej");
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
    alert("pedido feito");
  }
}
function comprarDjvava() {
  if (logado == "false" || logado == null) {
    alert(
      "Este conteúdo está restrito para usuários logados, por favor, faça seu login!"
    );
    window.location.href = "../paginas/login.html";
    return false;
  } else {
    var elos = [
      "Ferro",
      "Bronze",
      "Prata",
      "Ouro",
      "Platina",
      "Diamante",
      "Imortal",
    ];
    var elo_atual = document.elo_vava.elo_inicial_val_dj.value;
    var elo_desejado = document.elo_vava.elo_final_val_dj.value;
    alert(elo_atual);
    alert(elo_desejado);
    for (var i = 0; i < elos.length; i++) {
      if (elos[i] == elo_atual) {
        var inicio = i + 1;
      }
    }
    for (var j = 0; j < elos.length; j++) {
      if (elos[j] == elo_desejado) {
        var fim = j;
      }
    }
    console.log("teste");
    var valor_final = 40 * Number(fim - inicio);
    var tipo = "vava-dj";
    pedidos[0].push(elo_atual);
    pedidos[1].push(elo_desejado);
    pedidos[2].push(nome_usuario);
    pedidos[3].push(valor_final);
    pedidos[4].push(tipo);
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
    alert("pedido feito");
  }
}
