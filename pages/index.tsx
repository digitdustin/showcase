import { useState } from "react";
import ProjectModal from "../components/ProjectModal/ProjectModal";
import HeaderLogo from "../components/shared/HeaderLogo";
import {
  CameraIcon,
  PlusIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";
import { ClipboardIcon } from "@heroicons/react/24/outline";

const SOCIAL_CLASSNAME =
  "opacity-80 transition hover:opacity-100 hover:-translate-y-[3px]";
const SOCIAL_STYLE = { height: 40, width: 40 };

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-slate-50 h-full flex flex-col">
      {/* Logo Header */}
      <div className="w-full bg-dark-900 h-16 border-b border-b-dark-700">
        <div className="w-full mx-auto h-full flex items-center justify-between px-6">
          <div className="flex items-center">
            <div className="w-7 h-7 rounded-full mr-4">
              <HeaderLogo />
            </div>
            <h1 className="text-white text-lg font-semibold mr-2">Showcase</h1>
            <p className="px-1 py-px rounded-sm font-semibold bg-gradient-to-br from-fuchsia-400 to-indigo-400 text-xs">
              PRO
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-white/70 flex cursor-pointer group justify-between bg-indigo-50/10 border border-indigo-50/20 rounded-md text-sm">
              <p className="py-1 px-6">showcase.co/digitdustin</p>
              <div className="flex items-center rounded-r-[5px] justify-center border-l border-l-indigo-50/20 bg-indigo-50/10 group-hover:bg-indigo-50/20 transition px-2">
                <ClipboardIcon className="h-4 w-4 text-white/70" />
              </div>
            </div>
            <button className="p-[2px] relative rounded-lg flex items-center justify-center group overflow-hidden transition hover:text-white text-white/90 duration-500">
              <div className="group-hover:rotate-180 transition duration-500 scale-[4] bg-gradient-to-br from-black to-transparent w-full inset-0 h-full absolute z-10" />
              <div className="absolute inset-0 scale-[4] group-hover:bg-indigo-400  bg-fuchsia-400 transition-all duration-500"></div>
              <span className="px-4 py-2 text-sm rounded-md bg-dark-900 z-10">
                Project Settings
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* Settings Header */}
      <div className="w-full h-12 bg-dark-800 border-b border-b-dark-600 flex justify-center items-center">
        {/* Settings Header */}
      </div>
      {/* Project Modal */}
      <ProjectModal
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
      />
      <div className="w-full h-full p-4 bg-slate-200">
        {/* Header */}
        <div className="w-full h-full rounded-md bg-white">
          <div className="w-full h-52 bg-red-500 rounded-t-md relative">
            {/* Change Banner Image */}
            <div className="w-full h-full hover:bg-black/30 group rounded-t-md z-10 transition absolute inset-0 cursor-pointer flex items-center justify-center">
              <div className="flex items-center space-x-2 group-hover:opacity-100 opacity-0 transition">
                <CameraIcon className="h-5 w-5 text-white" />
                <span className="text-white text-sm font-semibold">
                  Change Banner Image
                </span>
              </div>
            </div>
            <img
              src="https://media.istockphoto.com/id/1411253803/photo/universal-linkedin-banner-with-pink-sunset-over-the-alps-for-any-profession.jpg?b=1&s=170667a&w=0&k=20&c=V3-D3Hc47eMkqbyPDOvQRqcsCrwZPTckg_1OdDWYoS8="
              className="w-full h-full object-cover rounded-t-md absolute"
            />
            <div className="max-w-4xl h-52 w-full relative mx-auto">
              <div className="absolute z-20 w-36 h-36 rounded-full border-white border-4 bg-slate-600 -bottom-20 left-20">
                {/* Change Avatar Image */}
                <div className="w-full rounded-full group h-full hover:bg-black/30 group z-10 transition absolute inset-0 cursor-pointer flex items-center justify-center">
                  <CameraIcon className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition" />
                </div>
                <img
                  src="https://github.com/digitdustin.png"
                  className="w-full h-full rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="max-w-4xl w-full mx-auto pt-24 pb-8 px-20 mb-8">
            <h1 className="text-4xl font-semibold text-slate-800">
              Dustin Karp
            </h1>
            <p className="text-slate-800 text-lg mt-4">
              I'm a software engineer and designer based in Boston, MA. I do a
              lot of frontend and fullstack dev. Check me out on my socials!
            </p>
            <div className="mt-4 flex flex-row space-x-3">
              <SocialIcon
                network="github"
                url="https://github.com/digitdustin"
                className={SOCIAL_CLASSNAME}
                style={SOCIAL_STYLE}
              />
              <SocialIcon
                network="linkedin"
                url="https://linkedin.com/in/dustinkarp"
                className={SOCIAL_CLASSNAME}
                style={SOCIAL_STYLE}
              />
              <SocialIcon
                network="twitter"
                url="https://twitter.com/dkarpart"
                className={SOCIAL_CLASSNAME}
                style={SOCIAL_STYLE}
              />
              <SocialIcon
                network="youtube"
                url="https://youtube.com/channel/UC8yGvmSxpuglOAnE6gF4LwA"
                className={SOCIAL_CLASSNAME}
                style={SOCIAL_STYLE}
              />
              <SocialIcon
                network="email"
                url="mailto:dustinkarp52@gmail.com"
                className={SOCIAL_CLASSNAME}
                style={SOCIAL_STYLE}
              />
            </div>
          </div>
          <div className="max-w-4xl w-full mx-auto py-8 px-20 mb-8 space-y-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold text-slate-800">
                Projects
              </h1>
              <button
                onClick={() => setProjectModalOpen(true)}
                className="bg-gradient-to-br flex space-x-2 items-center text-white from-indigo-400 to-fuchsia-400 py-2 px-4 text-sm rounded-md"
              >
                <p>Add Project</p>
                <PlusIcon className="h-4 w-4 text-white" />
              </button>
            </div>
            <div className="w-full rounded-md bg-slate-100 transition py-8 items-center flex flex-col space-y-2 justify-center">
              <PlusCircleIcon className="h-8 w-8 text-slate-400" />
              <p className="text-slate-500 ml-2">
                You currently have no projects... Click add to create one!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
