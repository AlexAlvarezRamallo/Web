import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import PoterasPage from "./pages/PoterasPage";
import SobreNosotros from "./pages/SobreNosotros";
import './styles/PoterasPage.css'
import './styles/SobreNosotros.css'

function App() {
  const pathname = window.location.pathname;
  let page;
  if (pathname === "/poteras") {
    page = <PoterasPage />;
  } else if (pathname === "/SobreNosotros") {
    page = <SobreNosotros />;
  } else {
    page = <HomePage />;
  }
  return <><Header />{page}</>;
}

export default App;
