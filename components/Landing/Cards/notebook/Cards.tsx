import { Tile } from "../Tile";
import { motion, PanInfo, useSpring } from "framer-motion";
import { useParentSize } from "../Hooks";
import React, { useEffect, useState } from "react";
import meshBG from "assets/previews/meshBG3.gif";
import { SocialIcon } from "react-social-icons";
import {
  GlassLinkPreview,
  GlassPreview,
  GlassSocialPreview,
  Preview,
} from "./Previews";
import patternBG from "assets/previews/patternBG.png";
import coffeePattern from "assets/previews/coffeePattern.png";
import iconsBG from "assets/previews/iconsBG.gif";

const data = [
  <GlassPreview
    name="Dana Holland"
    bio="Twitch Streamer + Gamer from London, UK"
    socials={[
      { network: "twitch", url: "https://twitch.tv/danaholland" },
      { network: "twitter", url: "https://twitter.com/danaholland" },
      { network: "instagram", url: "https://instagram.com/danaholland" },
    ]}
    links={[
      { title: "My Website" },
      { title: "Charity Stream" },
      { title: "Wishlist" },
    ]}
    imageUrl="https://pbs.twimg.com/media/FjKpv2lXoAIZFlt?format=jpg&name=360x360"
  />,
  <Preview
    name="Mike Lee"
    bio="Entrepreneur + Founder of My Pack Life"
    socials={[
      { network: "email", url: "mikelee@mike.com" },
      { network: "instagram", url: "https://instagram.com/mikelee" },
      { network: "facebook", url: "https://facebook.com/mikelee" },
      { network: "twitter", url: "https://twitter.com/mikelee" },
    ]}
    links={[
      { title: "My Blog" },
      { title: "PackLife Podcast" },
      { title: "A Packer's Life: My Story" },
      { title: "Meet your new packing buddy" },
    ]}
    avatarUrl="https://i.pinimg.com/originals/85/b0/ba/85b0ba44f5c399d51ffc6d197e93b3e8.jpg"
    bannerUrl={
      "https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/m/my-pack-life/My_Pack_Life_Lee_Asher_3x2_18.png.rend.hgtvcom.616.411.suffix/1644292228048.png"
    }
    backgroundColor="#F2F2F2"
    fontFamily="Source Serif Pro"
    textColor="#1F1D1C"
    socialColor="#1F1D1C"
    socialTextColor="#F2F2F2"
    linkColor="#1F1D1C"
    linkTextColor="#F2F2F2"
  />,

  <Preview
    name="The Idea Lab"
    bio="We are a creative and web development agency based in San Francisco, CA."
    socials={[
      { network: "email", url: "idealab@ideas.com" },
      { network: "instagram", url: "https://instagram.com/idealab" },
      { network: "facebook", url: "https://facebook.com/idealab" },
      { network: "twitter", url: "https://twitter.com/idealab" },
    ]}
    links={[
      { title: "Our Work" },
      { title: "Our Team" },
      { title: "Our Process" },
      { title: "Our Clients" },
    ]}
    avatarUrl="https://i.pinimg.com/originals/83/db/5b/83db5bafd2d58355a1bd4babd4109e8d.jpg"
    bannerUrl={iconsBG.src}
    backgroundColor="#22086B"
    fontFamily="Chivo Mono"
    textColor="#fff"
    socialColor="#53A2EE"
    socialTextColor="#fff"
    linkColor="#53A2EE"
    linkTextColor="#fff"
  />,
  <Preview
    name="Gavin Belson"
    bio="Failure is growth. Failure is learning. But sometimes failure is just failure."
    socials={[
      { network: "twitter", url: "https://twitter.com/gavinbelson" },
      { network: "instagram", url: "https://instagram.com/gavinbelson" },
    ]}
    links={[
      { title: "Hooli" },
      { title: "Nucleus" },
      { title: "HooliX" },
      { title: "Hooli Cloud" },
    ]}
    avatarUrl="https://media.licdn.com/dms/image/C5603AQELJdeNIQtl3Q/profile-displayphoto-shrink_800_800/0/1542153743923?e=2147483647&v=beta&t=RVv95dfGogDEbH-6Qhfli5lxxzwPd99NW-blKPZipLU"
    bannerUrl="https://pbs.twimg.com/media/EgUmxERXsAA6Fs3.jpg:large"
    backgroundColor="#001337"
    fontFamily="ambit"
    textColor="#fff"
    socialColor="#00BCFD"
    socialTextColor="#F2F2F2"
    linkColor="#00BCFD"
    linkTextColor="#F2F2F2"
  />,
  <Preview
    name="The Roasted Bean"
    bio="Coffee Shop in London, UK"
    socials={[
      { network: "email", url: "theroastedbean@gmail.com" },
      { network: "instagram", url: "https://instagram.com/theroastedbean" },
      { network: "facebook", url: "https://facebook.com/theroastedbean" },
      { network: "twitter", url: "https://twitter.com/theroastedbean" },
    ]}
    links={[
      { title: "Menu" },
      { title: "Our Story" },
      { title: "Hours of Operation" },
      { title: "Meet the Team" },
    ]}
    avatarUrl="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/26712e66220799.5b0eb52c18dd8.jpg"
    bannerUrl={coffeePattern.src}
    backgroundColor="#C47C4F"
    fontFamily="Ambit"
    textColor="#1F1D1C"
    socialColor="#1F1D1C"
    socialTextColor="#C47C4F"
    linkColor="#1F1D1C"
    linkTextColor="#C47C4F"
  />,
];

