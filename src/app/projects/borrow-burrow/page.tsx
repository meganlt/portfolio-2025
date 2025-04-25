import Image from "next/image";
import Link from "next/link";

export default function BorrowBurrowPage() {
    return (
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <h1 className="text-5xl text-center font-bold">Borrow Burrow</h1>
        <p className="text-lg">
          Borrow Burrow is a platform for sharing tools, craft supplies, or media with friends and family in your real-life community. For fun, it's also branded with a whimsical forest theme. 
        </p>
        <p className="text-lg">
          Technologies used: React, Express, Zustand, PostgreSQL, and AWS S3 for image upload and storage.
        </p>
  
        <section>
          <h2 className="text-3xl font-semibold mt-6 mb-4">Video Demo</h2>
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
          <h2 className="text-3xl font-semibold mt-6 mb-4">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Image
                src="/images/borrow-burrow/homepage.png"
                alt="Borrow Burrow Homepage"
                width={600}
                height={400}
                className="rounded shadow"
              />
              <h3 className="text-xl font-semibold mt-6 mb-4">Homepage: My Den</h3>
              <p className="mt-2">The user's homepage provides areas to preview pending borrow requests from other users, along with lists of items they are currently borrowing or lending out to others.</p>
            </div>
            <div>
              <Image
                src="/images/borrow-burrow/item-detail.png"
                alt="Trinket detail view"
                width={600}
                height={400}
                className="rounded shadow"
              />
              <h3 className="text-xl font-semibold mt-6 mb-4">Community Listings: My Forest</h3>
              <p className="mt-2">Full list of items added by other members, available for borrowing or giveaway. Short list of all community members.</p>
            </div>
            <div>
              <Image
                src="/images/borrow-burrow/item-detail.png"
                alt="Trinket detail view"
                width={600}
                height={400}
                className="rounded shadow"
              />
              <h3 className="text-xl font-semibold mt-6 mb-4">Item Preview: Trinket Detail</h3>
              <p className="mt-2">Dialog window that provides more details on an available item, as well as a place to request to borrow.</p>
            </div>
            <div>
              <Image
                src="/images/borrow-burrow/item-detail.png"
                alt="Trinket detail view"
                width={600}
                height={400}
                className="rounded shadow"
              />
              <h3 className="text-xl font-semibold mt-6 mb-4">User's Item Listing: My Trinkets</h3>
              <p className="mt-2">This page lists all the items added by the user, and allows them to add new items to lend or giveaway.</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-semibold mt-6 mb-4">Future Plans</h2>
          <p className="mt-2">A project is never complete! I'm planning to continue expanding the feature set of this app with these possible ideas:</p>
          <ul className="mt-2">
            <li>Expanding to accommodate multiple communities, along with a new admin role for each community</li>
            <li>Expanded trinket detail, to allow for attaching user manuals or linking videos to instructions</li>
            <li>Basic messaging system to allow users to share instructions for pick-up or drop-off.</li>
            <li>Community Projects, where users can share what they created using tools or supplies borrowed from others</li>
            <li>Karma system that rewards users for lending more items, or having more items available to borrow.</li>
          </ul>
        </section>
  
        <Link href="/projects" className="text-blue-600 hover:underline">
          ← Back to Projects
        </Link>
      </div>
    );
  }