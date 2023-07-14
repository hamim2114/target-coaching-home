import Navbar from './components/navbar/Navbar'
import './App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/footer/Footer';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import CoursePage from './pages/coursePage/CoursePage';

function App() {

  const Layout = () => {
    return (
      <div className='app'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  };
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: 'course',
          element: <CoursePage />
        },
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
