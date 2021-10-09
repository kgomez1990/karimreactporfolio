
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';


function App() {

  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;

      if (currentPage === 'Navbar') {
        return <Navbar />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }    
  };

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div className="App">
      <Navbar></Navbar>
      <About></About>
      <Contact></Contact>
      <Portfolio></Portfolio>
      <Resume></Resume>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
