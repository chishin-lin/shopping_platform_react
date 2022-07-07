import {Routes,Route} from 'react-router-dom';
import Navigation from "./routes/navigation/Navigation";
import Home from "./routes/home/HomeComponent";
import SignIn from './routes/signIn/SignIn';
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
        <Route path="/sign-in" element={ <SignIn /> }/>
        </Route>
    </Routes>
  );
}

export default App;
