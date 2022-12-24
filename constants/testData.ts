import { AvailableSocial, Social } from "./editor/types";

export const testName = "Dustin Karp";

export const testBio =
  "I'm a software engineer and designer based in Boston, MA. I do a lot of frontend and fullstack dev. Check me out on my socials!";

export const testSocials: Social[] = [
  {
    network: "github",
    url: "https://github.com/digitdustin",
  },
  {
    network: "linkedin",
    url: "https://linkedin.com/in/dustinkarp",
  },
  {
    network: "twitter",
    url: "https://twitter.com/dkarpart",
  },
  {
    network: "youtube",
    url: "https://youtube.com/channel/UC8yGvmSxpuglOAnE6gF4LwA",
  },
  {
    network: "email",
    url: "mailto:dustinkarp52@gmail.com",
  },
];

export const availableSocials: AvailableSocial[] = [
  {
    network: "github",
    placeholder: "github.com/username",
    color: "#24292e",
  },
  {
    network: "linkedin",
    placeholder: "linkedin.com/in/username",
    color: "#007fb1",
  },
  {
    network: "twitter",
    placeholder: "twitter.com/username",
    color: "#00aced",
  },
  {
    network: "youtube",
    placeholder: "youtube.com/channel/username",
    color: "#ff3333",
  },
  {
    network: "email",
    placeholder: "user@email.com",
    color: "#7F7F7F",
  },
  {
    network: "instagram",
    placeholder: "instagram.com/username",
    color: "#e94475",
  },
  {
    network: "facebook",
    placeholder: "facebook.com/username",
    color: "#3b5998",
  },
  {
    network: "twitch",
    placeholder: "twitch.tv/username",
    color: "#6441A5",
  },
  {
    network: "pinterest",
    placeholder: "pinterest.com/username",
    color: "#cb2128",
  },
  {
    network: "spotify",
    placeholder: "spotify.com/user/username",
    color: "#2EBD59",
  },
  {
    network: "soundcloud",
    placeholder: "soundcloud.com/username",
    color: "#FF5700",
  },
  {
    network: "medium",
    placeholder: "medium.com/@username",
    color: "#333332",
  },
  {
    network: "dribbble",
    placeholder: "dribbble.com/username",
    color: "#ea4c89",
  },
  {
    network: "behance",
    placeholder: "behance.net/username",
    color: "#007CFF",
  },
  {
    network: "reddit",
    placeholder: "reddit.com/user/username",
    color: "#FF4500",
  },
  {
    network: "snapchat",
    placeholder: "snapchat.com/add/username",
    color: "#FFC91B",
  },
  {
    network: "tumblr",
    placeholder: "username.tumblr.com",
    color: "#2c4762",
  },
  /* {
    network: "discord",
    placeholder: "discord.com/username",
    color: "#7289DA",
  },
  {
    network: "stackoverflow",
    placeholder: "stackoverflow.com/users/username",
    color: "#ed803d",
  },
  {
    network: "tiktok",
    placeholder: "tiktok.com/@username",
    color: "#000000",
  }, */
];

export const backgroundColors = [
  "#FFFFFF",
  "#F8F8FF",
  "#F5F5F5",
  "#F3E5AB",
  "#DFCFFF",
  "#F08080",
  "#AFEEEE",
  "#FFA07A",
  "#D3D3D3",
  "#D0ECEF",
];

export const textColors = [
  "#2D2D2D",
  "#A9A9A9",
  "#00008B",
  "#006400",
  "#8B0000",
  "#800080",
  "#FF7F50",
  "#00CED1",
  "#E9967A",
  "#9400D3",
];

export interface ColorCombo {
  color1: {
    color: string;
    name: string;
  };
  color2: {
    color: string;
    name: string;
  };
}

export interface FontObject {
  name: string;
  className: string;
  fontFamily: string;
  fallback: string;
}

/*
  sans: ["DM Sans", "sans-serif"],
  serif: ["Source Serif Pro", "serif"],
  mono: ["Chivo Mono", "monospace"],
  grotesque: ["ambit", "sans-serif"],
*/

export const fonts: FontObject[] = [
  {
    name: "default",
    className: "font-sans",
    fontFamily: "DM Sans",
    fallback: "sans-serif",
  },
  {
    name: "serif",
    className: "font-serif",
    fontFamily: "Source Serif Pro",
    fallback: "serif",
  },
  {
    name: "mono",
    className: "font-mono",
    fontFamily: "Chivo Mono",
    fallback: "monospace",
  },
  {
    name: "grotesque",
    className: "font-grotesque",
    fontFamily: "ambit",
    fallback: "sans-serif",
  },
];

