import { createBrowserRouter } from "react-router-dom";
import Login, { loginAction } from "./features/identity/components/login";
import Register, { registerAction } from "./features/identity/components/register";
import IdentityLayout from "./layouts/identity-layout";
import Courses, { coursesLoader } from "./pages/courses";
import MainLayout from "./layouts/mainLayout/main-layout";
import CourseCategories, { categoriesLoader } from "./pages/course-categories";
import CourseDetails, { courseDetailsLoader } from "./features/courses/components/course-details";
import { CategoryProvider } from "./features/categories/category-context";
import NotFound from "./pages/not-found";
import UnhandledException from "./pages/unhandled-exeption";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <UnhandledException/>,
    children: [
      {
        element: <Courses />,
        index: true,
        loader: coursesLoader
      },
      {
        path: 'course-categories',
        element: (
          <CategoryProvider>
            <CourseCategories />
          </CategoryProvider>
        ),
        loader: categoriesLoader
      },
      {
        path: 'courses/:id',
        element: <CourseDetails />,
        loader: courseDetailsLoader,
      }
    ]
  },
  {
    element: <IdentityLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
        action: loginAction,
        errorElement: <Login />
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
        errorElement: <Register />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router;