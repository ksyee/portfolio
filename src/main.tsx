import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '@/App.tsx';
import '@/tailwind.css';
import { PeerReview, ProjectDetail } from './components/molecules';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/peer_review',
        element: (
          <PeerReview src="https://flveojkndlljinzpzpkl.supabase.co/storage/v1/object/sign/portfolio/peer_review.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8vcGVlcl9yZXZpZXcucG5nIiwiaWF0IjoxNzE5ODg3MjkxLCJleHAiOjE3NTE0MjMyOTF9.UY1r3QqL7xUFijPJC-jabpUs3kzClJy9fF-RkSxFZBQ&t=2024-07-02T02%3A28%3A10.936Z" />
        ),
      },
      {
        path: '/:code',
        element: <ProjectDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
