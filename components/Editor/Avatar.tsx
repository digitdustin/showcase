import { CameraIcon } from "@heroicons/react/24/solid";
import { EditorStyle } from "../../stores/useEditorStylesStore";
import { handleFileUpload } from "../../utils/images/imageUtils";
import Tooltip from "../shared/Tooltip";

const Avatar = ({
  avatarShape,
  setAvatarShape,
  avatarImage,
  setAvatarImage,
  editorStyle,
}: {
  avatarShape: "circle" | "square";
  setAvatarShape: React.Dispatch<React.SetStateAction<"circle" | "square">>;
  avatarImage: string;
  setAvatarImage: React.Dispatch<React.SetStateAction<string>>;
  editorStyle: EditorStyle;
}) => {
  return (
    <div
      className={`absolute -bottom-20 left-1/2 z-20 h-36 w-36 -translate-x-1/2 border-4 bg-slate-600 md:left-20 md:translate-x-0 ${
        editorStyle === "grotesque" ? "border-dark-800" : "border-white"
      } ${avatarShape === "circle" ? "rounded-full" : "rounded-lg"}`}
    >
      <div className="group relative">
        <div className="absolute bottom-full h-14 w-full"></div>
        <Tooltip interactive position="top">
          <div className="flex items-center space-x-2">
            <div
              onClick={() => setAvatarShape("square")}
              className={`flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm p-1 transition hover:bg-dark-700 ${
                avatarShape === "square" ? "bg-dark-700" : ""
              }`}
            >
              <div className="h-full w-full rounded-sm border"></div>
            </div>
            <div className="mx-2 h-full w-1 bg-white"></div>
            <div
              onClick={() => setAvatarShape("circle")}
              className={`flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm p-1 transition hover:bg-dark-700 ${
                avatarShape === "circle" ? "bg-dark-700" : ""
              }`}
            >
              <div className="h-full w-full rounded-full border"></div>
            </div>
          </div>
        </Tooltip>
        {/* Change Avatar Image */}
        <div
          className={`group/overlay absolute inset-0 z-10 flex h-full w-full cursor-pointer items-center justify-center transition hover:bg-black/30 ${
            avatarShape === "circle" ? "rounded-full" : "rounded-md"
          }`}
        >
          <label
            htmlFor={"avatar-image-upload"}
            className="flex h-full w-full cursor-pointer items-center justify-center"
          >
            <CameraIcon className="h-5 w-5 text-white opacity-0 transition group-hover/overlay:opacity-100" />
            <input
              type="file"
              id={"avatar-image-upload"}
              className="hidden"
              accept="image/*"
              onChange={(e) => {
                handleFileUpload({
                  e,
                  setImage: setAvatarImage,
                });
              }}
            />
          </label>
        </div>
        <img
          src={avatarImage}
          className={`h-full w-full ${
            avatarShape === "circle" ? "rounded-full" : "rounded-md"
          }`}
        />
      </div>
    </div>
  );
};

export default Avatar;
