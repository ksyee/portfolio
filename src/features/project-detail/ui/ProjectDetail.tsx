import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';

import {
  DetailListTitle,
  Pill,
  ProblemIcon,
  SolutionIcon,
} from '@/shared/ui';
import { Period } from '@/features/project-detail/ui/Period';
import { Keywords } from '@/features/project-detail/ui/Keywords';

import { ProjectModalLayout } from '@/features/project-detail/ui/ProjectModalLayout';

import { useProjects } from '@/app/providers';
import { parseContent } from '@/shared/utils/parseContent';

export function ProjectDetail() {
  const { projects } = useProjects();
  const { code } = useParams<{ code: string }>();
  const projectDetail = projects.find((item) => item.code === code);

  if (!projectDetail) {
    return (
      <ProjectModalLayout>
        <h2 className="mt-[50px] text-center text-[24px] text-black">
          프로젝트 정보를 찾을 수 없습니다.
        </h2>
      </ProjectModalLayout>
    );
  }

  type BeforeBgStyle = CSSProperties & { '--before-bg-color'?: string };
  const accentStyle: BeforeBgStyle = {
    '--before-bg-color': projectDetail.color ?? '#313131',
  };

  return (
    <ProjectModalLayout>
      <section className="relative z-0 flex flex-col p-[8px] py-[28px]">
        <div className="flex justify-center gap-[8px]">
          <Keywords keywords={projectDetail.keywords} />
        </div>
        <h2 className="mt-[16px] text-center text-[32px] font-bold">
          {projectDetail.title}
        </h2>
        <div className="mt-[6px] flex justify-center gap-[16px] text-[14px]">
          <Period period={projectDetail.period} />
          <p>{projectDetail.member}</p>
        </div>
        <div className="mt-[6px] flex items-center justify-center gap-[16px]">
          <p className="text-[14px]">기여도</p>
          <div className="flex items-center gap-[8px]">
            <span className="text-[14px]">{projectDetail.contribution}%</span>
            <div className="h-[6px] w-[100px] overflow-hidden rounded bg-green-400 bg-opacity-30">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${projectDetail.contribution}%`,
                  transition: { delay: 0.3, ease: 'easeInOut' },
                }}
                className="h-full rounded bg-green-500"
              ></motion.div>
            </div>
          </div>
        </div>
        <figure
          className="before-bg mx-auto mt-[30px] flex aspect-[2/1] w-[95%] items-center justify-center overflow-hidden rounded-2xl border bg-white before:absolute before:left-1/2 before:top-0 before:-z-20 before:block before:h-[70%] before:w-screen before:-translate-x-1/2 md:w-[60%]"
          style={accentStyle}
        >
          <img
            src={projectDetail.thumbnail ?? undefined}
            alt={`${projectDetail.title} 썸네일`}
            className="h-[95%] rounded-lg border"
          />
          <figcaption className="sr-only">
            프로젝트의 메인 화면 썸네일입니다.
          </figcaption>
        </figure>
      </section>
      <section className="flex flex-col gap-[40px] p-[5%] text-black">
        <h2 className="sr-only">프로젝트 상세 정보</h2>
        <div className="space-y-[4px] text-center after:mt-[32px] after:block after:h-[1px] after:w-full after:bg-gray-400">
          {projectDetail?.intro?.map((content, index) => (
            <p key={index}>{content}</p>
          ))}
        </div>
        <section>
          <h3 className="text-[24px] font-bold">
            <i className="ri-terminal-box-line"></i> 주요 기능 및 특징
          </h3>
          <ul className="ml-[16px] mt-[20px] flex list-disc flex-col gap-[6px]">
            {projectDetail.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="text-[24px] font-bold">
            <i className="ri-stack-line"></i> 사용 기술 및 언어
          </h3>
          <div className="mt-[20px] flex flex-col gap-[8px]">
            <ul className="ml-[16px] list-inside list-disc text-[18px] font-semibold">
              {projectDetail.stack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </section>
        <section>
          <h3 className="text-[24px] font-bold">
            <i className="ri-draft-line"></i> 작업 기여
          </h3>
          <ul className="mt-[20px] flex flex-col gap-[4px]">
            {projectDetail.contribute.map((item, index) => (
              <li key={index}>
                <DetailListTitle>{item.title}</DetailListTitle>
                <ul className="list-inside list-disc py-[8px] pl-[16px]">
                  {item.contents && (
                    <li>
                      {parseContent(item.contents, Pill)}{' '}
                      {item.hasLink && (
                        <Pill>
                          <a
                            href={item.hasLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="font-semibold">
                              &lt;Typescript 간단 요약&gt;
                            </span>
                          </a>
                        </Pill>
                      )}
                    </li>
                  )}
                </ul>
              </li>
            ))}
          </ul>
        </section>
        {projectDetail.trouble && (
          <section>
            <h3 className="text-[24px] font-bold">
              <i className="ri-alert-line"></i> 트러블 슈팅
            </h3>
            <ul className="mt-[20px] flex flex-col gap-[4px]">
              {projectDetail.trouble.map((item, index) => (
                <li key={index}>
                  <DetailListTitle>{item.title}</DetailListTitle>
                  <dl className="space-y-[8px] px-[8px] py-[16px]">
                    <dt>
                      <ProblemIcon />{' '}
                      {parseContent(item.contents.problem, Pill)}
                    </dt>
                    <dd>
                      <SolutionIcon />{' '}
                      {parseContent(item.contents.solution, Pill)}
                    </dd>
                  </dl>
                </li>
              ))}
            </ul>
          </section>
        )}
        <section>
          <h3 className="text-[24px] font-bold">
            <i className="ri-lightbulb-line"></i> 회고
          </h3>
          <ul className="ml-[16px] mt-[20px] flex list-disc flex-col gap-[6px]">
            {projectDetail.retrospect.map((retrospect, index) => (
              <li key={index}>{retrospect}</li>
            ))}
          </ul>
        </section>
      </section>
    </ProjectModalLayout>
  );
}
