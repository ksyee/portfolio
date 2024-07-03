import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { useModalStore } from '@/stores/modalStore';
import { ButtonCloseModal, ButtonLink } from '@/components/atoms';
import { useProjectsStore } from '@/stores/projectsStore';

interface ProjectModalLayoutProps {
  children: React.ReactNode;
}

export function ProjectModalLayout({ children }: ProjectModalLayoutProps) {
  const { projects } = useProjectsStore();
  const { isOpen, close } = useModalStore();
  const location = useLocation();
  const { code } = useParams<{ code: string }>();

  const handleClickBackground = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.classList.contains('clickedBg')) {
      close();
    }
  };

  const renderButtons = () => {
    if (location.pathname === '/peer_review') {
      return (
        <div className="absolute right-0 top-0 flex h-56pxr w-screen items-center justify-end border-b bg-white pr-8pxr md:right-80pxr md:top-40pxr md:h-40pxr md:w-40pxr md:border-0 md:bg-transparent md:p-0">
          <ButtonCloseModal />
        </div>
      );
    }

    if (location.pathname === `/${code}`) {
      const githubLink = projects.find((project) => project.code === code)
        ?.github_link as string;

      const webLink = projects.find((project) => project.code === code)
        ?.web_link as string;

      return (
        <div className="absolute right-0 top-0 flex h-56pxr w-screen items-center justify-between border-b bg-white px-8pxr md:right-80pxr md:top-40pxr md:w-0 md:flex-col md:gap-24pxr md:border-0 md:bg-transparent">
          <ButtonCloseModal />
          <div className="order-first flex gap-10pxr md:order-last md:flex-col">
            <ButtonLink href={githubLink} title="Github">
              <i className="ri-github-fill"></i>
            </ButtonLink>
            <ButtonLink href={webLink} title="배포 링크">
              <i className="ri-link"></i>
            </ButtonLink>
          </div>
        </div>
      );
    }

    return null;
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        className="clickedBg fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
        onClick={handleClickBackground}
      >
        <div className="clickedBg scrollbar-hide relative z-0 h-full w-full overflow-auto md:px-140pxr">
          <div className="relative mx-auto mt-56pxr min-h-full w-full min-w-full overflow-x-hidden bg-white md:my-50pxr">
            <div className="mx-auto h-full max-w-[1200px]">{children}</div>
          </div>
        </div>
        {renderButtons()}
      </motion.section>
    </AnimatePresence>
  );
}
