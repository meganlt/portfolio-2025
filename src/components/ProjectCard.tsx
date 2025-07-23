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
      <div className="rounded shadow-md bg-white hover:shadow-lg transition overflow-hidden">
        <Link
          href={link}
          
        >
          <Image
              src={thumbnail}
              alt="Borrow Burrow Homepage"
              width={600}
              height={400}
              className=""
          />
        
          <h2 className="text-4xl text-center font-semibold pl-4 pr-4 mt-4 mb-2">{title}</h2>
        </Link>
        <p className="text-gray-700 pl-4 pr-4 pt-4 mb-4 ">{description}</p>
        <a href={link} className="block text-blue-600 text-right hover:underline p-4" rel="noopener noreferrer">
          View Project →
        </a>
      </div>
    );
  }