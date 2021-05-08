import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

function Welcome() {
  return (
    <>
      <div className="container-fluid mt-5">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Welcome;