import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '@/App.tsx';
import '@/tailwind.css';
import { PeerReview, ProjectDetail } from './components/molecules';
import peerFeedbackImg from '@/assets/peer-feedback.png';

import type { Router as RemixRouter } from '@remix-run/router';

const router: RemixRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/peer_review',
        element: <PeerReview src={peerFeedbackImg} />,
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
