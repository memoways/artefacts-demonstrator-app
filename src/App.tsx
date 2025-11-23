import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import TheaterDemo from './pages/TheaterDemo';
import FreelanceDemo from './pages/FreelanceDemo';
import PMEDemo from './pages/PMEDemo';
import Opportunities from './pages/Opportunities';
import Genesis from './pages/Genesis';
import Process from './pages/Process';
import Features from './pages/Features';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="genesis" element={<Genesis />} />
        <Route path="process" element={<Process />} />
        <Route path="features" element={<Features />} />
        <Route path="theater" element={<TheaterDemo />} />
        <Route path="freelance" element={<FreelanceDemo />} />
        <Route path="pme" element={<PMEDemo />} />
        <Route path="opportunities" element={<Opportunities />} />
      </Route>
    </Routes>
  );
}

export default App;
