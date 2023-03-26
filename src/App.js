import './App.css';
import Index from './Header/index.js'
import Main from './MainFolder/index'
import NavItem from './Header/NavItem';
import FormikForm from './Formik/index'
import Header from './Header/index'
// import 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Index/> */}
        {/* //  <Main/>  */}
        <FormikForm/>
        <Header/>

      </header>
    </div>
  );
}

export default App;
