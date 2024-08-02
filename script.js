const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Voce concorda com o aborto?",
        alternativas: [
            "Não concordo",
            "Concordo"
        ]
    },
    {
        enunciado: "Voce denunciaria se alguem fizesse?",
        alternativas: [
            "Sim, denunciaria",
            "Veria a situação antes"
        ]
    },
    {
        enunciado: "Voce acha que deve legalizar o aborto para alguns casos?",
        alternativas: [
            "Não deve legalizar",
            "Deve sim legalizar, para todas as situasções"
        ]
    },
    {
        enunciado: "Voce acha que o aborto é mal vista pela sociedade?",
        alternativas: [
            "Sim é mal vista",
            "Ninguem liga"
        ]
    },
    {
        enunciado: "Se voce é mulher/ou se fosse voce abortaria em uma situação dificil?",
        alternativas: [
            "Não abortaria",
            "Só em uma situação mais seria"
        ]
    }
];