// Mapping function to create duplicates with UIDs
const mapData = (data: JSX.Element[], prefix: string) =>
  data.map((item, i) => ({
    id: `${prefix}${i}`,
    content: data[i],
  }));

// Array we are going to work with
const dataClone = [
  // First 3 duplicates are going to be rendered:
  // One is for exit animations
  ...mapData(data, "1"),
  // Second one is being displayed on screen
  ...mapData(data, "2"),
  // Third one is for inital aniamtion
  ...mapData(data, "3"),
  // Last one is to avoid cards animation
  // from the final position to the initial one
  ...mapData(data, "4"),
];

type CardsProps = {
  col: number;
  row: number;
};

export const Cards = ({ col, row }: CardsProps) => {
  const [parentRef, width] = useParentSize();
  const ref = parentRef as React.MutableRefObject<HTMLDivElement>;
  const size = width as number;
  const [current, setCurrent] = useState(0);
  const [arr, setArr] = useState(dataClone);

  useEffect(() => {
    const interval = setInterval(() => {
      rotateArray(1);
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  const rotateArray = (n: number = 1) => {
    const newArr = [...arr];
    if (n > 0) {
      for (let i = 0; i < n; i++) {
        const first = newArr.shift();
        if (!first) return;
        newArr.push(first);
      }
      setCurrent(current + 1);
      setArr(newArr);
    } else {
      for (let i = 0; i < -n; i++) {
        const last = newArr.pop();
        if (!last) return;
        newArr.unshift(last);
      }
      setCurrent(n);
      setArr(newArr);
    }
  };

  return (
    <Tile
      col={col}
      row={row}
      ref={ref}
      dark
      perspective
      // perspectiveDist is defined in relation
      // with the parent container
      perspectiveDist={size / 2}
    >
      {arr.map(
        (item, i) =>
          // Render only first 3 copies of data.
          // The fourth copy should be out of render,
          // otherwise cards will also animate
          // from last to first position
          i < data.length * 3 && (
            <Card
              key={item.id}
              i={i}
              current={current}
              name={item.content}
              rotateArray={rotateArray}
              length={data.length}
              size={size}
            />
          )
      )}
    </Tile>
  );
};

// Spring configuration
const spring = {
  type: "spring",
  damping: 70,
  stiffness: 600,
  restDelta: 0.0001,
  restSpeed: 0.0001,
};

type CardProps = {
  i: number;
  name: JSX.Element;
  length: number;
  size: number;
  rotateArray: (n: number) => void;
  current: number;
};

const Card = ({ i, name, length, size, rotateArray, current }: CardProps) => {
  // Card is sized relatively to the container,
  // just to maintain all ratios.

  const cardWidth = size * 0.45 * 1;
  const cardHeight = size * 0.65 * 1;

  const { isLeft, isFirst, isCenter, isRight } = {
    isLeft: i < length,
    isFirst: i === length,
    isCenter: i > length && i <= length * 2 - 1,
    isRight: i > length * 2 - 1 && i < length * 3,
  };

  // Another helper to start counting
  // from the "first visible" card
  const iFromFirst = i - length;

  // I usually work with hsl() model
  // bgLightness defines the l component of the background
  const bgLightness = 13;

  // I don't want any card to be darker
  // than the background itself
  const clampLightness = (value: number) => Math.max(value, bgLightness);

  const leftIndex = length * 2 - i;
  const lightnessHSL = (value: number) => `hsl(0,0%,${clampLightness(value)}%)`;
  const offsetCalc = (start: number, step: number) => start * size + step * i;
  const leftOffsetCalc = (start: number, step: number) =>
    start * size + step * leftIndex;
  const backgroundCalc = (start: number, step: number) =>
    lightnessHSL(start + step * iFromFirst);
  const leftBackgroundCalc = (start: number, step: number) =>
    lightnessHSL(start + step * (leftIndex - length));

  // Actual styles for each card set.
  // I want to have control over:
  // – first card (the draggable one)
  // – center (visible cards)
  // – left (out of container but matters for exit animation)
  // – right (out of container but matters for initial animation)
  const styles = {
    isLeft: {
      posX: offsetCalc(-2.25, 0),
      posY: offsetCalc(-0.25, 1),
      posZ: offsetCalc(0, 1),
      rotX: 0,
      rotY: 45,
      rotZ: -90,
      background: backgroundCalc(95, 0),
    },
    isFirst: {
      posX: offsetCalc(-0.15, -cardWidth / 6 / i),
      posY: offsetCalc(-0.25, 1),
      posZ: offsetCalc(0, 1),
      rotX: 0,
      rotY: 0,
      rotZ: 0,
      background: backgroundCalc(95, 0),
    },
    isCenter: {
      posX: offsetCalc(-0.75, 0.3 * cardWidth),
      posY: offsetCalc(-0.25, 2),
      posZ: offsetCalc(-0.25, -i * i * 0.65),
      rotX: i * -1,
      rotY: i * -5,
      rotZ: -35 + i * 6.5,
      background: backgroundCalc(100, -25),
    },
    isRight: {
      posX: offsetCalc(2.5, 0),
      posY: offsetCalc(0.25, 0),
      posZ: offsetCalc(-0.25, -20),
      rotX: 0,
      rotY: 0,
      rotZ: 0,
      background: backgroundCalc(0, 0),
    },
  };

  // All cards are styled based on their index:
  const { posX, posY, posZ, background, rotX, rotY, rotZ } =
    styles[
      isLeft
        ? "isLeft"
        : isFirst
        ? "isFirst"
        : isCenter
        ? "isCenter"
        : "isRight"
    ];

  // Springs for drag animation
  const dPosX = useSpring(posX, spring);
  const dPosY = useSpring(posY, spring);
  const dPosZ = useSpring(posZ, spring);

  const dRotX = useSpring(rotX, spring);
  const dRotY = useSpring(rotY, spring);
  const dRotZ = useSpring(rotZ, spring);

  // This function controlls the drag behavior
  // and constrains verical and horizontal drag force
  const setXY = (info: PanInfo, consX: number, consY: number) => {
    dPosX.set(posX + (info.offset.x * size * consX) / 1000);
    dPosY.set(posY + (info.offset.y * size * consY) / 1000);
    dRotX.set(rotX + ((info.offset.y / size) * 40000 * consY) / 1000);
    dRotY.set(rotY + ((info.offset.x / size) * -120000 * consY) / 1000);
    dRotZ.set(rotZ + ((info.offset.x / size) * 120000 * consY) / 1000);
  };

  const handlePanEnd = (info: PanInfo) => {
    const minVelocity = Math.abs(info.velocity.x) > 80;
    const minDistance = Math.abs(info.offset.x) > size / 48;
    const direction = info.offset.x > 0 ? -1 : 1;

    if (minDistance && minVelocity && isFirst) {
      rotateArray(direction);
      setXY(info, 0, 0);
    } else {
      setXY(info, 0, 0);
    }
  };

  return (
    <motion.div
      onTap={() => {
        rotateArray(i - length);
      }}
      onPan={(_, info) => {
        isFirst ? setXY(info, 0.8, 0.35) : setXY(info, 0.15, 0.15);
      }}
      onPanEnd={(_, info) => {
        handlePanEnd(info);
      }}
      whileHover={{ scale: 1.1 }}
      transition={spring}
      animate={{
        x: posX,
        y: posY,
        z: posZ,
        rotateX: rotX,
        rotateY: rotY,
        rotateZ: rotZ,
        background: background,
        transition: {
          delay: (iFromFirst + current) * 0.025,
        },
      }}
      style={{
        position: "absolute",
        x: dPosX,
        y: dPosY,
        z: dPosZ,
        rotateX: dRotX,
        rotateY: dRotY,
        rotateZ: dRotZ,
        width: `${cardWidth}px`,
        height: `${cardHeight}px`,
        top: `50%`,
        left: `50%`,
        zIndex: length - i,
        borderRadius: `${size * 0.025}px`,
        userSelect: "none",
        overflow: "hidden",
        cursor: isFirst ? "grab" : "pointer",
        boxShadow: `0 ${size * 0.025}px ${size * 0.05}px ${
          size * 0.025
        }px hsla(0,0%,13%,0.5),
        inset 2px 2px 0 0 hsla(0,0%,100%, 0.1)`,
        touchAction: "auto",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1000,
          background:
            "linear-gradient(135deg, hsla(0,0%,100%,0.2), hsla(0,0%,13%,0.3)",
        }}
      >
        <div className="flex h-full w-full flex-col items-center justify-start text-xs">
          {/* <img
            src={meshBG.src}
            alt="mesh"
            className="h-full w-full object-fill"
          /> */}
          {name}
        </div>
      </div>
    </motion.div>
  );
};
