import Image from "next/image";
import Link from "next/link";

export default function BorrowBurrowPage() {
    return (
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <h1 className="text-4xl font-bold">Borrow Burrow</h1>
        <p className="text-lg text-gray-700">
          Borrow Burrow is a community tool-sharing platform with a whimsical forest creatures theme. Designed to promote sustainability and neighborhood collaboration, this app was built using React, Zustand, PostgreSQL, and S3 for image storage.
        </p>
  
        <section>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Video Demo</h2>
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/x11XIDltnJQ"
              title="Borrow Burrow Demo"
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </section>
  
        <section>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Image
                src="/images/borrow-burrow/homepage.png"
                alt="Borrow Burrow Homepage"
                width={600}
                height={400}
                className="rounded shadow"
              />
              <p className="mt-2 text-gray-600">Homepage showcasing featured tools and friendly critters.</p>
            </div>
            <div>
              <Image
                src="/images/borrow-burrow/item-detail.png"
                alt="Trinket detail view"
                width={600}
                height={400}
                className="rounded shadow"
              />
              <p className="mt-2 text-gray-600">Item detail page with photo gallery, description, and borrowing info.</p>
            </div>
          </div>
        </section>
  
        <Link href="/#projects" className="text-blue-600 hover:underline">
          ← Back to Projects
        </Link>
      </div>
    );
  }