export default function Nav() {
  return (
    <nav className="text-white">
      <ul className="flex gap-8pxr">
        <li>
          <h1 className="text-bold text-24pxr">
            <a href="#">ksyee</a>
          </h1>
        </li>
        <li className="center">
          <a href="#about-me" className="">
            About Me
          </a>
        </li>
        <li className="center">
          <a href="#skills">Skills</a>
        </li>
        <li className="center">
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
}
