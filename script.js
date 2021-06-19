function configMarcar(button, checked) {
    const divNumeros = button.parentElement
    const inputs = divNumeros.querySelectorAll('input')
    inputs.forEach(input => input.checked = checked)
}

var ui = {
    nome: document.getElementById('nome'),
    tempo: {
        t30: document.getElementById('tempo30'),
        t60: document.getElementById('tempo60'),
        t120: document.getElementById('tempo120'),
    },
    tipos: {
        multiplicacao: {
            ativo: document.getElementById('multiplicacao'),
            numeros: [
                document.getElementById('m2'),
                document.getElementById('m3'),
                document.getElementById('m4'),
                document.getElementById('m5'),
                document.getElementById('m6'),
                document.getElementById('m7'),
                document.getElementById('m8'),
                document.getElementById('m9'),
            ],
        },
        divisao: {
            ativo: document.getElementById('divisao'),
            numeros: [
                document.getElementById('d2'),
                document.getElementById('d3'),
                document.getElementById('d4'),
                document.getElementById('d5'),
                document.getElementById('d6'),
                document.getElementById('d7'),
                document.getElementById('d8'),
                document.getElementById('d9'),
            ],
        },
    },
    btnNovoJogo: document.getElementById('novoJogo'),
    divConfig: document.getElementById('config'),
    divGame: document.getElementById('game'),
}

var config = {
    nome: '',
    tempo: 30,
    modo: {
        operacao: {
            multiplicacao: false,
            divisao: false,
        },
        valores: [
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
        ],
    },
}

function iniciarJogo() {
    config.nome = ui.nome.value
    if (config.nome.length < 3) {
        alert('Entre com o nome do jogador')
        return
    }

    if (ui.tempo.t30.checked) {
        config.tempo = 30
    } else if (ui.tempo.t60.checked) {
        config.tempo = 60
    } else if (ui.tempo.t120.checked) {
        config.tempo = 120
    } else {
        alert('Entre com o tempo de jogo')
        return
    }

    if (ui.tipos.multiplicacao.ativo.checked) {
        config.modo.operacao = {
            multiplicacao: true
        }
    } else if (ui.tipos.divisao.ativo.checked) {
        config.modo.operacao = {
            divisao: true
        }
    } else {
        alert('Entre com um tipo de operação')
        return
    }

    var numeros
    if (config.modo.operacao.multiplicacao) {
        numeros = ui.tipos.multiplicacao.numeros
    } else if (config.modo.operacao.divisao) {
        numeros = ui.tipos.divisao.numeros
    } else {
        alert('Entre com algum numero')
        return
    }

    config.modo.valores = []
    numeros.forEach((input, index) => {
        if (input.checked) {
            config.modo.valores.push(index + 2)
        }
    })
    if (config.modo.valores.length === 0) {
        alert('Entre com algum numero')
        return
    }

    console.log(config)
}
