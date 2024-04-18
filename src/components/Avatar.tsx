import Picture from '@/assets/image.png';

export default function Avatar() {
  return (
    <div className="shadow-primary h-300px w-300px min-w-300px overflow-hidden rounded-full p-8px">
      <img src={Picture} alt="강선영 사진" />
    </div>
  );
}
