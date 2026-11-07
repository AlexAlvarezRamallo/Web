import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import PoterasPage from "./pages/PoterasPage";

function App() {
  const page = window.location.pathname === '/poteras'
    ? <PoterasPage />
    : <HomePage />;

  return <><Header />{page}</>;
}

export default App;
