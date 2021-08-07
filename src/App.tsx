import { useAuth0 } from "@auth0/auth0-react";
import "./app.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <h1>Application</h1>
      {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
      <Profile />
    </div>
  );
};

export default App;
