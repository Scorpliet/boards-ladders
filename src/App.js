import React from "react";
import PrivateRoute from "./utils/PrivateRoute";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Landing from "./pages/landing";
import { AuthProvider } from "./utils/authcontext";
import { BoardFallbackComponent, EmailConfirmation } from "./components/subComp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FileContent from "./pages/fileContent";
import Details from "./pages/addFile";

function App() {
  return (
      <main>
        <AuthProvider>
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Landing />
                  </PrivateRoute>
                }
              />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/add_files" element={<Details/>} />
              <Route path="/verifyEmail" element={<EmailConfirmation/>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/file" element={<FileContent/>}/>
            </Routes>
          </Router>
        </AuthProvider>
      </main>

  );
}

export default App;
