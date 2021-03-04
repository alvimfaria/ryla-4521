
import Patricia from '../../img/patricia.jpeg';
import Sara from '../../img/sara.jpeg';
import Romario from '../../img/romario.jpeg';
import Lara from '../../img/lara.jpeg';


function Palestrantes() {
  return (
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
      </div>

      
    </div>
  );
}

export default Palestrantes;
