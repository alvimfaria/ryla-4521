import Banner from "./banner/Banner"
import Ryla from "./ryla/Ryla"
import Distrito from "./distrito/Distrito"
import Programacao from "./programacao/Programacao"
import Inscricao from "./Inscricao/Inscricao"
import Contato from "./contato/Contato"


function MainPage() {
  return (
    <>
        <Banner/>
        <Ryla/>
        <Distrito/>
        <Programacao/>
        <Inscricao />
        <Contato />
    </>
  );
}

export default MainPage;
