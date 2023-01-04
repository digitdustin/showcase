import { SocialIcon } from "react-social-icons";
import meshBG from "assets/previews/meshBG3.gif";

export const GlassLinkPreview = ({ title }: { title: string }) => {
  return (
    <button
      style={{
        background:
          "linear-gradient( 120deg,rgba( 255, 255, 255, 0.23 ) 10%, rgba( 255, 255, 255, 0.05 ) 100% )",
        boxShadow: "0 8px 32px 0 rgba( 30, 30, 30, 0.3 )",
        backdropFilter: "blur( 13.5px )",
        WebkitBackdropFilter: "blur( 13.5px )",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
      }}
      className={`relative z-20 flex w-full cursor-pointer select-none items-center justify-center rounded-md py-1 text-white/60 transition`}
    >
      {title}
    </button>
  );
};

export const LinkPreview = ({
  title,
  color,
  textColor,
  fontFamily,
}: {
  title: string;
  color: string;
  textColor: string;
  fontFamily: string;
}) => {
  return (
    <button
      style={{
        background: color,
        color: textColor,
        fontFamily: fontFamily,
      }}
      className={`relative z-20 flex w-full cursor-pointer select-none items-center justify-center rounded-md py-2 text-xs text-white/60 transition`}
    >
      {title}
    </button>
  );
};

export const GlassSocialPreview = ({
  network,
  url,
}: {
  network: string;
  url: string;
}) => {
  return (
    <button
      style={{
        background:
          "linear-gradient( 120deg,rgba( 255, 255, 255, 0.23 ) 10%, rgba( 255, 255, 255, 0.05 ) 100% )",
        boxShadow: "0 8px 32px 0 rgba( 30, 30, 30, 0.3 )",
        backdropFilter: "blur( 13.5px )",
        WebkitBackdropFilter: "blur( 13.5px )",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
      }}
      className={`relative z-20 flex w-auto cursor-pointer select-none items-center justify-center rounded-full transition`}
    >
      <div className={`glass-social relative flex items-center`}>
        <div className="absolute inset-0 z-20 bg-transparent" />
        <SocialIcon
          network={network}
          url={url}
          bgColor="rgba(255,255,255,0)"
          fgColor="rgba(255,255,255,0.8)"
          className="!h-4 !w-4"
          href={undefined}
        />
      </div>
    </button>
  );
};

export const SocialPreview = ({
  network,
  url,
  color,
  textColor,
}: {
  network: string;
  url: string;
  color: string;
  textColor: string;
}) => {
  return (
    <button
      style={{
        background: color,
      }}
      className={`relative z-20 flex w-auto cursor-pointer select-none items-center justify-center rounded-full transition`}
    >
      <div className={`glass-social relative flex items-center`}>
        <div className="absolute inset-0 z-20 bg-transparent" />
        <SocialIcon
          network={network}
          url={url}
          bgColor="rgba(255,255,255,0)"
          fgColor={textColor}
          className="!h-4 !w-4"
          href={undefined}
        />
      </div>
    </button>
  );
};

export const GlassPreview = ({
  imageUrl,
  name,
  bio,
  socials,
  links,
}: {
  imageUrl: string;
  name: string;
  bio: string;
  socials: { network: string; url: string }[];
  links: { title: string }[];
}) => {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className="relative h-28 w-full">
        <div className="center-horizontal absolute -bottom-10 z-30 h-20 w-20 rounded-full bg-white/60 p-px">
          <img
            src={imageUrl}
            alt=""
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
      <div className="z-20 flex w-full flex-1 flex-col items-center justify-start border-t border-t-white/20 bg-white/20 px-10 pt-12 backdrop-blur-lg">
        <h1 className="text-xl text-white">{name}</h1>
        <p className="mt-1 text-center text-white/80">{bio}</p>
        <div className="mt-2 mb-6 flex items-center justify-center space-x-2">
          {socials.map((social) => {
            return GlassSocialPreview({
              network: social.network,
              url: social.url,
            });
          })}
        </div>
        <div className="flex w-full flex-col space-y-3">
          {links.map((link) => {
            return GlassLinkPreview({ title: link.title });
          })}
        </div>
      </div>
      <img
        src={meshBG.src}
        alt=""
        className="absolute z-10 h-full w-full object-cover"
      />
    </div>
  );
};

export const Preview = ({
  avatarUrl,
  bannerUrl,
  name,
  bio,
  socials,
  links,
  backgroundColor,
  textColor,
  socialColor,
  socialTextColor,
  linkColor,
  linkTextColor,
  fontFamily,
}: {
  avatarUrl: string;
  bannerUrl: string | any;
  name: string;
  bio: string;
  socials: { network: string; url: string }[];
  links: { title: string }[];
  backgroundColor: string;
  textColor: string;
  socialColor: string;
  socialTextColor: string;
  linkColor: string;
  linkTextColor: string;
  fontFamily: string;
}) => {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className="relative h-28 w-full">
        <div className="center-horizontal absolute -bottom-10 z-30 h-20 w-20 rounded-full">
          <img
            src={avatarUrl}
            alt=""
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>

      <div
        style={{
          fontFamily: fontFamily,
          color: textColor,
          background: backgroundColor,
        }}
        className="z-20 flex w-full flex-1 flex-col items-center justify-start px-10 pt-12"
      >
        <h1 className="text-xl">{name}</h1>
        <p className="mt-1 text-center">{bio}</p>
        <div className="mt-2 mb-6 flex items-center justify-center space-x-2">
          {socials.map((social) => {
            return SocialPreview({
              network: social.network,
              url: social.url,
              color: socialColor,
              textColor: socialTextColor,
            });
          })}
        </div>

        <div className="flex w-full flex-col space-y-3">
          {links.map((link) => {
            return LinkPreview({
              title: link.title,
              color: linkColor,
              textColor: linkTextColor,
              fontFamily,
            });
          })}
        </div>
      </div>
      <img
        src={bannerUrl}
        alt=""
        className="absolute z-10 h-full w-full object-contain object-top"
      />
    </div>
  );
};
