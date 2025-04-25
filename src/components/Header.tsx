import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white">
      <a href="/" className="logo">Megan Tegeder</a>
      <nav className="space-x-8">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="https://www.linkedin.com/in/megantegeder/" target="_blank">LinkedIn</Link>
        <Link href="https://github.com/meganlt/" target="_blank">Github</Link>
      </nav>
    </header>
  );
}