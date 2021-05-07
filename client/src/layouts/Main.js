import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Main;