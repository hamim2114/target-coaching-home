import Navbar from './components/navbar/Navbar'
import './App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Suspense, lazy, useEffect } from 'react';
import { Outlet, RouterProvider, createBrowserRouter, useLocation, useOutlet } from 'react-router-dom';
const HomePage = lazy(() => import('./pages/homePage/HomePage'));
const CoursePage = lazy(() => import('./pages/coursePage/CoursePage'));
const TeachersPage = lazy(() => import('./pages/teachersPage/TeachersPage'));
const BlogPage = lazy(() => import('./pages/blogPage/BlogPage'));
const SingleCoursePage = lazy(() => import('./pages/singleCoursePage/SingleCoursePage'));
const SingleBlogPage = lazy(() => import('./pages/singleblogPage/SingleBlogPage'));
const AboutPage = lazy(() => import('./pages/aboutPage/AboutPage'));
const EventPage = lazy(() => import('./pages/eventPage/EventPage'));
const SingleEventPage = lazy(() => import('./pages/singleEventPage/SingleEventPage'));
const NoticePage = lazy(() => import('./pages/noticePage/NoticePage'));
const SingleNoticePage = lazy(() => import('./pages/singleNoticePage/SingleNoticePage'));
const ContactPage = lazy(() => import('./pages/contactPage/ContactPage'));
import LoginPage from './pages/loginPage/LoginPage';
import SignUp from './pages/signUp/SignUp';
import Footer from './components/footer/Footer';
import Loader from './components/loader/Loader';
import { AnimatePresence, motion } from 'framer-motion';

function App() {

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname]);
    return null;
  }
  const Layout = () => {
    const { pathname } = useLocation();
    const element = useOutlet();
    return (
      <div>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<Loader />}>
          {/* <Outlet/> */}
          <AnimatePresence mode='wait'>
            <motion.div
              key={pathname}
              transition={{ duration: 0.5, ease: "easeOut" }}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
            >
              {element && React.cloneElement(element, { key: pathname })}
            </motion.div>
          </AnimatePresence>
        </Suspense>
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
        {
          path: 'login',
          element: <LoginPage />
        },
        {
          path: 'register',
          element: <SignUp />
        },
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
