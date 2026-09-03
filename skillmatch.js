const prompt = require("prompt-sync")();

function cadastrarCandidato() {
  const candidato = {
    nome: prompt("Nome do candidato:"),

    areaInteresse: prompt("Área de interesse:"),

    habilidades: prompt("Digite suas habilidades separadas por vírgula:")
      .split(",")
      .map((habilidade) => habilidade.trim()),

    tempoExperiencia: Number(prompt("Tempo de experiência em anos:")),
  };

  return candidato;
}

// ------------------------------------------
// VAGAS
// ------------------------------------------

const vagas = [
  {
    cargo: "Desenvolvedor Front-end Júnior",

    area: "Front-end",

    habilidades: [
      { nome: "HTML", peso: 10 },
      { nome: "CSS", peso: 10 },
      { nome: "JavaScript", peso: 20 },
      { nome: "Git", peso: 5 },
    ],

    experienciaMinima: 0,
  },

  {
    cargo: "Desenvolvedor React Júnior",

    area: "Front-end",

    habilidades: [
      { nome: "HTML", peso: 8 },
      { nome: "CSS", peso: 8 },
      { nome: "JavaScript", peso: 20 },
      { nome: "React", peso: 20 },
      { nome: "Git", peso: 4 },
    ],

    experienciaMinima: 1,
  },

  {
    cargo: "Desenvolvedor Front-end Pleno",

    area: "Front-end",

    habilidades: [
      { nome: "HTML", peso: 5 },
      { nome: "CSS", peso: 5 },
      { nome: "JavaScript", peso: 15 },
      { nome: "React", peso: 15 },
      { nome: "TypeScript", peso: 10 },
      { nome: "Git", peso: 5 },
      { nome: "Testes", peso: 5 },
    ],

    experienciaMinima: 2,
  },
];
