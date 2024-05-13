import Picture from '@/assets/image.png';

export default function Avatar() {
  return (
    <figure className="aspect-square h-[60vw] max-h-500px shrink-0 overflow-hidden rounded-full shadow-primary tablet:h-[40vw]">
      <img src={Picture} alt="강선영 사진" className="object-fill" />
      <figcaption className="sr-only">강선영의 프로필 사진</figcaption>
    </figure>
  );
}
