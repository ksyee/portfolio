import Picture from '@/assets/image.png';

export default function Avatar() {
  return (
    <div className="relative h-[60vw] max-h-600px min-h-200px w-[60vw] min-w-200px max-w-600px overflow-hidden rounded-full p-8px shadow-primary tablet:h-[40vw] tablet:w-[40vw]">
      <img src={Picture} alt="강선영 사진" />
    </div>
  );
}
