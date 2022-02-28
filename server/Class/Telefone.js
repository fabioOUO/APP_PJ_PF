/* Estrutura da class */
class Telefone {
  constructor(codigo, telefone, codigoPessoa) {
    this.codigo = codigo;
    this.telefone = telefone;
    this.codigoPessoa = codigoPessoa;
    this.campos = ["telefone", "codigoPessoa"];
  }

  /* Funções sets */
  setCodigo(codigo) {
    this.codigo = codigo;
  }
  setTelefone(telefone) {
    this.telefone = telefone;
  }
  setCodigoPessoa(codigoPessoa) {
    this.codigoPessoa = codigoPessoa;
  }

  /* Funções gets */
  getCodigo() {
    return this.codigo;
  }
  getTelefone() {
    return this.telefone;
  }
  getCodigoPessoa() {
    return this.codigoPessoa;
  }
  getCampos() {
    return this.campos;
  }
}

/* Exportação */
module.exports = { Telefone };
