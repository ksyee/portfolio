import Picture from '@/shared/assets/image.jpg';

export function Avatar() {
  return (
    <div className="flex flex-col gap-20pxr">
      <figure className="aspect-[1/1] w-[60vw] max-w-400pxr shrink-0 overflow-hidden rounded-full shadow-primary">
        <img src={Picture} alt="강선영 사진" />
        <figcaption className="sr-only">강선영의 프로필 사진</figcaption>
      </figure>
      <div className="text-14pxr">
        <ul className="flex justify-around">
          <li>
            <span>#역지사지</span>
          </li>
          <li>
            <span>#협업의_가치</span>
          </li>
          <li>
            <span>#도전의_즐거움</span>
          </li>
          <li>
            <span>#커스텀_키보드</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
