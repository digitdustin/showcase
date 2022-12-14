import { useEffect, useState } from "react";
import { Service } from "../utils/service/types";
import { changeUrl } from "../utils/service/urlUtils";

export interface ProjectInfo {
  title: string;
  image: string;
}

var expression =
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);

const useProjectInfo = (projectUrl: string) => {
  const [result, setResult] = useState<Service<ProjectInfo>>({
    status: "loading",
  });
  const [projectInfo, setProjectInfo] = useState<ProjectInfo>({
    title: "",
    image: "",
  });

  useEffect(() => {
    console.log("here");
    if (!projectUrl) {
      console.log("no url");
      return;
    } else if (!projectUrl.match(regex)) {
      console.log("invalid url");
      return;
    }
    // change URL format to https:// if it's not already
    let safeUrl = changeUrl(projectUrl);

    const fetchProjectTitle = async () => {
      // first fetch the projectURL and try to extract the title from the page
      fetch(safeUrl)
        .then((response) => response.text())
        .then((response) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(response, "text/html");
          const title = doc.querySelector("title")?.textContent;
          if (title) {
            console.log(title);
            setProjectInfo({ ...projectInfo, title });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchProjectTitle();

    // then fetch a project image from site-shot API using uRL:
    // https://api.site-shot.com/?url={URL}&userkey={API_KEY}&width={WIDTH}&height={HEIGHT}
    // get one with dimensions 1280x800 and another at 375x812

    /* fetch(
      `https://api.site-shot.com/?url=${safeUrl}&userkey=${process.env.NEXT_PUBLIC_SITE_SHOT_KEY}&width=1280&height=800&response_type=json`
    )
      .then((response) => response.blob())
      .then((response) => {
        const imageObjectURL = URL.createObjectURL(response);

        setProjectInfo({ ...projectInfo, image: imageObjectURL });
      })
      .catch((error) => {
        console.log(error);
      }); */

    setResult({ status: "loaded", payload: projectInfo });

    /* fetch(
      `https://api.site-shot.com/?url=${safeUrl}&userkey=${process.env.NEXT_PUBLIC_SITE_SHOT_KEY}&width=375&height=812&format=json`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setProjectInfo({ ...projectInfo, image: response.url });
      })
      .catch((error) => {
        console.log(error);
      }); */
  }, [projectUrl]);

  return result;
};

export default useProjectInfo;
