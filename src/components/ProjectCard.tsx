import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
    title: string;
    thumbnail: string;
    description: string;
    link: string;
  };
  
  export default function ProjectCard({ title, thumbnail, description, link }: ProjectCardProps) {
    return (
      <div className="rounded-2xl shadow-md p-4 bg-white hover:shadow-lg transition">
        <Image
            src={thumbnail}
            alt="Borrow Burrow Homepage"
            width={600}
            height={400}
            className="rounded shadow"
        />
        <h2 className="text-3xl font-semibold mt-2 mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <a href={link} className="text-blue-600 hover:underline" rel="noopener noreferrer">
          View Project →
        </a>
      </div>
    );
  }