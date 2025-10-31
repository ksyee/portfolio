import { useEffect, useRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { ButtonCloseModal, ButtonLink } from '@/shared/ui';
import { useModal, useProjects } from '@/app/providers';

interface ProjectModalLayoutProps {
  children: React.ReactNode;
}

export function ProjectModalLayout({ children }: ProjectModalLayoutProps) {
  const { projects } = useProjects();
  const { isOpen, closeModal, openModal, selectedProjectCode } = useModal();
  const location = useLocation();
  const navigate = useNavigate();
  const { code } = useParams<{ code: string }>();
  const originalOverflowRef = useRef<string | null>(null);

  const handleClickBackground = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.classList.contains('clickedBg')) {
      closeModal();
      navigate('/');
    }
  };

  const renderButtons = () => {
    if (location.pathname === '/peer_review') {
      return (
        <div className="absolute right-0 top-0 flex h-[56px] w-screen items-center justify-end border-b bg-white pr-[8px] md:right-[80px] md:top-[40px] md:h-[40px] md:w-[40px] md:border-0 md:bg-transparent md:p-0">
          <ButtonCloseModal />
        </div>
      );
    }

    if (location.pathname === `/${code}`) {
      const project = projects.find((project) => project.code === code);

      if (!project) return undefined;

      const { link } = project;

      const github_link = link.github;
      const web_link = link.web;

      return (
        <div className="absolute right-0 top-0 flex h-[56px] w-screen items-center justify-between border-b bg-white px-[8px] md:right-[80px] md:top-[40px] md:w-0 md:flex-col md:gap-[24px] md:border-0 md:bg-transparent">
          <ButtonCloseModal />
          <div className="order-first flex gap-[10px] md:order-last md:flex-col">
            {github_link && (
              <ButtonLink href={github_link} title="Github">
                <i className="ri-github-fill"></i>
              </ButtonLink>
            )}
            {web_link && (
              <ButtonLink href={web_link} title="배포 링크">
                <i className="ri-link"></i>
              </ButtonLink>
            )}
          </div>
        </div>
      );
    }

    return null;
  };

  useEffect(() => {
    const { body } = document;

    if (originalOverflowRef.current === null) {
      originalOverflowRef.current = body.style.overflow || '';
    }

    if (isOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = originalOverflowRef.current || '';
    }

    return () => {
      body.style.overflow = originalOverflowRef.current || '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (code && (selectedProjectCode !== code || !isOpen)) {
      openModal(code);
    }
  }, [code, openModal, selectedProjectCode, isOpen]);

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        className="clickedBg fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
        onClick={handleClickBackground}
      >
        <div className="clickedBg scrollbar-hide relative z-0 h-full w-full overflow-auto md:px-[140px]">
          <div className="relative mx-auto mt-[56px] min-h-full w-full min-w-full overflow-x-hidden bg-white md:my-[50px]">
            <div className="mx-auto h-full max-w-[1200px]">{children}</div>
          </div>
        </div>
        {renderButtons()}
      </motion.section>
    </AnimatePresence>
  );
}
