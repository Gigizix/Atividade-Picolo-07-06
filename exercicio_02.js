class MeuErro extends Error {
    constructor(message){
      super(message);
      this.name = "Meu Erro";
    }
  }

class Estudante {
    constructor(nome, idade, turma) {
      this.nome = nome;
      this.idade = idade;
      this.turma = turma;
    }
  
    mostrarAtributos() {
      try {
        return this.atributos();
      } catch (error) {
        console.log(error) 
      }
    } 
  
    atributos() {
      if (this.nome != ""){
      return {
        nome: this.nome,
        idade: this.idade,
        turma: this.turma
      };
    } else {
        throw new MeuErro("Deu erro")
    }
  }
}
  const estudante = new Estudante("Giovana", 16, "");
  const atributos = estudante.mostrarAtributos();
  
  console.log(atributos)
  // Imprimindo os atributos
  // console.log(atributos.nome);   
  // console.log(atributos.idade);  
  // console.log(atributos.turma); 
  
  