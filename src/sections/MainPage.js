import Banner from "./banner/Banner"
import Ryla from "./ryla/Ryla"
import Distrito from "./distrito/Distrito"
import Palestrantes from "./palestrantes/Palestrantes"
import Programacao from "./programacao/Programacao"
import Inscricao from "./Inscricao/Inscricao"


function MainPage() {
  return (
    <>
        <Banner/>
        <Ryla/>
        <Distrito/>
        <Programacao/>
        <Inscricao />
    </>
  );
}

export default MainPage;
