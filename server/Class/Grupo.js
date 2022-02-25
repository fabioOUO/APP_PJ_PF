/* Estrutura da class */
class Grupo {
  constructor(codigo, descricao) {
    this.codigo = codigo;
    this.descricao = descricao;
    this.campos = ["descricao"];
  }

  /* Funções sets */
  setCodigo(codigo) {
    this.codigo = codigo;
  }
  setDescricao(descricao) {
    this.descricao = descricao;
  }

  /* Funções gets */
  getCodigo() {
    return this.codigo;
  }
  getDescricao() {
    return this.descricao;
  }
  getCampos() {
    return this.campos;
  }
}

/* Exportação */
module.exports = { Grupo };
