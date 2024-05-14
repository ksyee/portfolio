import feedback from '@/assets/peer-feedback.png';

export default function PeerEvaluationThumb() {
  return (
    <div className="relative">
      <figure className="relative aspect-square h-[60vw] max-h-500px shrink-0 overflow-hidden rounded-full shadow-primary tablet:h-[40vw]">
        <img
          src={feedback}
          alt="멋쟁이사자처럼 프론트엔드스쿨 동료피드백"
          className="absolute"
        />
        <figcaption className="sr-only">
          멋쟁이사자처럼 동료피드백 이미지
        </figcaption>
      </figure>
      <span className="absolute right-0 top-0">click</span>
    </div>
  );
}
