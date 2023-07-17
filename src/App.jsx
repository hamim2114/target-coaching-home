import Navbar from './components/navbar/Navbar'
import './App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/footer/Footer';
import { Outlet, RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import CoursePage from './pages/coursePage/CoursePage';
import TeachersPage from './pages/teachersPage/TeachersPage';
import BlogPage from './pages/blogPage/BlogPage';
import SingleCoursePage from './pages/singleCoursePage/SingleCoursePage';
import { useEffect } from 'react';
import SingleBlogPage from './pages/singleblogPage/SingleBlogPage';
import AboutPage from './pages/aboutPage/AboutPage';
import EventPage from './pages/eventPage/EventPage';
import SingleEventPage from './pages/singleEventPage/SingleEventPage';
import NoticePage from './pages/noticePage/NoticePage';
import SingleNoticePage from './pages/singleNoticePage/SingleNoticePage';
import ContactPage from './pages/contactPage/ContactPage';

function App() {

  const ScrollToTop = () => {
    const {pathname} = useLocation();
    useEffect(() => {
      window.scrollTo(0,0)
    }, [pathname]);
    return null;
  }

  const Layout = () => {
    return (
      <div>
        <ScrollToTop/>
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
          path: 'about',
          element: <AboutPage />
        },
        {
          path: 'notice',
          element: <NoticePage />
        },
        {
          path: 'notice/:id',
          element: <SingleNoticePage />
        },
        {
          path: 'course',
          element: <CoursePage />
        },
        {
          path: 'course/:id',
          element: <SingleCoursePage />
        },
        {
          path: 'teachers',
          element: <TeachersPage />
        },
        {
          path: 'event',
          element: <EventPage />
        },
        {
          path: 'event/:id',
          element: <SingleEventPage />
        },
        {
          path: 'blog',
          element: <BlogPage />
        },
        {
          path: 'blog/:id',
          element: <SingleBlogPage />
        },
        {
          path: 'contact',
          element: <ContactPage />
        },
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
