/* Estrutura da class */
class PessoaJuridica {
  constructor(codigo, cnpj, inscricaoEstadual, codigoPessoa) {
    this.codigo = codigo;
    this.cnpj = cnpj;
    this.inscricaoEstadual = inscricaoEstadual;
    this.codigoPessoa = codigoPessoa;
    this.campos = ["cnpj", "inscricaoEstadual", "codigoPessoa"];
  }

  /* Funções sets */
  setCodigo(codigo) {
    this.codigo = codigo;
  }
  setCnpj(cnpj) {
    this.cnpj = cnpj;
  }
  setInscricaoEstadual(inscricaoEstadual) {
    this.inscricaoEstadual = inscricaoEstadual;
  }
  setCodigoPessoa(codigoPessoa) {
    this.codigoPessoa = codigoPessoa;
  }

  /* Funções gets */
  getCodigo() {
    return this.codigo;
  }
  getCnpj() {
    return this.cnpj;
  }
  getInscricaoEstadual() {
    return this.inscricaoEstadual;
  }
  getCodigoPessoa() {
    return this.codigoPessoa;
  }
  getCampos() {
    return this.campos;
  }
}

/* Exportação */
module.exports = { PessoaJuridica };
