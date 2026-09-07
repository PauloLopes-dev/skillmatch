const prompt = require("prompt-sync")();

// =====================================================
<<<<<<< HEAD
// 1. LISTA DE VAGAS (Usei IA para perfil de vagas)
=======
// 1. LISTA DE VAGAS
>>>>>>> 958a2f22ffa196a1d2c753d5b6edbf59912074c6
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
<<<<<<< HEAD
// 5. USO DE CALLBACK
// =====================================================

// Simulando uma API que busca as vagas em um servidor

function buscarVagas(simula_api) {
  console.log("\nBuscando vagas disponíveis...");

  setTimeout(() => {
    simula_api(null, vagasDisponiveis);
=======
// 5. CALLBACK
// =====================================================

// Simulando uma consulta a uma API

function consultarVagas(simulaApi) {
  console.log("\nConsultando vagas disponíveis...");

  setTimeout(() => {
    simulaApi(null, vagasDisponiveis);
>>>>>>> 958a2f22ffa196a1d2c753d5b6edbf59912074c6
  }, 1500);
}

// =====================================================
<<<<<<< HEAD
// 6. USO DE PROMISE
// =====================================================

function buscarVagasAsync() {
  return new Promise((resolve, reject) => {
    buscarVagas((erro, vagas) => {
=======
// 6. PROMISE
// =====================================================

// Transformamos o callback em Promise

function consultarVagasAsync() {
  return new Promise((resolve, reject) => {
    consultarVagas((erro, vagas) => {
>>>>>>> 958a2f22ffa196a1d2c753d5b6edbf59912074c6
      if (erro) {
        reject(erro);
      } else {
        resolve(vagas);
      }
    });
  });
}

// =====================================================
<<<<<<< HEAD
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
=======
// 7. CALCULAR COMPATIBILIDADE
// =====================================================

function calcularCompatibilidade(candidato, vaga) {
  // Normaliza as habilidades da vaga

  const habilidadesVaga = vaga.habilidades.map((habilidade) =>
    habilidade.toLowerCase(),
  );

  // Encontra as habilidades que o candidato possui
>>>>>>> 958a2f22ffa196a1d2c753d5b6edbf59912074c6

  const habilidadesEncontradas = habilidadesVaga.filter((habilidadeVaga) =>
    candidato.habilidades.includes(habilidadeVaga),
  );

<<<<<<< HEAD
  // ---------------------------------------------
  // Habilidades que faltam uso de filter
  // ---------------------------------------------
=======
  // Encontra as habilidades que faltam
>>>>>>> 958a2f22ffa196a1d2c753d5b6edbf59912074c6

  const habilidadesFaltantes = habilidadesVaga.filter(
    (habilidadeVaga) => !candidato.habilidades.includes(habilidadeVaga),
  );

<<<<<<< HEAD
  // ---------------------------------------------
  // Percentual de habilidades
  // ---------------------------------------------
=======
  // Calcula percentual das habilidades
>>>>>>> 958a2f22ffa196a1d2c753d5b6edbf59912074c6

  const percentualHabilidades =
    (habilidadesEncontradas.length / habilidadesVaga.length) * 100;

<<<<<<< HEAD
  // ---------------------------------------------
  // Percentual de experiência
  // ---------------------------------------------
=======
  // Calcula compatibilidade de experiência
>>>>>>> 958a2f22ffa196a1d2c753d5b6edbf59912074c6

  let percentualExperiencia;

  if (vaga.tempoExperiencia === 0) {
    percentualExperiencia = 100;
  } else {
    percentualExperiencia =
      (candidato.tempoExperiencia / vaga.tempoExperiencia) * 100;

<<<<<<< HEAD
    // Não deixa passar de 100%

=======
>>>>>>> 958a2f22ffa196a1d2c753d5b6edbf59912074c6
    if (percentualExperiencia > 100) {
      percentualExperiencia = 100;
    }
  }
<<<<<<< HEAD

  // ---------------------------------------------
  // COMPATIBILIDADE FINAL
  // ---------------------------------------------
  //
  // Habilidades = 70%
  // Experiência = 30%
  //
=======
  // =================================================
  // COMPATIBILIDADE FINAL
  //
  // 70% habilidades
  // 30% experiência
  // =================================================
>>>>>>> 958a2f22ffa196a1d2c753d5b6edbf59912074c6

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
<<<<<<< HEAD
// 8. CLASSIFICAÇÃO DE COMPATIBILIDADE
=======
// 8. CLASSIFICAR COMPATIBILIDADE
>>>>>>> 958a2f22ffa196a1d2c753d5b6edbf59912074c6
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
<<<<<<< HEAD
// 9. ANALISAR TODAS AS VAGAS uso do map
=======
// 9. ANALISAR TODAS AS VAGAS
>>>>>>> 958a2f22ffa196a1d2c753d5b6edbf59912074c6
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
<<<<<<< HEAD
// 10. ENCONTRAR A MELHOR VAGA USO DE REDUCE
=======
// 10. ENCONTRAR A MELHOR VAGA
>>>>>>> 958a2f22ffa196a1d2c753d5b6edbf59912074c6
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
<<<<<<< HEAD
// 11. USO DE CLOSURE
// =====================================================

=======
// 11. CLOSURE
// =====================================================

// A função guarda dentro dela
// as habilidades que faltam.

>>>>>>> 958a2f22ffa196a1d2c753d5b6edbf59912074c6
function criarRecomendador(habilidadesFaltantes) {
  return function () {
    return habilidadesFaltantes.map((habilidade, indice) => {
      return `${indice + 1}. Estudar ${habilidade}`;
    });
  };
}

// =====================================================
<<<<<<< HEAD
// 12. GERAR RECOMENDAÇÃO DE ESTUDO VIA REDUCE
// =====================================================

// ---------------------------------------------
// Conta quantas vezes cada habilidade consultei o
// MDN WEB Docs para descobrir este metodo (flatmap)
// unica coisa que não esta no material das aulas
// ---------------------------------------------

function gerarRecomendacao(resultados) {
=======
// 12. RECOMENDAÇÃO DE ESTUDO
// =====================================================

function gerarRecomendacao(resultados) {
  // Junta todas as habilidades faltantes

>>>>>>> 958a2f22ffa196a1d2c753d5b6edbf59912074c6
  const todasHabilidades = resultados.flatMap(
    (resultado) => resultado.habilidadesFaltantes,
  );

<<<<<<< HEAD
  // ---------------------------------------------
  // Conta quantas vezes cada habilidade
  // aparece
  // ---------------------------------------------
=======
  // Conta quantas vezes cada habilidade aparece
>>>>>>> 958a2f22ffa196a1d2c753d5b6edbf59912074c6

  const frequencia = todasHabilidades.reduce((contador, habilidade) => {
    if (contador[habilidade]) {
      contador[habilidade]++;
    } else {
      contador[habilidade] = 1;
    }

    return contador;
  }, {});

<<<<<<< HEAD
  // ---------------------------------------------
  // Ordena as habilidades
  // mais importantes (usei ajuda da IA) para fazer esta parte.
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
=======
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
>>>>>>> 958a2f22ffa196a1d2c753d5b6edbf59912074c6
