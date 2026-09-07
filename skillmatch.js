const prompt = require("promptSync")();

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
// 5. USO DE CALLBACK
// =====================================================

// Simulando uma API que busca as vagas em um servidor

function buscarVagas(simula_api) {
  console.log("\nBuscando vagas disponíveis...");

  setTimeout(() => {
    simula_api(null, vagasDisponiveis);
  }, 1500);
}

// =====================================================
// 6. USO DE PROMISE
// =====================================================

function buscarVagasAsync() {
  return new Promise((resolve, reject) => {
    buscarVagas((erro, vagas) => {
      if (erro) {
        reject(erro);
      } else {
        resolve(vagas);
      }
    });
  });
}

// =====================================================
// 7. DETERMINA PERCENTUAL DE COMPATIBILIDADE
// =====================================================

function calcularCompatibilidade(candidato, vaga) {
  // ---------------------------------------------
  // Normalizar habilidades da vaga uso de map
  // ---------------------------------------------

  const habilidadesVaga = vaga.habilidades.map((habilidade) =>
    habilidade.trim().toLowerCase(),
  );

  // ---------------------------------------------
  // Habilidades que o candidato possui de filter
  // ---------------------------------------------

  const habilidadesEncontradas = habilidadesVaga.filter((habilidadeVaga) =>
    candidato.habilidades.includes(habilidadeVaga),
  );

  // ---------------------------------------------
  // Habilidades que faltam uso de filter
  // ---------------------------------------------

  const habilidadesFaltantes = habilidadesVaga.filter(
    (habilidadeVaga) => !candidato.habilidades.includes(habilidadeVaga),
  );

  // ---------------------------------------------
  // Percentual de habilidades
  // ---------------------------------------------

  const percentualHabilidades =
    (habilidadesEncontradas.length / habilidadesVaga.length) * 100;

  // ---------------------------------------------
  // Percentual de experiência
  // ---------------------------------------------

  let percentualExperiencia;

  if (vaga.tempoExperiencia === 0) {
    percentualExperiencia = 100;
  } else {
    percentualExperiencia =
      (candidato.tempoExperiencia / vaga.tempoExperiencia) * 100;

    // Não deixa passar de 100%

    if (percentualExperiencia > 100) {
      percentualExperiencia = 100;
    }
  }

  // ---------------------------------------------
  // COMPATIBILIDADE FINAL
  // ---------------------------------------------
  //
  // Habilidades = 70%
  // Experiência = 30%
  //

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
// 8. CLASSIFICAÇÃO DE COMPATIBILIDADE
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
// 9. ANALISAR TODAS AS VAGAS uso do map
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
// 10. ENCONTRAR A MELHOR VAGA USO DE REDUCE
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
// 11. USO DE CLOSURE
// =====================================================

function criarRecomendador(habilidadesFaltantes) {
  return function () {
    return habilidadesFaltantes.map((habilidade, indice) => {
      return `${indice + 1}. Estudar ${habilidade}`;
    });
  };
}

// =====================================================
// 12. GERAR RECOMENDAÇÃO DE ESTUDO VIA REDUCE
// =====================================================

function gerarRecomendacao(resultados) {
  const todasHabilidades = resultados.flatMap(
    (resultado) => resultado.habilidadesFaltantes,
  );

  // ---------------------------------------------
  // Conta quantas vezes cada habilidade
  // aparece
  // ---------------------------------------------

  const frequencia = todasHabilidades.reduce((contador, habilidade) => {
    if (contador[habilidade]) {
      contador[habilidade]++;
    } else {
      contador[habilidade] = 1;
    }

    return contador;
  }, {});

  // ---------------------------------------------
  // Ordena as habilidades
  // mais importantes
  // ---------------------------------------------

  const habilidadesOrdenadas = Object.entries(frequencia)

    .sort((a, b) => b[1] - a[1])

    .map((item) => item[0]);

  // ---------------------------------------------
  // CRIA CLOSURE
  // ---------------------------------------------

  const recomendador = criarRecomendador(habilidadesOrdenadas);

  return recomendador();
}

// =====================================================
// 13. EXIBIR RESULTADOS
// =====================================================

function exibirResultados(candidato, resultados, melhorVaga) {
  console.log("\n");
  console.log("==========================================");
  console.log("           RESULTADO SKILLMATCH");
  console.log("==========================================");

  console.log(`Candidato: ${candidato.nome}`);

  console.log(`Experiência: ${candidato.tempoExperiencia} anos`);

  console.log(`Habilidades: ${candidato.habilidades.join(", ")}`);

  console.log("\n");
  console.log("==========================================");
  console.log("     COMPATIBILIDADE COM TODAS AS VAGAS");
  console.log("==========================================\n");

  resultados.forEach((resultado) => {
    console.log(`${resultado.vaga} - ${resultado.area}`);

    console.log(`Compatibilidade: ${resultado.percentual}%`);

    console.log(`Classificação: ${resultado.nivel}`);

    console.log(
      `Habilidades encontradas: ${
        resultado.habilidadesEncontradas.join(", ") || "Nenhuma"
      }`,
    );

    console.log(
      `Habilidades faltantes: ${
        resultado.habilidadesFaltantes.join(", ") || "Nenhuma"
      }`,
    );

    console.log(`Experiência exigida: ${resultado.experienciaExigida} anos`);

    console.log(`Sua experiência: ${resultado.experienciaCandidato} anos`);

    console.log("------------------------------------------");
  });

  // =================================================
  // MELHOR VAGA
  // =================================================

  console.log("\n");
  console.log("==========================================");
  console.log("             MELHOR VAGA");
  console.log("==========================================\n");

  console.log(`Vaga: ${melhorVaga.vaga}`);

  console.log(`Área: ${melhorVaga.area}`);

  console.log(`Compatibilidade: ${melhorVaga.percentual}%`);

  console.log(`Classificação: ${melhorVaga.nivel}`);

  // =================================================
  // RECOMENDAÇÃO
  // =================================================

  console.log("\n");
  console.log("==========================================");
  console.log("        RECOMENDAÇÃO DE ESTUDO");
  console.log("==========================================\n");

  const recomendacoes = gerarRecomendacao(resultados);

  if (recomendacoes.length === 0) {
    console.log("Você possui todas as habilidades necessárias!");
  } else {
    recomendacoes.forEach((recomendacao) => {
      console.log(recomendacao);
    });
  }
}

// =====================================================
// 14. USO DE ASYNC/AWAIT
// =====================================================

async function main() {
  try {
    // ---------------------------------------------
    // CRIA PERFIL
    // ---------------------------------------------

    const candidato = criarPerfil();

    // ---------------------------------------------
    // BUSCA VAGAS
    // ---------------------------------------------
    //
    // await espera a Promise terminar
    //

    const vagas = await buscarVagasAsync();

    // ---------------------------------------------
    // COMPARA COM TODAS AS VAGAS
    // ---------------------------------------------

    const resultados = analisarCandidato(candidato, vagas);

    // ---------------------------------------------
    // ENCONTRA A MELHOR
    // ---------------------------------------------

    const melhorVaga = encontrarMelhorVaga(resultados);

    // ---------------------------------------------
    // MOSTRA RESULTADO
    // ---------------------------------------------

    exibirResultados(candidato, resultados, melhorVaga);
  } catch (erro) {
    console.log("Erro:", erro.message);
  }
}

// =====================================================
// 15. EXECUTAR
// =====================================================

main();
