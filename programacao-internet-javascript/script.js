function clicou() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
    //alert('Você é demais!');
}

function redirecionar() {
    window.open("https://globallabs.academy/");
    window.location.href = "https://globallabs.academy/"; //mesma janela
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Você é demais!"
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto")
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mause aqui"
    elemento.innerHTML = "Passe o mause aqui";
}

function load() {
    //alert("pagina carregada")
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}