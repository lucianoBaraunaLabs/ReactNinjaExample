import { BrowserRouter, Link, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/contato" component={Contato} />

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>

    </BrowserRouter>
  );
}

const Home = () => (
  <h1>Home</h1>
)

const Sobre = () => (
  <h1>Sobre</h1>
)

const Contato = () => (
  <h1>Contato</h1>
)


export default App;
