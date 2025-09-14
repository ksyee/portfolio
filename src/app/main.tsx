import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '@/pages/home/HomePage.tsx';
import '@/app/styles.css';
import { PeerReview } from '@/features/peer-review';
import { ProjectDetail } from '@/features/project-detail/ui/ProjectDetail';
import peerFeedbackImg from '@/shared/assets/peer-feedback.png';
import { AppProviders } from '@/app/providers';

import type { Router as RemixRouter } from '@remix-run/router';

const router: RemixRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
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
  <AppProviders>
    <RouterProvider router={router} />
  </AppProviders>
);
