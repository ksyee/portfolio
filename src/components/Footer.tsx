import 'remixicon/fonts/remixicon.css';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center py-24px">
      <a
        href="https://github.com/ksyee"
        target="_blank"
        rel="noreferrer noopener"
        className="text-white"
      >
        <i className="ri-github-fill text-32px"></i>
      </a>
      <p className="mt-8px text-zinc-200">Create By Ksyee</p>
    </footer>
  );
}
