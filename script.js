document.addEventListener("DOMContentLoaded", function () {
    var adicionarBotao = document.getElementById("adicionar");
    var numeroAtual = 0;

    adicionarBotao.addEventListener("click", function () {
        numeroAtual++;

        var camposContainer = document.getElementById("campos");
        var novoCampo = camposContainer.cloneNode(true);
        novoCampo.id = "campos-" + numeroAtual;

        var campinho = novoCampo.querySelector(".input-custom");
        campinho.id = "campo-" + numeroAtual;
        campinho.value = "";

        var removerBotao = novoCampo.querySelector(".remover");
        removerBotao.id = "remover-" + numeroAtual;
        removerBotao.addEventListener("click", function () {
            var numeroRemover = this.id.split("-")[1];
            var campoRemover = document.getElementById("campos-" + numeroRemover);
            campoRemover.remove();
        });

        camposContainer.parentNode.appendChild(novoCampo);
    });
});
