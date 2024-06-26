import 'remixicon/fonts/remixicon.css';

export function Footer() {
  return (
    <footer className="flex flex-col items-center py-24pxr">
      <div className="space-x-10pxr text-white">
        <a
          href="https://github.com/ksyee"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="ri-github-fill text-32pxr"></i>
        </a>
        <a
          href="https://ksyee.notion.site/641eb5db82004b3284dcc96f103b0de5"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="ri-notion-fill text-32pxr"></i>
        </a>
      </div>
      <p className="mt-8pxr text-zinc-200">Create By Ksyee</p>
    </footer>
  );
}
