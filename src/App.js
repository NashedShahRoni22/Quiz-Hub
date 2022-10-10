import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import QuizHub from './components/QuizHub/QuizHub';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Navigation from './layouts/Navigation';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigation></Navigation>,
      children:[
        {
          path:"/",
          element:<QuizHub></QuizHub>,
        },
        {
          path:"/quizhub",
          element:<QuizHub></QuizHub>,
        },
        {
          path:"/statistic",
          element:<Statistics></Statistics>,
        },
        {
          path:"/blog",
          element:<Blog></Blog>,
        },
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
