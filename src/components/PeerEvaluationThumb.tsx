import feedback from '@/assets/peer-feedback.png';

export default function PeerEvaluationThumb() {
  return (
    <figure className="aspect-square h-[60vw] max-h-500px shrink-0 overflow-hidden rounded-full shadow-primary tablet:h-[40vw]">
      <img src={feedback} alt="멋쟁이사자처럼 프론트엔드스쿨 동료피드백" />
      <figcaption className="sr-only">
        멋쟁이사자처럼 동료피드백 이미지
      </figcaption>
    </figure>
  );
}
