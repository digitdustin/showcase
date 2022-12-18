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
    <div className="flex h-full min-h-screen w-full flex-col bg-slate-50">
      {/* Logo Header */}
      <div className="h-16 w-full border-b border-b-dark-700 bg-dark-900">
        <div className="mx-auto flex h-full w-full items-center justify-between px-6">
          <div className="flex items-center">
            <div className="mr-4 h-7 w-7 rounded-full">
              <HeaderLogo />
            </div>
            <h1 className="mr-2 text-lg font-semibold text-white">Showcase</h1>
            <p className="rounded-sm bg-gradient-to-br from-fuchsia-400 to-indigo-400 px-1 py-px text-xs font-semibold">
              PRO
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="group hidden cursor-pointer justify-between rounded-md border border-indigo-50/20 bg-indigo-50/10 text-sm text-white/70 sm:flex">
              <p className="py-1 px-6">showcase.co/digitdustin</p>
              <div className="flex items-center justify-center rounded-r-[5px] border-l border-l-indigo-50/20 bg-indigo-50/10 px-2 transition group-hover:bg-indigo-50/20">
                <ClipboardIcon className="h-4 w-4 text-white/70" />
              </div>
            </div>
            <button className="group relative flex items-center justify-center overflow-hidden rounded-lg p-[2px] text-white/90 transition duration-500 hover:text-white">
              <div className="absolute inset-0 z-10 h-full w-full scale-[4] bg-gradient-to-br from-black to-transparent transition duration-500 group-hover:rotate-180" />
              <div className="absolute inset-0 scale-[4] bg-fuchsia-400  transition-all duration-500 group-hover:bg-indigo-400"></div>
              <span className="z-10 rounded-md bg-dark-900 px-4 py-2 text-sm">
                Project Settings
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* Settings Header */}
      <div className="flex h-12 w-full items-center justify-center border-b border-b-dark-600 bg-dark-800">
        {/* Settings Header */}
      </div>
      {/* Project Modal */}
      <ProjectModal
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
      />
      <div className="h-full w-full bg-slate-200 p-4">
        {/* Header */}
        <div className="h-full w-full rounded-md bg-white">
          <div className="relative h-52 w-full rounded-t-md bg-red-500">
            {/* Change Banner Image */}
            <div className="group absolute inset-0 z-10 flex h-full w-full cursor-pointer items-center justify-center rounded-t-md transition hover:bg-black/30">
              <div className="flex items-center space-x-2 opacity-0 transition group-hover:opacity-100">
                <CameraIcon className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold text-white">
                  Change Banner Image
                </span>
              </div>
            </div>
            <img
              src="https://media.istockphoto.com/id/1411253803/photo/universal-linkedin-banner-with-pink-sunset-over-the-alps-for-any-profession.jpg?b=1&s=170667a&w=0&k=20&c=V3-D3Hc47eMkqbyPDOvQRqcsCrwZPTckg_1OdDWYoS8="
              className="absolute h-full w-full rounded-t-md object-cover"
            />
            <div className="relative mx-auto h-52 w-full max-w-4xl">
              <div className="absolute -bottom-20 left-1/2 z-20 h-36 w-36 -translate-x-1/2 rounded-full border-4 border-white bg-slate-600 md:left-20 md:translate-x-0">
                {/* Change Avatar Image */}
                <div className="group group absolute inset-0 z-10 flex h-full w-full cursor-pointer items-center justify-center rounded-full transition hover:bg-black/30">
                  <CameraIcon className="h-5 w-5 text-white opacity-0 transition group-hover:opacity-100" />
                </div>
                <img
                  src="https://github.com/digitdustin.png"
                  className="h-full w-full rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto mb-8 w-full max-w-4xl px-20 pt-24 pb-8">
            <h1 className="text-center text-4xl font-semibold text-slate-800 md:text-left">
              Dustin Karp
            </h1>
            <p className="mt-4 text-center text-lg text-slate-800 md:text-left">
              I'm a software engineer and designer based in Boston, MA. I do a
              lot of frontend and fullstack dev. Check me out on my socials!
            </p>
            <div className="mt-4 flex flex-row justify-center space-x-3  md:justify-start">
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
          <div className="mx-auto mb-8 w-full max-w-4xl space-y-4 py-8 px-20">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-slate-800">
                Projects
              </h1>
              <button
                onClick={() => setProjectModalOpen(true)}
                className="flex items-center space-x-2 rounded-md bg-gradient-to-br from-indigo-400 to-fuchsia-400 py-2 px-4 text-sm text-white"
              >
                <p>Add Project</p>
                <PlusIcon className="h-4 w-4 text-white" />
              </button>
            </div>
            <div className="flex w-full flex-col items-center justify-center space-y-2 rounded-md bg-slate-100 py-8 transition">
              <PlusCircleIcon className="h-8 w-8 text-slate-400" />
              <p className="ml-2 text-slate-500">
                You currently have no projects... Click add to create one!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