export const colorCombos: ColorCombo[] = [
  {
    color1: {
      color: "#FFFFFF",
      name: "White",
    },
    color2: {
      color: "#2D2D2D",
      name: "Black",
    },
  },
  {
    color1: {
      name: "Coral",
      color: "#F96167",
    },
    color2: {
      name: "Yellow",
      color: "#FCE77D",
    },
  },
  {
    color1: {
      name: "Yellow",
      color: "#F9D342",
    },
    color2: {
      name: "Charcoal",
      color: "#292826",
    },
  },
  {
    color1: {
      name: "Pink",
      color: "#DF678C",
    },
    color2: {
      name: "Purple",
      color: "#3D155F",
    },
  },
  {
    color1: {
      name: "Green",
      color: "#CCF381",
    },
    color2: {
      name: "Purple",
      color: "#4831D4",
    },
  },
  {
    color1: {
      name: "Purple",
      color: "#4A274F",
    },
    color2: {
      name: "Orange",
      color: "#F0A07C",
    },
  },
  {
    color1: {
      name: "Eggplant",
      color: "#2B3252",
    },
    color2: {
      name: "Yellow",
      color: "#FAD744",
    },
  },
  {
    color1: {
      name: "Yellow",
      color: "#FFF748",
    },
    color2: {
      name: "Purple",
      color: "#3C1A5B",
    },
  },
  {
    color1: {
      name: "Blue",
      color: "#2F3C7E",
    },
    color2: {
      name: "Pink",
      color: "#FBEAEB",
    },
  },
  {
    color1: {
      name: "Red",
      color: "#EC4D37",
    },
    color2: {
      name: "Black",
      color: "#1D1B1B",
    },
  },
  {
    color1: {
      name: "White",
      color: "#FFFFFF",
    },
    color2: {
      name: "Blue",
      color: "#8AAAE5",
    },
  },
  {
    color1: {
      name: "Green",
      color: "#295F2D",
    },
    color2: {
      name: "Yellow",
      color: "#FFE67C",
    },
  },
  {
    color1: {
      name: "Orange",
      color: "#F4A950",
    },
    color2: {
      name: "Black",
      color: "#161B21",
    },
  },
  {
    color1: {
      name: "Pink",
      color: "#ED2188",
    },
    color2: {
      name: "Purple",
      color: "#080A52",
    },
  },
  {
    color1: {
      name: "Brown",
      color: "#4A171E",
    },
    color2: {
      name: "Mustard",
      color: "#E2B144",
    },
  },
  {
    color1: {
      name: "Red",
      color: "#D2302C",
    },
    color2: {
      name: "White",
      color: "#F7F7F9",
    },
  },
  {
    color1: {
      name: "Teal",
      color: "#358597",
    },
    color2: {
      name: "Pink",
      color: "#F4A896",
    },
  },
  {
    color1: {
      name: "Yellow",
      color: "#E7D045",
    },
    color2: {
      name: "Purple",
      color: "#A04EF6",
    },
  },
  {
    color1: {
      name: "Charcoal",
      color: "#262223",
    },
    color2: {
      name: "Rose",
      color: "#DDC6B6",
    },
  },
  {
    color1: {
      name: "Beige",
      color: "#F4EFEA",
    },
    color2: {
      name: "Red",
      color: "#7D141D",
    },
  },
  {
    color1: {
      name: "Blue",
      color: "#234E70",
    },
    color2: {
      name: "Yellow",
      color: "#FBF8BE",
    },
  },
  {
    color1: {
      name: "Red",
      color: "#CC313D",
    },
    color2: {
      name: "Pink",
      color: "#F7C5CC",
    },
  },
  {
    color1: {
      name: "Purple",
      color: "#E2D3F4",
    },
    color2: {
      name: "Blue",
      color: "#013DC4",
    },
  },
  {
    color1: {
      name: "Green",
      color: "#99F443",
    },
    color2: {
      name: "Pink",
      color: "#EC449B",
    },
  },
  {
    color1: {
      name: "Terracotta",
      color: "#96351E",
    },
    color2: {
      name: "Sand",
      color: "#DBB98F",
    },
  },
  {
    color1: {
      name: "Purple",
      color: "#E2D1F9",
    },
    color2: {
      name: "Teal",
      color: "#317773",
    },
  },
  {
    color1: {
      name: "Green",
      color: "#53A57D",
    },
    color2: {
      name: "LinenWhite",
      color: "#FBF7F4",
    },
  },
  {
    color1: {
      name: "HotPink",
      color: "#FF69B4",
    },
    color2: {
      name: "NeonBlue",
      color: "#00FFFF",
    },
  },
  {
    color1: {
      name: "Sage",
      color: "#CFCAA8",
    },
    color2: {
      name: "DarkPurple",
      color: "#635E87",
    },
  },
  {
    color1: {
      name: "Mustard",
      color: "#E3B448",
    },
    color2: {
      name: "ForestGreen",
      color: "#3A6B35",
    },
  },
  {
    color1: {
      name: "PastelOrange",
      color: "#FFA351FF",
    },
    color2: {
      name: "Peach",
      color: "#FFBE7BFF ",
    },
  },
];
