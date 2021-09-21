import "./App.css";
import Main from "./pages/Main";
import UserFavorites from "./pages/UserFavorites";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Box } from "@mui/system";

function App() {
  return (
    <>
      <NavBar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Switch>
          <Route exact path="/" component={Main} />

          <Route path="/favorites" component={UserFavorites} />
        </Switch>
      </Box>
    </>
  );
}

export default App;
