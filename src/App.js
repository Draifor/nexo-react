import './App.css';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import ListCategoriesComponent from './components/ListCategoriesComponent/ListCategoriesComponent';

function App() {
  return (
    <div className="container">
      <header className="header">
       <HeaderComponent/>
      </header>
      <main>
        <ListCategoriesComponent/>
      </main>
      <footer>
        <p id="copyright">Todos los derechos reservados Nexo Colombia&copy;</p>
      </footer>
    </div>
  );
}

export default App;
