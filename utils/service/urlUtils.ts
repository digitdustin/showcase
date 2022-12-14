export const changeUrl: (url: string) => string = (url: string) => {
  const urlPattern = new RegExp(
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
  );
  let string = url;

  if (urlPattern.test(string)) {
    //string is url

    ///clear http && https from string
    string = string.replace("https://", "").replace("http://", "");

    //add https to string
    string = `https://${string}`;
  }
  return string;
};

const urlExpression =
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
export const urlRegex = new RegExp(urlExpression);
