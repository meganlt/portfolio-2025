import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 shadow-md">
      <h1 className="text-2xl font-bold">Megan Tegeder</h1>
      <nav className="space-x-8">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="https://www.linkedin.com/in/megantegeder/">LinkedIn</Link>
        <Link href="https://github.com/meganlt/">Github</Link>
      </nav>
    </header>
  );
}