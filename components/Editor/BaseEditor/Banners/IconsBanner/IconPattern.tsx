// import Lottie from "lottie-react";
import Lottie from "react-lottie";

const display = [];

const LottiePlayer = ({ data }: any) => {
  return (
    <div className="h-14">
      <Lottie
        options={{
          autoplay: true,
          loop: true,
          animationData: data,
        }}
      />
    </div>
  );
};

const shiftArray = (arr: any, shift: number) => {
  // shift array by n
  return arr.slice(shift).concat(arr.slice(0, shift));
};

const IconPattern = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-around overflow-hidden bg-[#ffe8ec]">
      <div className="flex w-full justify-center space-x-16 rounded-t-md bg-red-200">
        {display.map((data, index) => (
          <div className="icon !h-14">
            <LottiePlayer data={data} />
          </div>
        ))}
      </div>
      <div className=" flex w-full justify-center space-x-16 rounded-t-md pl-28">
        {shiftArray(display, 3).map((data, index) => (
          <div className="icon !h-14 ">
            <LottiePlayer data={data} />
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center space-x-16 rounded-t-md">
        {shiftArray(display, 6).map((data, index) => (
          <div className="icon !h-14 ">
            <LottiePlayer data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconPattern;
