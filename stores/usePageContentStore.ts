import create from "zustand";
import { Social } from "../constants/editor/types";
import { testSocials } from "../constants/testData";

interface PageContentStore {
  name: string;
  setName: (name: string) => void;
  bio: string;
  setBio: (bio: string) => void;
  socials: Social[];
  setSocials: (socials: Social[]) => void;
  bannerImage: string;
  setBannerImage: (bannerImage: string) => void;
  avatarImage: string;
  setAvatarImage: (avatarImage: string) => void;
}

export const usePageContentStore = create<PageContentStore>((set) => ({
  name: "Dustin Karp",
  setName: (name: string) => set({ name }),
  bio: "I'm a software engineer and designer based in Boston, MA. I do a lot of frontend and fullstack dev. Check me out on my socials!",
  setBio: (bio: string) => set({ bio }),
  socials: [],
  setSocials: (socials: Social[]) => set({ socials }),
  bannerImage:
    "https://media.istockphoto.com/id/1411253803/photo/universal-linkedin-banner-with-pink-sunset-over-the-alps-for-any-profession.jpg?b=1&s=170667a&w=0&k=20&c=V3-D3Hc47eMkqbyPDOvQRqcsCrwZPTckg_1OdDWYoS8=",
  setBannerImage: (bannerImage: string) => set({ bannerImage }),
  avatarImage: "https://github.com/digitdustin.png",
  setAvatarImage: (avatarImage: string) => set({ avatarImage }),
}));
