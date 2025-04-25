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
                src="/images/ua-manageusers.png"
                alt="Screenshot of User Management Page"
                width={600}
                height={400}
                className="rounded shadow"
              />
              <h3 className="text-xl font-semibold mt-6 mb-4">User Management</h3>
              <p className="mt-2">When users first register, they are set as pending, so they can be accurately assigned the correct role (manager or team member), company, and manager (if they have one).</p>
              <p>This page allows the admin to initially assign pending users, as well as edit those already assigned.</p>
            </div>
            <div>
              <Image
                src="/images/ua-edituser.png"
                alt="Screenshot of User Edit Dialog"
                width={600}
                height={400}
                className="rounded shadow"
              />
              <h3 className="text-xl font-semibold mt-6 mb-4">User Management: Editing User</h3>
              <p className="mt-2">Within a dialog, the admin can edit any user information, such as their role or assigned manager. They can also reset the user's password to a new temporary password, if needed. Then, the user can update their password using the User Account screen.</p>
            </div>
            <div>
              <Image
                src="/images/ua-weeklycontenttall.png"
                alt="Trinket detail view"
                width={600}
                height={400}
                className="rounded shadow"
              />
              <h3 className="text-xl font-semibold mt-6 mb-4">Weekly Content Library</h3>
              <p className="mt-2">Here, the admin can create a library of content for managers to review. Currently, the admin organizes these by quarters, each with 12 weeks of content. He can delete or edit the content for any of these weeks.</p>
            </div>
            <div>
              <Image
                src="/images/ua-pairassignments.png"
                alt="Screenshot of Pair Assignments Page"
                width={600}
                height={400}
                className="rounded shadow"
              />
              <h3 className="text-xl font-semibold mt-6 mb-4">Assignment Creation</h3>
              <p className="mt-2">On this page, the admin can assign a quarter's worth of content to a manager and team-member. Based on the chosen start date, the system will automatically create 12 weeks of content for that manager and team-member pair. Due to the admin's business model, managers can be on a different curriculum schedule with different team members.</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-semibold mt-6 mb-4">Manager Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Image
                src="/images/ua-managerdashboard.png"
                alt="Manager Dashboard Page Screenshot"
                width={600}
                height={400}
                className="rounded shadow"
              />
              <h3 className="text-xl font-semibold mt-6 mb-4">Manager Dashboard</h3>
              <p className="mt-2">The Manager's homepage displays a tabbed list of all employees, with each of their individual paired weekly assignment on the right. This allows managers to quickly navigate between their team members, review the curriculum, and acknowledge they've read the content. "This week's focus" includes an action item related to the curriculum for that week.</p>
            </div>
            <div>
              <Image
                src="/images/ua-account.png"
                alt="Trinket detail view"
                width={600}
                height={400}
                className="rounded shadow"
              />
              <h3 className="text-xl font-semibold mt-6 mb-4">User Account</h3>
              <p className="mt-2">Every user has access to the User Account page, where they can update their information, or change their password.</p>
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