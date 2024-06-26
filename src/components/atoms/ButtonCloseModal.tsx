import 'remixicon/fonts/remixicon.css';
import { Link } from 'react-router-dom';

export function ButtonCloseModal() {
  return (
    <Link to="/" className="absolute right-8pxr top-8pxr">
      <i className="ri-close-line text-30pxr leading-none text-black"></i>
    </Link>
  );
}
