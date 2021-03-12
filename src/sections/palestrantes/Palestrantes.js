
import Patricia from '../../img/patricia.jpeg';
import Sara from '../../img/sara.jpeg';
import Romario from '../../img/romario.jpeg';
import Lara from '../../img/lara.jpeg';
import Julia from '../../img/julia.jpeg'
import Pedro from '../../img/pedro.jpg'
import Bento from '../../img/bento.jpg'
import Leticia from '../../img/leticias.jpg'
import Andre from '../../img/andre.jpg'

function Palestrantes() {
  return (
    <div>      
    <div className="Container2" id="palestrantes">
      <h1>Palestrantes Confirmados</h1>
      <div class="palestrantes">
        <div class="palestrante">
          <img src={Lara} />
          <h3>Lara Freitas</h3>
          <p>
          Fisioterapeuta, Chefe de Serviços Previdenciários do INSS. Chair do RYLA no Distrito 4521 e Presidente eleita do Rotary Club de Belo Horizonte-Leste para o ano de 2021-22.
          </p>
        </div>
        <div class="palestrante">
          <img src={Patricia} />
          <h3>Patrícia Kuhn</h3>
          <p>
           Jornalista, atua na área de marketing de Produto na Rede Globo, em São Paulo. Associada ao Rotaract Club Universidade Mackenzie é membro do comitê de Rotaract do Rotary International, também atua como conselheira especial do Conselho de Curadores da Fundação Rotaria.
          </p>
        </div>
        <div class="palestrante">
          <img src={Romario} />
          <h3>Romário Jales</h3>
          <p>
           Administrador, mestre em educação, professor universitário e empreendedor. Associado ao Rotaract Club de Cuiabá é Vice-RDR 2020-21 e Presidente da Comissão de Imagem Pública do Rotary 4440 em 2021-22. 
          </p>
        </div>
        <div class="palestrante">
          <img src={Sara} />
          <h3> Sara Kretli</h3>
          <p>
            Advogada, Pós-graduanda em Direito da Família e sucessões pela Fundação do Ministério Público do Rio Grande do Sul. Associada ao Rotaract Club de João Monlevade e Gerente do CNP 2020-21. 
          </p>
        </div>
        <div class="palestrante">
          <img src={Julia} />
          <h3>Júlia Caiado</h3>
          <p>
          CEO e Founder da Global Touch, empresa especializada em benchmarking. Alumni dos Programas de Intercâmbio do Rotary e do RYLA Canadá, também foi rotaractiana. Júlia é graduada em Relações Internacionais e Direito, especialista em gestão de projetos e apaixonada por fazer a diferença.
          </p>
        </div>

      </div>
      </div>
      <div className="Container2" id="palestrantes">
      <h1>Facilitadores Confirmados</h1>
      <div class="palestrantes">
        <div class="palestrante">
          <img src={Pedro} />
          <h3>Pedro Lacerda</h3>
          <p>
           Estudante de Direito. Estagiário do TJMJ e Diretor de Projetos do Rotaract 4521.
          </p>
        </div>
        <div class="palestrante">
          <img src={Andre} />
          <h3>André Vaz</h3>
          <p>
         Historiador e linguista. Diretor de Treinamentos da Rotaract Brasil
          </p>
        </div>
        <div class="palestrante">
          <img src={Leticia} />
          <h3>Letícia Ferreira</h3>
          <p>
         Professora. Representante Distrital de Rotaract 2021-22
          </p>
        </div>
        <div class="palestrante">
          <img src={Bento} />
          <h3>Filipe Bento</h3>
          <p>
           Engenheiro de Software e Representante Distrital de Rotaract 2020-21
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Palestrantes;
