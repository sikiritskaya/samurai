import "./App.css";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogComponent from "./components/Dialog/DialogComponent";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import UsersComponent from "./components/Users/UsersComponent";
import ProfileComponent from "./components/Profile/ProfileComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper_app">
        <Header />
        <NavbarComponent />
        <div className="wrapper_app_content">
          <Routes>
            <Route path="/profile" element={<ProfileComponent />}>
              <Route path=":userId" element={<ProfileComponent />} />
            </Route>
            <Route path="/messages/*" element={<DialogComponent />} />
            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/settings/*" element={<Settings />} />
            <Route path="/users/*" element={<UsersComponent />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
