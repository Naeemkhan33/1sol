import { Route, Routes } from 'react-router-dom';
import FooterPrimary from './components/footer/FooterPrimary';
import HomePage from './pages/home/HomePage';
import LaunchAppPage from './pages/launch-app/LaunchAppPage';

function App() {
  return (
    <section>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/launch-app' element={<LaunchAppPage />} />
      </Routes>
      <FooterPrimary />
    </section>
  );
}

export default App;
