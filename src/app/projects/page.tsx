import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Borrow Burrow",
    thumbnail: "/images/borrow-burrow-preview.gif",
    type: "Development",
    description: "A whimsical craft-supply and media-sharing app for friends, branded with a whimsical forest theme.",
    link: "/projects/borrow-burrow",
  },
  {
    title: "Up All",
    thumbnail: "/images/up-all-preview.gif",
    type: "Development",
    description: "A platform for managers to learn better communication and collaboration with team members",
    link: "/projects/up-all",
  },
  {
    title: "Tonkadale Learning Hub Refresh",
    thumbnail: "/images/td-Feature.png",
    type: "Design &amp; Development",
    description: "Content re-organization and styling of educational resources for greenhouse customers",
    link: "/projects/tonkadale",
  }
];

export default function ProjectsPage() {
  return (
    <>
        <section className="max-w-3/4 text-center mx-auto p-6">
            <h1 className="text-5xl font-bold">Projects</h1>
            <p className="pt-4">Here's a preview of some of my recent work:</p>
        </section>
        <section className="p-4 grid gap-12 md:grid-cols-2">
            {projects.map((proj, idx) => (
                <ProjectCard key={idx} {...proj} />
            ))}
        </section>
    </>

  );
}