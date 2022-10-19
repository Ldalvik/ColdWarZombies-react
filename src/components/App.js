import { BrowserRouter, Routes, Route } from "react-router-dom";
import UnknownPage from "./pages/UnknownPage";
import HomePage from './pages/HomePage'
import SkillsPage from './pages/skills/SkillsPage'
import WeaponClasses from "./pages/skills/WeaponClasses";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/skills" element={<SkillsPage />} />
        <Route exact path="/weapon_classes" element={<WeaponClasses />} />
        <Route exact path="*" element={<UnknownPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App