import Banner from "./banner/Banner"
import Ryla from "./ryla/Ryla"
import Distrito from "./distrito/Distrito"
import Programacao from "./programacao/Programacao"
import Inscricao from "./Inscricao/Inscricao"
import Contato from "./contato/Contato"
import Palestrantes from "./palestrantes/Palestrantes"


function MainPage() {
  return (
    <>
        <Banner/>
        <Ryla/>
        <Distrito/>
        <Programacao/>
        <Palestrantes/>
        <Inscricao />
        <Contato />
    </>
  );
}

export default MainPage;
