import "./App.css";
import Main from "./pages/Main";
import UserFavorites from "./pages/UserFavorites";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/favorites" component={UserFavorites} />
      </Switch>
    </>
  );
}

export default App;
