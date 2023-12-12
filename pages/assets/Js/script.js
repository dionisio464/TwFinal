
function openTab(event, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "#ddd";
    }
    document.getElementById(tabName).style.display = "flex";
    event.currentTarget.style.backgroundColor = "#bbb";
}

function publicarOferta() {
    var nome = document.getElementById("nome").value;
    var bairro = document.getElementById("bairro").value;
    var trabalho = document.getElementById("trabalho").value;
    var preco = document.getElementById("preco").value;
    var contato = document.getElementById("contato").value;

    // Adicione a lógica para armazenar a oferta (por exemplo, em um banco de dados)
    // Aqui, estamos apenas exibindo os resultados na lista de serviços ofertados.

    var listaOfertas = document.getElementById("listaOfertas");
    var listItem = document.createElement("p");
    listItem.textContent = "Nome: " + nome + " ---------- Bairro: " + bairro + " ---------- Trabalho: " + trabalho + ",\n"  + " ---------- Preço: "+ preco + " ---------- Contato: " + contato;
    listaOfertas.appendChild(listItem);

    // Limpa o formulário
    document.getElementById("ofertaForm").reset();
}

// Abre a primeira aba por padrão
document.querySelector(".tablinks").click();



function filtrarServicos() {
    var pesquisa = document.getElementById("pesquisa").value.toLowerCase();
    var listaOfertas = document.getElementById("listaOfertas");
    var ofertas = listaOfertas.getElementsByTagName("li");

    for (var i = 0; i < ofertas.length; i++) {
        var textoOferta = ofertas[i].textContent.toLowerCase();
        if (textoOferta.includes(pesquisa)) {
            ofertas[i].style.display = "block";
        } else {
            ofertas[i].style.display = "none";
        }
    }
}

document.querySelector(".tablinks").click();




