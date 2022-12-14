import { useEffect, useState } from "react";
import { Service } from "../utils/service/types";
import { changeUrl, urlRegex } from "../utils/service/urlUtils";

export interface ProjectData {
  webImage: string;
  mobileImage: string;
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

    // rewrite above to fetch two urls, one for desktop and one for mobile
    Promise.all([
      fetch(
        "example.com"
        //`https://api.site-shot.com/?url=${safeUrl}&userkey=${process.env.NEXT_PUBLIC_SITE_SHOT_KEY}&width=1280&height=800`
      ),
      fetch(
        "example.com"
        //`https://api.site-shot.com/?url=${safeUrl}&userkey=${process.env.NEXT_PUBLIC_SITE_SHOT_KEY}&width=375&height=812`
      ),
    ])
      .then((responses) =>
        Promise.all(responses.map((response) => response.blob()))
      )
      .then((responses) => {
        const imageObjectURLs = responses.map((response) =>
          URL.createObjectURL(response)
        );

        setResult({
          status: "loaded",
          payload: {
            webImage: imageObjectURLs[0],
            mobileImage: imageObjectURLs[1],
          },
        });
      })
      .catch((error) => setResult({ status: "error", error }));
  }, [url]);

  return result;
};

export default useSiteShot;
