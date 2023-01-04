import { Notebook } from "components/Landing/Cards/Notebook";
import GradientHeaderLogo from "components/Landing/GradientHeaderLogo";
import React from "react";

const index = () => {
  return (
    <div className="flex h-full min-h-screen w-full flex-col overflow-hidden bg-dark-900">
      {/* Header */}
      <div className="w-full bg-dark-900 py-2">
        <div className="mx-auto flex h-full w-full items-center justify-between px-4 sm:px-6">
          <div className="flex items-center">
            <div className="mr-2 h-6 w-auto rounded-full">
              <GradientHeaderLogo />
            </div>
            <h1 className="mr-2 font-grotesque text-lg font-semibold text-white">
              Totem
            </h1>
          </div>
          <button className="group relative flex items-center justify-center overflow-hidden rounded-lg p-[2px] text-white/90 transition duration-500 hover:text-white">
            <div className="absolute inset-0 z-10 h-full w-full scale-[4] bg-gradient-to-br from-black to-transparent transition duration-500 group-hover:rotate-180" />
            <div className="absolute inset-0 scale-[4] bg-fuchsia-400  transition-all duration-500 group-hover:bg-indigo-400"></div>
            <span className="z-10 rounded-md bg-dark-900 px-4 py-2 text-sm">
              <p className="flex items-center">
                <span>&nbsp;Create your Totem</span>
              </p>
            </span>
          </button>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "radial-gradient(#e879f9 1px, transparent 0)",
          backgroundSize: "40px 40px",
          backgroundPosition: "-19px -19px",
        }}
        className="relative flex w-full flex-1 items-center justify-center bg-dark-900"
      >
        {/* Radial Gradient */}
        <div
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 90%, transparent 20%, rgba(20, 20, 20, .8), rgba(20, 20, 20, 1) 90%)",
          }}
          className="absolute inset-0 z-0 h-full w-full"
        />
        <div className="-mt-72 flex flex-col items-center px-8">
          <div className="absolute -bottom-20 w-[550px] sm:w-[700px] md:-bottom-36 md:w-[800px] lg:-bottom-52 lg:w-[900px]">
            <Notebook />
          </div>

          <h1 className="z-20 text-center font-grotesque text-4xl font-semibold text-white">
            Your new,&nbsp;
            <span className="relative bg-gradient-to-br from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              <span className="neon absolute inset-0 bg-gradient-to-br from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent opacity-50">
                beautified
              </span>
              beautified
            </span>
            &nbsp;link in bio.
          </h1>
          <p className="z-20 mt-4 px-10 text-center text-base text-white/70">
            Totem is a beautiful, customizable link in bio made for creators,
            builders, and designers.
          </p>

          <div className="z-20 mt-8 flex flex-col items-center">
            <div className="flex items-center rounded-md border border-dark-700 bg-dark-900 p-1 shadow-lg shadow-violet-400/10">
              <p className="pl-2 text-right text-white">totem.co/</p>
              <input
                className="ml-1 rounded-md bg-dark-900 py-2 pr-4 text-white/90 !outline-none"
                placeholder="username"
              />
              <button className="ml-2 rounded-sm bg-gradient-to-br from-fuchsia-400 to-indigo-400 px-4 py-2 text-white">
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
