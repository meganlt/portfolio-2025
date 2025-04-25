import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="m-4 p-8 text-center rounded-2xl shadow-md bg-white hover:shadow-lg transition">
      <Image className="rounded-full m-auto" src="/images/mt-headshot.jpg" width={300} height={300} alt="Headshot of Megan"/>
      <h1 className="text-5xl font-bold mb-4 mt-4">Hi, I'm Megan!</h1>
      <p className="text-3xl">I'm a full-stack developer with a ux and design background, blending technical skill and a creative approach to build user-focused applications.</p> 
      <p className="text-1xl mt-8 text-left">If you'd like to learn more about my work experience, check out my professional background on <a href="https://www.linkedin.com/in/megantegeder/">LinkedIn</a>. If you'd like to preview my recent work, check out my <a href="/projects">Projects page</a>. And if you'd like to peek at some of my coding projects, take a look at my <a href="https://github.com/meganlt/">Github</a> (and let me know how you'd code things differently! I love to improve my skills).</p>
      <p className="text-1xl mt-4 text-left">If you'd like to work with me, contact me via email at megan.tegeder@gmail.com <a href="mailto:megan.tegeder@gmail.com">(mailto: link)</a>, or reach out to me on <a href="https://www.linkedin.com/in/megantegeder/">LinkedIn</a>!</p>
    </main>
    
  );
}