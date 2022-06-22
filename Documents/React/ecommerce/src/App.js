
import './index.css';
import Nav from './components/Nav.js'

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <nav className="nav-bar">
          <div className="links">
            <Link to="/">Logo</Link>
            <Link to='/'>Home</Link>
            <Link to='/SignIn'>SignIn</Link>
            <Link to='/SignUp'>SignUp</Link>
          </div>
          <ul className="social">
            <li><a href="/">F</a></li>
            <li><a href="/">F</a></li>
            <li><a href="/">F</a></li>
            <li><a href="/">F</a></li>
          </ul>
        </nav>

        <Routes>

          <Route exact path='/' element={<Home />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/SignIn' element={<SignIn />} />
        </Routes>
      </BrowserRouter> */}
      <Nav />
    </div>

  );
}

export default App;
