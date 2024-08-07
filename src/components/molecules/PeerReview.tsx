import { ProjectModalLayout } from '@/components/molecules';

interface PeerReviewProps {
  src: string;
}

export function PeerReview({ src }: PeerReviewProps) {
  return (
    <ProjectModalLayout>
      <div className="bg-white md:px-[10%] md:py-8pxr lg:px-[20%]">
        <h2 className="sr-only">동료 평가</h2>
        <img
          src={src}
          alt="동료 평가 이미지"
          className="w-full border border-t-0 object-contain"
        />
      </div>
    </ProjectModalLayout>
  );
}
