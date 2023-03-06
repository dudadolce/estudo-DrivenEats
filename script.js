const pratos = document.querySelectorAll('[data-category="prato"]')

const bebidas = document.querySelectorAll('[data-category="bebida"]')

const sobremesas = document.querySelectorAll('[data-category="sobremesa"]')

let estado = []

const botaoDeCompra = document.getElementById("botaoCompra")

const textoBotao = document.getElementById("textoBotao")

function marcar(e) {
    let elem = e.target.parentNode;
    if (!elem.classList.contains("caixa-comida")) {
        elem = e.target
    }
    elem.classList.add("marcado")

    const filhos = elem.children;

    for (let i = 0; i < filhos.length; i++) {
        const filho = filhos[i];
        if (filho.classList.contains("check")) {
            filho.classList.remove("none")
        }
    }

    const id = elem.id
    const categoria = elem.getAttribute("data-category")

    if (categoria === "prato") {
        estado = estado.filter(a => {
            return a.categoria !== "prato"
        })

        estado.push({
            id: id,
            categoria: categoria,
        })

        for (let i = 0; i < pratos.length; i++) {
            const prato = pratos[i]

            if (prato.id === id) continue

            prato.classList.remove("marcado")
            const filhos = prato.children
            for (let i = 0; i < filhos.length; i++) {
                const filho = filhos[i];
                if (filho.classList.contains("check")) {
                    filho.classList.add("none")
                }
            }
        }
    } else if (categoria === "bebida") {
        estado = estado.filter(a => {
            return a.categoria !== "bebida"
        })

        estado.push({
            id: id,
            categoria: categoria,
        })

        for (let i = 0; i < bebidas.length; i++) {
            const bebida = bebidas[i]

            if (bebida.id === id) continue

            bebida.classList.remove("marcado")
            const filhos = bebida.children
            for (let i = 0; i < filhos.length; i++) {
                const filho = filhos[i];
                if (filho.classList.contains("check")) {
                    filho.classList.add("none")
                }
            }
        }

    } else if (categoria === "sobremesa") {

        estado = estado.filter(a => {
            return a.categoria !== "sobremesa"
        })

        estado.push({
            id: id,
            categoria: categoria,
        })

        for (let i = 0; i < sobremesas.length; i++) {
            const sobremesa = sobremesas[i]

            if (sobremesa.id === id) continue


            sobremesa.classList.remove("marcado")
            const filhos = sobremesa.children
            for (let i = 0; i < filhos.length; i++) {
                const filho = filhos[i];
                if (filho.classList.contains("check")) {
                    filho.classList.add("none")
                }
            }
        }
    }
    if (estado.length === 3) {
        botaoDeCompra.classList.remove("botao")
        botaoDeCompra.classList.add("botao-verde")
        textoBotao.innerHTML = "Fechar Pedido"
    }

}

function finalizarCompra(botao) {

    console.log(botao);
}
