let listaDeEstudantes = [

{nomeDoEstudante:'Ana',
primeiraNota: 7,
segundaNota:8,
},

{nomeDoEstudante:'Maria',
primeiraNota: 4,
segundaNota: 8,
},

{nomeDoEstudante:'Joao',
primeiraNota: 7,
segundaNota: 2,
}

]


function calculaMedia(primeiraNota,segundaNota) {
    let media = (primeiraNota + segundaNota) / 2
    return media
}

for(let estudante of listaDeEstudantes) {
    mediaIndividual = calculaMedia(estudante.primeiraNota, estudante.segundaNota)
    let aprovadoOuNao = mediaIndividual < 7 ? 'Estude para a prova final' : 'Parabes pela aprovacao'

    alert(`A média de ${estudante.nomeDoEstudante} é ${mediaIndividual}.
${aprovadoOuNao}`)
}