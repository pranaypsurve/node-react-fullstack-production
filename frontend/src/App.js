import Home from './components/pages/Home';
import MainLayout from './admin/MainLayout';
import Dashboard from './components/admin/Dashboard'
import Profile from './components/admin/Profile'
import PageNotFound from './components/PageNotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin/' element={<MainLayout />}>
          <Route path='' element={<h1>Home Admin Panel</h1>} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='profile' element={<Profile />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
        {/* <Redirect from='*' to='/404' /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
