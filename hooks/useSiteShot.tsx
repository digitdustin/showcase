import { useEffect, useState } from "react";
import { Service } from "../utils/service/types";
import { changeUrl, urlRegex } from "../utils/service/urlUtils";

export interface ProjectData {
  image: string;
  color: string;
}

const useSiteShot = (url: string) => {
  const [result, setResult] = useState<Service<ProjectData>>({
    status: "init",
  });

  useEffect(() => {
    if (!url) {
      console.log("no url");
      return;
    }
    if (!url.match(urlRegex)) {
      console.log("invalid url");
      return;
    }
    setResult({ status: "loading" });
    const safeUrl = changeUrl(url);
    fetch(
      `https://api.site-shot.com/?url=${safeUrl}&userkey=${process.env.NEXT_PUBLIC_SITE_SHOT_KEY}&width=1280&height=800`
    )
      .then((response) => response.blob())
      .then((response) => {
        const imageObjectURL = URL.createObjectURL(response);
        // todo: get vibrant color from image
        // for now, just set color to blue
        const color = "#207dff";
        setResult({
          status: "loaded",
          payload: { image: imageObjectURL, color },
        });
      })
      .catch((error) => setResult({ status: "error", error }));
  }, [url]);

  return result;
};

export default useSiteShot;
