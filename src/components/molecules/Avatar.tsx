import Picture from '@/assets/image.png';

export function Avatar() {
  return (
    <figure className="aspect-square h-[40vw] max-h-500pxr w-[40vw] max-w-500pxr shrink-0 overflow-hidden rounded-full shadow-primary">
      <img src={Picture} alt="강선영 사진" />
      <figcaption className="sr-only">강선영의 프로필 사진</figcaption>
    </figure>
  );
}
