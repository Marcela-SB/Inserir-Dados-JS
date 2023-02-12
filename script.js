// FUNÇÃO  AUTOMÁTICA
      var nome, turma, confirmacao;

      nome= prompt("Digite seu nome:");
      turma= prompt("Digite sua turma:");

      alert("Obrigada pela colaboração!");

      document.write("<p style='font-weight: bolder; font-family: arial; color: #000099;'>As variáveis utilizadas foram:</p>");
      document.write("<p style='font-family: arial;'>- 'nome' para o valor '"+nome+"'</p>");
      document.write("<p style='font-family: arial;'>- 'turma' para o valor '"+turma+"'</p>");

// FUNÇÃO BOTÃO	
  function erro(){
    confirmacao= confirm("Gostaria de modificar os dados inseridos?");
    if (confirmacao) {
      alert("INSIRA SEUS DADOS NOVAMENTE");
      nome= prompt("Digite seu nome:");
      turma= prompt("Digite sua turma:");

      alert("Obrigada pela colaboração!");

      document.write("<p style='font-weight: bolder; font-family: arial; color: #000099;'>As variáveis utilizadas foram:</p>");
      document.write("<p style='font-family: arial;'>- 'nome' para "+nome+"</p>");
      document.write("<p style='font-family: arial;'>- 'turma' para "+turma+"</p>");
    }
    else {
      alert("Obrigada pela confirmação de segurança!");
    }
  }
