import Image from "next/image";
import Link from "next/link";

export default function TonkadalePage() {
    return (
      <div className="mx-auto p-6 space-y-8">
        <h1 className="text-5xl text-center font-bold">Tonkadale</h1>
        <p className="text-lg text-center ">
          Content re-organization and styling of educational resources for greenhouse customers 
        </p>
        <section className="h-100 relative">
          <Image
            src="/images/td-Feature.png"
            alt="Collage of project designs"
            fill={true}
            objectFit="cover"
            className="shadow"
          />
        </section>
        <section>
          <h2 className="text-3xl font-semibold mt-12 mb-12 text-center">Project Overview</h2>
          <p className="">The client had goals to become a trusted local resource for all things related to houseplants and gardening in the Twin Cities area.</p>
          <p>They brought me in to create solutions for several hub pages that could organize their learning resources while being easy to maintain for a team without advanced coding knowledge.</p>
          <p>This project was all about balancing between utilizing their non-technical site features (Shogun Page Builder and BigCommerce) and writing custom code to accomplish their goals, along with training materials to help in maintaining content.</p>
        </section>
        <section className="bg-sky-100 p-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Contributions:</h3>
              <ul>
                <li>A custom "Learn" Hub page to house major content categories</li>
                <li>A custom "Video Library" page to house and filter video tutorials</li>
                <li>An updated "Blog" listing page</li>
                <li>A "Plant Care A-Z" index page to display basic information for 50+ individual plants</li>
                <li>A custom "Podcast" page to provide background and episode links to encourage subscriptions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Technologies Used:</h3>
              <ul>
                <li>Figma</li>
                <li>BigCommerce with Shogun Page Builder</li>
                <li>Stencil-Cli, a handlebars-based theme engine</li>
                <li>Javascript</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>          
        </section>
        <section>
          <div className="grid grid-cols-4 gap-6">
            <div className=""><h2 className="text-3xl font-semibold mb-4">Process</h2></div>
            <div className="col-span-3">
              <p>
                First, I met with the business owner to determine their goals for this page, which was to organize helpful customer resources, as well as position the business as a leader in educational content for the local area.
              </p>
              <p>
                We brainstormed additional pages that could be created to support the overall business goals, such as an additional hub page for housing videos and perennial-specific content. Then, I produced high-fidelity wireframes, performed a content taxonomy audit of blog and video content to recommend tags and consistent organizational filters, and built out the pages utilizing the Shogun web builder app.
              </p>
              <p>
                For theme changes, I installed a local version of their site theme, run on BigCommerce, to edit and preview style updates on my local machine, prior to recompiling and uploading an adjusted custom theme to the site.
              </p>
              <p>
                For certain features, such as the filters on the video page, I created custom HTML blocks with styles and scripts to add custom layout and functionality on top of what was possible using their page builder tool. To assist with future editing of these areas, I created custom documentation and flow documents to guide internal media employees through the process and provide future reference.
              </p>
            </div>
          </div>
        </section>
          
        <section className="bg-sky-100 p-4">
          <h2 className="text-3xl font-semibold mt-6 mb-4 text-center">Support &amp; Documentation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mt-6 mb-4">Blog Tagging Audit</h3>
              <p className="mt-2">Visual organization and breakdown of a selection of blog articles, organized into a recommended tag structure</p>
              <Image
                src="/images/td-TaggingExercise.jpg"
                alt="Visual of articles organized by tag"
                width={600}
                height={400}
                className="shadow"
              />
              
            </div>
            <div>
              <h3 className="text-xl font-semibold mt-6 mb-4">Update Guide Documentation</h3>
              <p className="mt-2">A thorough visual guide to updating content on the Video Library page, used for training and during updates by the greenhouse's media coordinators.</p>
              <Image
                src="/images/td-updateguide.jpg"
                alt="Visual of a step-by-step guide, and flowchart to explain update process for the Video Library page"
                width={600}
                height={400}
                className="shadow"
              />        
            </div>
            
            
          </div>
        </section>
        <section className="p-4">
          <h2 className="text-3xl font-semibold mt-6 mb-12 text-center">Full Page Visuals</h2>
          <div className="grid grid-cols-3">
            <div className="bg-sky-100 p-6">
              <h3 className="text-xl font-semibold mb-4">Learn Hub Page</h3>
              <p className="mt-2">The jumping off point for the various learning resources and subpages, this page had to handle a lot of various content-types, feature timely content, and house easy access to common downloads, all in one place.</p>
              <p>Across the board, every major page in the project included a new hero image section. The greenhouse brand style features bright, lively photography often. This area gives this photography a place to shine, and provides a visual opportunity to support page content. These images are rotated often.</p>
              <p>The top of the page organizes sub-pages with visual previews to support the subject matter.</p>
              <p>The middle content helps highlight timely resources, updated weekly.</p>
              <p>The bottom section holds support visuals and downloads with a custom-styled vertical tab interface. Built to be a reusable pattern, the client just has to apply a class in their page builder to turn the default provided horizontal tab component into this vertical version.</p>
            </div>
            <div className="col-span-2">
              <Image
                src="/images/td-LearnPage.png"
                alt="Full Page Design of the Learning Hub Page"
                width={600}
                height={400}
                className="shadow"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 mt-12">
            <div className="bg-sky-100 p-6">
              <h3 className="text-xl font-semibold mb-4">Video Library Page</h3>
              <p className="mt-2">The greenhouse films regular video features and tutorials that they host on Youtube. However, they didn't want to rely on sending users a Youtube channel, and wanted to be able to support video content with product suggestions.</p>
              <p>To solve this, I created two options for a layout - one that was a simple list, and another with more advanced features.</p>
              <p>The client chose the advanced layout, which included new theme styles, and script to filter a list of video links by tag. Each video links to a page that displays the video in an embedded player.</p>
              <p>Here, the client can use the BigCommerce and Shogun Page Builder plugins to add supporting product links.</p>
              <p>To assist the client with updating this page, I created the support document above to outline the process and provide a visual breakdown of the code structure.</p>
            </div>
            <div className="col-span-2">
              <Image
                src="/images/td-videolibrary.png"
                alt="Full Page Design of the Video Library Page"
                width={600}
                height={400}
                className="shadow"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 mt-12">
            <div className="bg-sky-100 p-6">
              <h3 className="text-xl font-semibold mb-4">Care Card A-Z page</h3>
              <p className="mt-2">Previously, this page was an extremely long list of accordions, each that held a single image with no supporting text. The updated layout adjusted the accordion contents to display image contents as true web text.</p>
              <p> Work included custom layout classes, custom classes to add to page-builder features to quickly apply the style anywhere needed, and a scripted alphabetical navigation.</p>
            </div>
            <div className="col-span-2">
              <Image
                src="/images/td-CareCardA-Z.png"
                alt="Full page view of the Care Card A-Z Page"
                width={600}
                height={400}
                className="shadow"
              />
            </div>
          </div>
        </section>
  
        <Link href="/projects" className="text-blue-600 hover:underline">
          ← Back to Projects
        </Link>
      </div>
    );
  }