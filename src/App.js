import {Routes,Route} from 'react-router-dom';
import Navigation from "./routes/navigation/Navigation";
import Home from "./routes/home/HomeComponent";
import Authentication from './routes/authentication/Authentication';
const Shop = () => {
  return <div>
    SHOP SHOP SHOP
  </div>
}
function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigation /> } >
        <Route index element={ <Home /> }/>
        <Route path="/shop" element={ <Shop /> }/>
        <Route path="/auth" element={ <Authentication /> }/>
        </Route>
    </Routes>
  );
}

export default App;
