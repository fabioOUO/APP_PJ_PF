/* Importação arquivo .env */
require("dotenv").config();

/* Importação */
/* Cors: permite que um site acesse recursos de outro site, mesmo estando em domínios diferentes.*/
/* Express: biblioteca usada para criar o servidor */
/* express.json(): trabalha com estruturas JSON nas requesiçoes */

const [express, cors] = [require("express"), require("cors")];
const ADRESS_SERVER =
  "http://" + process.env.SERVER_HOST + ":" + process.env.SERVER_PORT;

/* Importação das rotas usadas */
const { routerPessoa } = require("./Pessoa");
const { routerPessoaFisica } = require("./PessoaFisica");
const { routerPessoaJuridica } = require("./PessoaJuridica");
const { routerGrupo } = require("./Grupo");
const { routerTelefone } = require("./Telefone");

/* Configurações do servidor */
const server = express();
server.use(cors());
server.use(express.json());

/* Rotas usadas */
server.use(routerPessoa);
server.use(routerPessoaFisica);
server.use(routerPessoaJuridica);
server.use(routerGrupo);
server.use(routerTelefone);

/* Rota iniacial do servidor */
server.get("/", (req, res) => {
  res
    .send(
      `<h1 style="
          background-color:black;
          color:white;
          text-align:center;
          padding: 50px;
        ">
          <marquee>
            Servidor em execução!
          </marquee>
        </h1>`
    )
    .status(200);
});

/* Função de inicalização do servidor */
server.start = () => {
  server.listen(process.env.SERVER_PORT, () => {
    console.log(`Servidor rodando em: ${ADRESS_SERVER}`);
  });
};

/* Exportação */
module.exports = { server };
