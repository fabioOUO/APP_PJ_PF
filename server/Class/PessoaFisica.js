/* Estrutura da class */
class PessoaFisica {
  constructor(codigo, cpf, identidade, codigoPessoa) {
    this.codigo = codigo;
    this.cpf = cpf;
    this.identidade = identidade;
    this.codigoPessoa = codigoPessoa;
    this.campos = ["cpf", "identidade", "codigoPessoa"];
  }

  /* Funções sets */
  setCodigo(codigo) {
    this.codigo = codigo;
  }
  setCpf(cpf) {
    this.cpf = cpf;
  }
  setIdentidade(identidade) {
    this.identidade = identidade;
  }
  setCodigoPessoa(codigoPessoa) {
    this.codigoPessoa = codigoPessoa;
  }

  /* Funções gets */
  getCodigo() {
    return this.codigo;
  }
  getCpf() {
    return this.cpf;
  }
  getIdentidade() {
    return this.identidade;
  }
  getCodigoPessoa() {
    return this.codigoPessoa;
  }
  getCampos() {
    return this.campos;
  }
}

/* Exportação */
module.exports = { PessoaFisica };
