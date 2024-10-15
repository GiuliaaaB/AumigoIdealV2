const listaSelecaoCachorros = document.querySelectorAll(".cao");

listaSelecaoCachorros.forEach(cao => {
	cao.addEventListener("click", () => {
		esconderCartaoCao();

		const idCaoSelecionado = mostrarCartaoCaoSelecionado(cao);

		desativarCaoNaListagem();
		ativarCaoSelecionadoNaListagem(idCaoSelecionado);

	})
})


function ativarCaoSelecionadoNaListagem(idCaoSelecionado) {
	const caoSelecionadoNaListagem = document.getElementById(idCaoSelecionado);
	caoSelecionadoNaListagem.classList.add("ativo");
}

function desativarCaoNaListagem() {
	const caoAtivoNaListagem = document.querySelector(".ativo");
	caoAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoCaoSelecionado(cao) {
	const idCaoSelecionado = cao.attributes.id.value;
	const idDoCartaoCaoParaAbrir = "cartao-" + idCaoSelecionado;
	const cartaoCaoParaAbrir = document.getElementById(idDoCartaoCaoParaAbrir);
	cartaoCaoParaAbrir.classList.add("aberto");
	return idCaoSelecionado;
}

function esconderCartaoCao() {
	const cartaoCaoAberto = document.querySelector(".aberto");
	cartaoCaoAberto.classList.remove("aberto");
}