import { Outlet} from "react-router-dom"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ThemeProvider } from "./Components/utils/global.context";

function App() {


  return (
    // <ContextProvider>
    <ThemeProvider>
      <div className="App">
          <Navbar/>
          <Outlet />
          <Footer/>
      </div>
    </ThemeProvider>
      
    // </ContextProvider>   
  );
}

export default App;
