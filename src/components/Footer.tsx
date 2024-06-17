import 'remixicon/fonts/remixicon.css';

export default function Footer() {
  return (
    <footer className="py-24pxr flex flex-col items-center">
      <div className="space-x-10pxr text-white">
        <a
          href="https://github.com/ksyee"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="ri-github-fill text-32pxr"></i>
        </a>
        <a href="" target="_black" rel="noreferrer noopener">
          <i className="ri-notion-fill text-32pxr"></i>
        </a>
      </div>
      <p className="mt-8pxr text-zinc-200">Create By Ksyee</p>
    </footer>
  );
}
