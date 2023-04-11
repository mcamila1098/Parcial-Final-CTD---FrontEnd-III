import { Outlet} from "react-router-dom"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ThemeProvider } from "./Components/utils/global.context";

function App() {


  return (
    // <ContextProvider>
    <ThemeProvider>
      <Navbar/>
      <Outlet />
      <Footer/>
    </ThemeProvider>
      
    // </ContextProvider>   
  );
}

export default App;
