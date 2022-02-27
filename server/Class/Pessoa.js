/* Estrutura da class */
class Pessoa {
  constructor(codigo, nome, tipo, codigoGrupo) {
    this.codigo = codigo;
    this.nome = nome;
    this.tipo = tipo;
    this.codigoGrupo = codigoGrupo;
    this.campos = ["nome", "tipo", "codigoGrupo"];
  }

  /* Funções sets */
  setCodigo(codigo) {
    this.codigo = codigo;
  }
  setNome(nome) {
    this.nome = nome;
  }
  setTipo(tipo) {
    this.tipo = tipo;
  }
  setCodigoGrupo(codigoGrupo) {
    this.codigoGrupo = codigoGrupo;
  }

  /* Funções gets */
  getCodigo() {
    return this.codigo;
  }
  getNome() {
    return this.nome;
  }
  getTipo() {
    return this.tipo;
  }
  getCodigoGrupo() {
    return this.codigoGrupo;
  }
  getCampos() {
    return this.campos;
  }
}

/* Exportação */
module.exports = { Pessoa };
