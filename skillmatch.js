const prompt = require("prompt-sync")();

// =====================================================
// 1. LISTA DE VAGAS
// =====================================================

const vagasDisponiveis = [
  // -------------------------
  // FRONT END
  // -------------------------

  {
    nome: "Front End Jr",
    area: "Front End",
    habilidades: ["html", "css", "javascript", "react"],
    tempoExperiencia: 1,
  },

  {
    nome: "Front End Pleno",
    area: "Front End",
    habilidades: [
      "html",
      "css",
      "javascript",
      "typescript",
      "react",
      "ui",
      "ux",
    ],
    tempoExperiencia: 3,
  },

  // -------------------------
  // BACK END
  // -------------------------

  {
    nome: "Back End Jr",
    area: "Back End",
    habilidades: ["javascript", "node.js", "express", "mysql"],
    tempoExperiencia: 1,
  },

  {
    nome: "Back End Pleno",
    area: "Back End",
    habilidades: ["javascript", "node.js", "express", "mysql", "docker", "api"],
    tempoExperiencia: 3,
  },

  // -------------------------
  // FULL STACK
  // -------------------------

  {
    nome: "Full Stack Jr",
    area: "Full Stack",
    habilidades: ["html", "css", "javascript", "node.js", "mysql"],
    tempoExperiencia: 1,
  },

  {
    nome: "Full Stack Pleno",
    area: "Full Stack",
    habilidades: [
      "html",
      "css",
      "javascript",
      "react",
      "node.js",
      "express",
      "mysql",
      "docker",
    ],
    tempoExperiencia: 3,
  },
];

// =====================================================
// 2. CLASSE CANDIDATO
// =====================================================

class Candidato {
  constructor(nome, habilidades, tempoExperiencia) {
    this.nome = nome;

    this.habilidades = habilidades;

    this.tempoExperiencia = tempoExperiencia;
  }
}

// =====================================================
// 3. USO DE HERANÇA
// =====================================================

// Classe especiafica que herda de Candidato

class CandidatoTecnologia extends Candidato {
  constructor(nome, habilidades, tempoExperiencia) {
    super(nome, habilidades, tempoExperiencia);

    this.tipoPerfil = "Tecnologia";
  }
}

// =====================================================
// 4. CRIAR PERFIL DO CANDIDATO
// =====================================================

function criarPerfil() {
  console.log("\n=================================");
  console.log("       CRIAR PERFIL");
  console.log("=================================\n");

  const nome = prompt("Nome do candidato: ");

  const habilidades = prompt("Digite suas habilidades separadas por vírgula: ")
    .split(",")

    // Remove espaços

    .map((habilidade) => habilidade.trim().toLowerCase())

    // Remove valores vazios

    .filter((habilidade) => habilidade !== "");

  const tempoExperiencia = Number(prompt("Anos de experiência: "));

  return new CandidatoTecnologia(nome, habilidades, tempoExperiencia);
}
