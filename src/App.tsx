import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HowToCreate from './pages/HowToCreate';
import TheaterDemo from './pages/TheaterDemo';
import Footer from './components/layout/Footer';
import FreelanceDemo from './pages/FreelanceDemo';
import PMEDemo from './pages/PMEDemo';
import Opportunities from './pages/Opportunities';
import Genesis from './pages/Genesis';
import Process from './pages/Process';
import Home from './pages/Home';
import Features from './pages/Features';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="genesis" element={<Genesis />} />
        <Route path="process" element={<Process />} />
        <Route path="features" element={<Features />} />
        <Route path="how-to-create" element={<HowToCreate />} />
        <Route path="theater" element={<TheaterDemo />} />
        <Route path="freelance" element={<FreelanceDemo />} />
        <Route path="pme" element={<PMEDemo />} />
        <Route path="opportunities" element={<Opportunities />} />
      </Route>
    </Routes>
  );
}

export default App;
