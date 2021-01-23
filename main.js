const { exit } = require("process");

function showdomilhao() {
  console.clear();
  console.log(`Show do Milhão`);
  console.log("---------------\n[ 1 ] - Jogar\n[ 2 ] - Sobre\n[ 3 ] - Sair\n");

  const readline = require("readline");

  const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  entrada.question("Escolha uma opção: ", (menu_opcao) => {
    switch (menu_opcao) {
      case "1":
        jogo();
        break;
      case "2":
        console.log(
          "Desenvolvido por Floriano Peixoto Entertainment, 2021"
        );
        console.log(`
        -__-
        (oo) 
  /------\/ 
 / |    ||   
*  /\---/\ 
   ~~   ~~   
..."CAVAAAALO"...

        `);
        entrada.question(
          "\nPressione qualquer tecla para continuar...",
          (voltar_menu) => {
            entrada.close();
            showdomilhao();
          }
        );
        break;
      case "3":
        console.log("Saindo...");
        exit();
      default:
        console.log("Escolha uma das opções acima...");
        entrada.question(
          "\nPressione qualquer tecla para continuar...",
          (voltar_menu) => {
            entrada.close();
            showdomilhao();
          }
        );
    }
  });

  function jogo() {
    console.clear();
    console.log("\nComeçando os trabalhos...\n");
    console.log(
      "Silvão: Muito bem, senhores telespectadores, nós estamos começando o tão comentado, o tão propagado, Show do Milhão!\n"
    );
    entrada.question("Silvão: Caro participante, qual o seu nome? ", (nome) => {
      console.log("\nSilvão: Seja bem vindo,", nome, "!");
      pergunta1(nome);
    });

    function pergunta1(nome_user) {
      console.log("\nSilvão: Vamos para a primeira pergunta, valendo R$ 1000:");
      console.log(
        "Quem reprovava os calouros no seu programa tocando uma buzina?\n"
      );
      console.log("[1] - Raul Gil");
      console.log("[2] - Bolinha");
      console.log("[3] - Flavio Cavalcanti");
      console.log("[4] - Chacrinha\n");
      entrada.question("Sua resposta: ", (resposta1) => {
        console.log("Você: Opção número", resposta1, ", Silvio\n");

        switch (resposta1) {
          case "1":
            console.log("Silvão: Opção nº 1, Raul Gil");
            console.log("Silvão: Você está certo disso? (Responda S ou N)");
            entrada.question("Você:", (resp1_errada1) => {
              if (resp1_errada1 == "S" || resp1_errada1 == "s") {
                resp1_errada();
              } else {
                pergunta1(nome_user);
              }
            });
            break;

          case "2":
            console.log("Silvão: Opção nº 2, Bolinha");
            console.log("Silvão: Você está certo disso? (Responda S ou N)");
            entrada.question("Você:", (resp1_errada1) => {
              if (resp1_errada1 == "S" || resp1_errada1 == "s") {
                resp1_errada();
              } else {
                pergunta1(nome_user);
              }
            });
            break;

          case "3":
            console.log("Silvão: Opção nº 3, Flavio Cavalcanti");
            console.log("Silvão: Você está certo disso? (Responda S ou N)");
            entrada.question("Você:", (resp1_errada1) => {
              if (resp1_errada1 == "S" || resp1_errada1 == "s") {
                resp1_errada();
              } else {
                pergunta1(nome_user);
              }
            });
            break;

          case "4":
            console.log("Silvão: Opção nº 4, Chacrinha");
            console.log("Silvão: Você está certo disso? (Responda S ou N)");
            entrada.question("Você:", (resp1_errada1) => {
              if (resp1_errada1 == "S" || resp1_errada1 == "s") {
                console.clear();
                console.log("Silvão: Certa resposta!");
                console.log("Platéia: (Palmas)");
                console.log(
                  "Silvão: Vamos para a segunda pergunta valendo R$ 2000\n"
                );
                pergunta2(nome_user);
              } else {
                pergunta1(nome_user);
              }
            });
            break;

          default:
            console.log(
              "Desenvolverdor: Ow, responda uma das opções, por favor?"
            );
            pergunta1(nome_user);
        }

        function resp1_errada() {
          console.log("Silvão: Que pena, você errou!");
          console.log(
            "Silvão: A resposta correta é a opção quatro, Chacrinha!\n"
          );
          voltar_menu();
        }
      });
    }

    function pergunta2(nome_user) {
      console.log("Quem é o pai da Sasha, a filha da Xuxa?");
      console.log("[1] - Luciano Cantor");
      console.log("[2] - Luciano Huck");
      console.log("[3] - Luciano Szafir");
      console.log("[4] - Luciano do Valle\n");
      entrada.question("Sua resposta: ", (resposta1) => {
        console.log("Você: Opção número", resposta1, ", Silvio\n");

        switch (resposta1) {
          case "1":
            console.log("Silvão: Opção nº 1, Luciano Cantor");
            console.log("Silvão: Você está certo disso? (Responda S ou N)");
            entrada.question("Você:", (resp1_errada1) => {
              if (resp1_errada1 == "S" || resp1_errada1 == "s") {
                resp2_errada();
              } else {
                pergunta2(nome_user);
              }
            });
            break;

          case "2":
            console.log("Silvão: Opção nº 2, Luciano Huck");
            console.log("Silvão: Você está certo disso? (Responda S ou N)");
            entrada.question("Você:", (resp1_errada1) => {
              if (resp1_errada1 == "S" || resp1_errada1 == "s") {
                resp2_errada();
              } else {
                pergunta2(nome_user);
              }
            });
            break;

          case "3":
            console.log("Silvão: Opção nº 3, Luciano Szafir");
            console.log("Silvão: Você está certo disso? (Responda S ou N)");
            entrada.question("Você:", (resp1_errada1) => {
              if (resp1_errada1 == "S" || resp1_errada1 == "s") {
                console.clear();
                console.log("Silvão: Certa resposta!");
                console.log("Platéia: (Palmas)");
                console.log(
                  "Silvão: Vamos para a terceira pergunta valendo R$ 3000"
                );
                pergunta3(nome_user);
              } else {
                pergunta2(nome_user);
              }
            });
            break;

          case "4":
            console.log("Silvão: Opção nº 4, Luciano do Valle");
            console.log("Silvão: Você está certo disso? (Responda S ou N)");
            entrada.question("Você:", (resp1_errada1) => {
              if (resp1_errada1 == "S" || resp1_errada1 == "s") {
                resp2_errada();
              } else {
                pergunta2(nome_user);
              }
            });
            break;

          default:
            console.log(
              "Desenvolverdor: Ow, responda uma das opções, por favor?"
            );
            pergunta2(nome_user);
        }

        function resp2_errada() {
          console.log("Silvão: Que pena, você errou!");
          console.log(
            "Silvão: A resposta correta é a opção três, Luciano Szafir!"
          );
          voltar_menu();
        }
      });
    }

    function pergunta3(nome_user) {
      console.log("Quem é a namorada do Mickey?");
      console.log("[1] - Margarida");
      console.log("[2] - Minnie");
      console.log("[3] - A pequena sereia");
      console.log("[4] - Olivia Palito\n");
      entrada.question("Sua resposta: ", (resposta1) => {
        console.log("Você: Opção número", resposta1, ", Silvio\n");

        switch (resposta1) {
          case "1":
            console.log("Silvão: Opção nº 1, Margarida");
            console.log("Silvão: Você está certo disso? (Responda S ou N)");
            entrada.question("Você:", (resp1_errada1) => {
              if (resp1_errada1 == "S" || resp1_errada1 == "s") {
                resp3_errada();
              } else {
                pergunta3(nome_user);
              }
            });
            break;

          case "2":
            console.log("Silvão: Opção nº 2, Minnie");
            console.log("Silvão: Você está certo disso? (Responda S ou N)");
            entrada.question("Você:", (resp1_errada1) => {
              if (resp1_errada1 == "S" || resp1_errada1 == "s") {
                console.clear();
                console.log("Silvão: Certa resposta!");
                console.log("Platéia: (Palmas)");
                console.log(
                  "Silvão: Vamos para a quarta pergunta valendo R$ 4000"
                );
                pergunta4(nome_user);
              } else {
                pergunta3(nome_user);
              }
            });
            break;

          case "3":
            console.log("Silvão: Opção nº 3, A pequena sereia");
            console.log("Silvão: Você está certo disso? (Responda S ou N)");
            entrada.question("Você:", (resp1_errada1) => {
              if (resp1_errada1 == "S" || resp1_errada1 == "s") {
                resp3_errada();
              } else {
                pergunta3(nome_user);
              }
            });
            break;

          case "4":
            console.log("Silvão: Opção nº 4, Olivia Palito");
            console.log("Silvão: Você está certo disso? (Responda S ou N)");
            entrada.question("Você:", (resp1_errada1) => {
              if (resp1_errada1 == "S" || resp1_errada1 == "s") {
                resp3_errada();
              } else {
                pergunta3(nome_user);
              }
            });
            break;

          default:
            console.log(
              "Desenvolverdor: Ow, responda uma das opções, por favor?"
            );
            pergunta3(nome_user);
        }

        function resp3_errada() {
          console.log("Silvão: Que pena, você errou!");
          console.log("Silvão: A resposta correta é a opção dois, Minnie!");
          voltar_menu();
        }
      });
    }

    function pergunta4(nome_user) {
      console.log("Quando é comemorado o dia da independência do Brasil?");
      console.log("[1] - 21 de Abril");
      console.log("[2] - 12 de Outubro");
      console.log("[3] - 7 de Setembro");
      console.log("[4] - 25 de Dezembro\n");
      entrada.question("Sua resposta: ", (resposta1) => {
        console.log("Você: Opção número", resposta1, ", Silvio\n");

        switch (resposta1) {
          case "1":
            console.log("Silvão: Opção nº 1, 21 de Abril");
            console.log("Silvão: Você está certo disso? (Responda S ou N)");
            entrada.question("Você:", (resp1_errada1) => {
              if (resp1_errada1 == "S" || resp1_errada1 == "s") {
                resp4_errada();
              } else {
                pergunta4(nome_user);
              }
            });
            break;

          case "2":
            console.log("Silvão: Opção nº 2, 12 de Outubro");
            console.log("Silvão: Você está certo disso? (Responda S ou N)");
            entrada.question("Você:", (resp1_errada1) => {
              if (resp1_errada1 == "S" || resp1_errada1 == "s") {
                resp4_errada();
              } else {
                pergunta4(nome_user);
              }
            });
            break;

          case "3":
            console.log("Silvão: Opção nº 3, 7 de Setembro");
            console.log("Silvão: Você está certo disso? (Responda S ou N)");
            entrada.question("Você:", (resp1_errada1) => {
              if (resp1_errada1 == "S" || resp1_errada1 == "s") {
                console.clear();
                console.log("Silvão: Certa resposta!");
                console.log("Platéia: (Palmas)");
                console.log(
                  "Silvão: Vamos para a quinta pergunta valendo R$ 5000"
                );
                pergunta5(nome_user);
              } else {
                pergunta4(nome_user);
              }
            });
            break;

          case "4":
            console.log("Silvão: Opção nº 4, 25 de Dezembro");
            console.log("Silvão: Você está certo disso? (Responda S ou N)");
            entrada.question("Você:", (resp1_errada1) => {
              if (resp1_errada1 == "S" || resp1_errada1 == "s") {
                resp4_errada();
              } else {
                pergunta4(nome_user);
              }
            });
            break;

          default:
            console.log(
              "Desenvolverdor: Ow, responda uma das opções, por favor?"
            );
            pergunta4(nome_user);
        }

        function resp4_errada() {
          console.log("Silvão: Que pena, você errou!");
          console.log(
            "Silvão: A resposta correta é a opção três, 7 de Setembro!"
          );
          voltar_menu();
        }
      });
    }

    function pergunta5(nome_user) {
      console.log("Quantos jogadores um jogo de Volei reúne na quadra?");
      console.log("[1] - Seis");
      console.log("[2] - Oito");
      console.log("[3] - Doze");
      console.log("[4] - Dez\n");
      entrada.question("Sua resposta: ", (resposta1) => {
        console.log("Você: Opção número", resposta1, ", Silvio\n");

        switch (resposta1) {
          case "1":
            console.log("Silvão: Opção nº 1, Seis");
            console.log("Silvão: Você está certo disso? (Responda S ou N)");
            entrada.question("Você:", (resp1_errada1) => {
              if (resp1_errada1 == "S" || resp1_errada1 == "s") {
                resp5_errada();
              } else {
                pergunta5(nome_user);
              }
            });
            break;

          case "2":
            console.log("Silvão: Opção nº 2, Oito");
            console.log("Silvão: Você está certo disso? (Responda S ou N)");
            entrada.question("Você:", (resp1_errada1) => {
              if (resp1_errada1 == "S" || resp1_errada1 == "s") {
                resp5_errada();
              } else {
                pergunta5(nome_user);
              }
            });
            break;

          case "3":
            console.log("Silvão: Opção nº 3, Doze");
            console.log("Silvão: Você está certo disso? (Responda S ou N)");
            entrada.question("Você:", (resp1_errada1) => {
              if (resp1_errada1 == "S" || resp1_errada1 == "s") {
                console.clear();
                console.log("Silvão: Certa resposta!");
                console.log("Platéia: (Palmas)");
                console.log(
                  "Silvão: Parabéns, você ganhou CINCO MIL REAIS,",
                  nome_user
                );
                console.log(
                  "Agora você pode comprar um carne do Baú da Felicidade!!!"
                );
                voltar_menu();
                //   pergunta5(nome_user);
              } else {
                pergunta5(nome_user);
              }
            });
            break;

          case "4":
            console.log("Silvão: Opção nº 4, Dez");
            console.log("Silvão: Você está certo disso? (Responda S ou N)");
            entrada.question("Você:", (resp1_errada1) => {
              if (resp1_errada1 == "S" || resp1_errada1 == "s") {
                resp5_errada();
              } else {
                pergunta5(nome_user);
              }
            });
            break;

          default:
            console.log(
              "Desenvolverdor: Ow, responda uma das opções, por favor?"
            );
            pergunta5(nome_user);
        }

        function resp5_errada() {
          console.log("Silvão: Que pena, você errou!");
          console.log("Silvão: A resposta correta é a opção três, Doze");
          voltar_menu();
        }
      });
    }

    function voltar_menu() {
      entrada.question(
        "\nPressione qualquer tecla para continuar...",
        (voltar_menu) => {
          entrada.close();
          showdomilhao();
        }
      );
    }
  }
}

showdomilhao();

// entrada.close();
