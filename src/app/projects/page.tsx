import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Borrow Burrow",
    thumbnail: "/images/borrow-burrow-preview.gif",
    type: "Development",
    description: "A whimsical tool-sharing app for forest-dwelling critters.",
    link: "/projects/borrow-burrow",
  },
  {
    title: "Up All",
    thumbnail: "/images/up-all-preview.gif",
    type: "Development",
    description: "A platform for managers to learn better communication and collaboration with team members",
    link: "/projects/up-all",
  }
];

export default function ProjectsPage() {
  return (
    <>
        <section className="max-w-3/4 text-center mx-auto p-8">
            <h2 className="text-5xl font-bold">Projects</h2>
            <p className="p-4">Here's a preview of some of my recent work:</p>
        </section>
        <section className="p-8 grid gap-4 md:grid-cols-2">
            {projects.map((proj, idx) => (
                <ProjectCard key={idx} {...proj} />
            ))}
        </section>
    </>

  );
}