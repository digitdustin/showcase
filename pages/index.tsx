import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import ProjectModal from "../components/ProjectModal";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-slate-50 h-full">
      {/* Project Modal */}
      <ProjectModal
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
      />
      {/* Header */}
      <div className="w-full h-52 bg-slate-200">
        <div className="max-w-4xl w-full bg-slate-300 relative h-full mx-auto">
          <div className="absolute w-36 h-36 rounded-full border-white border-4 bg-slate-600 -bottom-20 left-20"></div>
        </div>
        <div className="max-w-4xl w-full mx-auto bg-slate-100 pt-24 pb-8 px-20 mb-8">
          <h1 className="text-4xl font-semibold text-slate-800">Dustin Karp</h1>
          <p className="text-slate-800 text-lg mt-4">
            I'm a software engineer and designer based in Boston, MA. I do a lot
            of frontend and fullstack dev. Check me out on my socials!
          </p>
        </div>
        <div className="max-w-4xl w-full mx-auto bg-slate-100 py-8 px-20 mb-8 space-y-4">
          <h1 className="text-2xl font-semibold text-slate-800">Projects</h1>
          <button
            onClick={() => setProjectModalOpen(true)}
            className="w-full rounded-md bg-slate-200 transition hover:bg-slate-300 py-4 cursor-pointer items-center flex justify-center"
          >
            <p className="text-slate-800 font-semibold ml-2">Add a project</p>
          </button>
        </div>
      </div>
    </div>
  );
}
