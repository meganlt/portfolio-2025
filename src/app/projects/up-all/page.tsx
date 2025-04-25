import Image from "next/image";
import Link from "next/link";

export default function UpAllPage() {
    return (
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <h1 className="text-5xl text-center font-bold">UpAll</h1>
        <p className="text-lg">
          UpAll was a group project with my team at Prime Digital Academy. Together, we created a custom web application for our client, Ken. This platform aimed to automate delivering educational curriculum to managers, for the ultimate purpose of improving the manager/team-member relationship.
        </p>
        
        <p className="text-lg">
          Technologies used: React, Express, Zustand, PostgreSQL, and Material UI.
        </p>
        <section>
          <h2 className="text-3xl font-semibold mt-6 mb-4">Preview</h2>
          <div>
            <Image
              src="/images/up-all-preview.gif"
              alt="animated preview of website features"
              width={600}
              height={400}
            />
          </div>
        </section>
  
        <section>
          <h2 className="text-3xl font-semibold mt-6 mb-4">Admin Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Image
                src="/images/borrow-burrow/homepage.png"
                alt="Borrow Burrow Homepage"
                width={600}
                height={400}
                className="rounded shadow"
              />
              <h3 className="text-xl font-semibold mt-6 mb-4">User Management</h3>
              <p className="mt-2">Homepage showcasing featured tools and friendly critters.</p>
            </div>
            <div>
              <Image
                src="/images/borrow-burrow/item-detail.png"
                alt="Trinket detail view"
                width={600}
                height={400}
                className="rounded shadow"
              />
              <h3 className="text-xl font-semibold mt-6 mb-4">Weekly Content Library</h3>
              <p className="mt-2">Item detail page with photo gallery, description, and borrowing info.</p>
            </div>
            <div>
              <Image
                src="/images/borrow-burrow/item-detail.png"
                alt="Trinket detail view"
                width={600}
                height={400}
                className="rounded shadow"
              />
              <h3 className="text-xl font-semibold mt-6 mb-4">Assignment Creation</h3>
              <p className="mt-2">Item detail page with photo gallery, description, and borrowing info.</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-semibold mt-6 mb-4">Manager Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Image
                src="/images/borrow-burrow/homepage.png"
                alt="Borrow Burrow Homepage"
                width={600}
                height={400}
                className="rounded shadow"
              />
              <h3 className="text-xl font-semibold mt-6 mb-4">Manager Dashboard</h3>
              <p className="mt-2">Homepage showcasing featured tools and friendly critters.</p>
            </div>
            <div>
              <Image
                src="/images/borrow-burrow/item-detail.png"
                alt="Trinket detail view"
                width={600}
                height={400}
                className="rounded shadow"
              />
              <h3 className="text-xl font-semibold mt-6 mb-4">User Account</h3>
              <p className="mt-2">Item detail page with photo gallery, description, and borrowing info.</p>
            </div>
          </div>
          <h2 className="text-3xl font-semibold mt-6 mb-4">My Contributions:</h2>
          <ul>
            <li>Build-master role (merging pull requests and overseeing additions by team members)</li>
            <li>Initial wireframes and feature notes for scoping</li>
            <li>Co-creation of overall database structure</li>
            <li>Back and front-end code contributions were mainly focused on the Manage Users page, Manager Dashboard, and User Account pages.</li>
            <li>Global Styling via vanilla CSS</li>
          </ul>
        </section>
  
        <Link href="/projects" className="text-blue-600 hover:underline">
          ← Back to Projects
        </Link>
      </div>
    );
  }