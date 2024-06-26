import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '@/App.tsx';
import '@/tailwind.css';
import { ProjectDetail } from './components/organisms/section';

const project = {
  title: 'Find It',
  thumbnail: 'https://images.unsplash.com/photo-1633275037886-7d6f9c8d9f5f',
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/:id',
        element: <ProjectDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
