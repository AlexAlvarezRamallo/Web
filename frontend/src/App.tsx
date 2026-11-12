import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import DemoWelcome from "./components/DemoWelcome";
import PoterasPage from "./pages/PoterasPage";
import SobreNosotros from "./pages/SobreNosotros";
import FaqPage from "./pages/FaqPage";
import './styles/PoterasPage.css'
import './styles/SobreNosotros.css'

function App() {
  const pathname = window.location.pathname;
  let page;
  if (pathname === "/poteras") {
    page = <PoterasPage />;
  } else if (pathname === "/SobreNosotros") {
    page = <SobreNosotros />;
  } else if (pathname === "/preguntas-frecuentes") {
    page = <FaqPage />;
  } else {
    page = <HomePage />;
  }
  return <>
    <Header />
    {page}
    <footer className="demo-disclaimer">
      Web de demostración · Proyecto de portfolio · No admite pedidos
    </footer>
    <DemoWelcome />
  </>;
}

export default App;
