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

// =====================================================
// 5. CALLBACK
// =====================================================

// Simulando uma consulta a uma API

function consultarVagas(simulaApi) {
  console.log("\nConsultando vagas disponíveis...");

  setTimeout(() => {
    simulaApi(null, vagasDisponiveis);
  }, 1500);
}

// =====================================================
// 6. PROMISE
// =====================================================

// Transformamos o callback em Promise

function consultarVagasAsync() {
  return new Promise((resolve, reject) => {
    consultarVagas((erro, vagas) => {
      if (erro) {
        reject(erro);
      } else {
        resolve(vagas);
      }
    });
  });
}

// =====================================================
// 7. CALCULAR COMPATIBILIDADE
// =====================================================

function calcularCompatibilidade(candidato, vaga) {
  // Normaliza as habilidades da vaga

  const habilidadesVaga = vaga.habilidades.map((habilidade) =>
    habilidade.toLowerCase(),
  );

  // Encontra as habilidades que o candidato possui

  const habilidadesEncontradas = habilidadesVaga.filter((habilidadeVaga) =>
    candidato.habilidades.includes(habilidadeVaga),
  );

  // Encontra as habilidades que faltam

  const habilidadesFaltantes = habilidadesVaga.filter(
    (habilidadeVaga) => !candidato.habilidades.includes(habilidadeVaga),
  );

  // Calcula percentual das habilidades

  const percentualHabilidades =
    (habilidadesEncontradas.length / habilidadesVaga.length) * 100;

  // Calcula compatibilidade de experiência

  let percentualExperiencia;

  if (vaga.tempoExperiencia === 0) {
    percentualExperiencia = 100;
  } else {
    percentualExperiencia =
      (candidato.tempoExperiencia / vaga.tempoExperiencia) * 100;

    if (percentualExperiencia > 100) {
      percentualExperiencia = 100;
    }
  }
  // =================================================
  // COMPATIBILIDADE FINAL
  //
  // 70% habilidades
  // 30% experiência
  // =================================================

  const percentualFinal =
    percentualHabilidades * 0.7 + percentualExperiencia * 0.3;

  return {
    vaga: vaga.nome,

    area: vaga.area,

    percentual: Math.round(percentualFinal),

    habilidadesEncontradas,

    habilidadesFaltantes,

    experienciaExigida: vaga.tempoExperiencia,

    experienciaCandidato: candidato.tempoExperiencia,
  };
}

// =====================================================
// 8. CLASSIFICAR COMPATIBILIDADE
// =====================================================

function classificarCompatibilidade(percentual) {
  if (percentual >= 80) {
    return "Alta";
  }

  if (percentual >= 50) {
    return "Média";
  }

  return "Baixa";
}

// =====================================================
// 9. ANALISAR TODAS AS VAGAS
// =====================================================

function analisarCandidato(candidato, vagas) {
  const resultados = vagas.map((vaga) => {
    const resultado = calcularCompatibilidade(candidato, vaga);

    return {
      ...resultado,

      nivel: classificarCompatibilidade(resultado.percentual),
    };
  });

  return resultados;
}

// =====================================================
// 10. ENCONTRAR A MELHOR VAGA
// =====================================================

function encontrarMelhorVaga(resultados) {
  return resultados.reduce((melhor, atual) => {
    if (atual.percentual > melhor.percentual) {
      return atual;
    }

    return melhor;
  });
}

// =====================================================
// 11. CLOSURE
// =====================================================

// A função guarda dentro dela
// as habilidades que faltam.

function criarRecomendador(habilidadesFaltantes) {
  return function () {
    return habilidadesFaltantes.map((habilidade, indice) => {
      return `${indice + 1}. Estudar ${habilidade}`;
    });
  };
}

// =====================================================
// 12. RECOMENDAÇÃO DE ESTUDO
// =====================================================

function gerarRecomendacao(resultados) {
  // Junta todas as habilidades faltantes

  const todasHabilidades = resultados.flatMap(
    (resultado) => resultado.habilidadesFaltantes,
  );

  // Conta quantas vezes cada habilidade aparece

  const frequencia = todasHabilidades.reduce((contador, habilidade) => {
    if (contador[habilidade]) {
      contador[habilidade]++;
    } else {
      contador[habilidade] = 1;
    }

    return contador;
  }, {});

  // Organiza da mais importante
  // para a menos frequente

  const habilidadesOrdenadas = Object.entries(frequencia)
    .sort((a, b) => b[1] - a[1])
    .map((item) => item[0]);

  // Cria uma Closure

  const recomendador = criarRecomendador(habilidadesOrdenadas);
  //console.log(habilidadesOrdenadas);//

  return recomendador();
}
