import Picture from '@/assets/image.png';

export default function Avatar() {
  return (
    <figure className="max-h-500pxr aspect-square h-[60vw] shrink-0 overflow-hidden rounded-full shadow-primary tablet:h-[40vw]">
      <img src={Picture} alt="강선영 사진" className="object-fill" />
      <figcaption className="sr-only">강선영의 프로필 사진</figcaption>
    </figure>
  );
}
