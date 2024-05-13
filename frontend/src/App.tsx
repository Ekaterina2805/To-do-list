import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { AuthDispatchContext, AuthStateContext } from "./context/Auth.context";
import { User } from "./types/User";

import Login from "./pages/Login/Login";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { UserDispatchContext, UserStateContext } from "./context/User.context";
import { loginUser } from "./hooks/backend/login";
import Tasks from "./pages/Tasks/Tasks";
import { useConnectionSocket } from "./hooks/useConnectionSocket";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#5071b5",
      contrastText: "#fff",
    },
  },
});


declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

function App() {
  const [token, setToken] = useState<string>("");
  const [user, setUser] = useState<User | undefined>(undefined);
  useConnectionSocket()

  useEffect(() => {
  
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    if (email && password) {
      loginUser(email, password).then((data) => {
        setUser(data.user);
        console.log(data.accessToken)
        setToken(data.accessToken);
      });
    }
  }, []);

    return (
      <>
        <ThemeProvider theme={theme}>
          <Router>
              <AuthDispatchContext.Provider value={setToken}>
                <UserDispatchContext.Provider value={setUser}>
                  {token && user !== undefined ? (
                    <AuthStateContext.Provider value={token}>
                      <UserStateContext.Provider value={user}>
                        <Tasks/>
                      </UserStateContext.Provider>
                    </AuthStateContext.Provider>
                  ) : (
                    <div className="App">
                      <Login />
                    </div>
                  )}
                </UserDispatchContext.Provider>
              </AuthDispatchContext.Provider>
          </Router>
        </ThemeProvider>
      </>
    );
  }


export default App;