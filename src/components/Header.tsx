import Link from "next/link";

export default function Header() {
  return (
    <header className=" p-4 shadow-md bg-slate-400">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="logo">Megan Tegeder</a>
        <nav className="space-x-8">
          <Link className="nav-link" href="/">Home</Link>
          <Link className="nav-link" href="/about">About</Link>
          <Link className="nav-link" href="/projects">Projects</Link>
          <Link className="nav-link" href="https://www.linkedin.com/in/megantegeder/" target="_blank">LinkedIn</Link>
          <Link className="nav-link" href="https://github.com/meganlt/" target="_blank">Github</Link>
        </nav>
      </div>
      
    </header>
  );
}