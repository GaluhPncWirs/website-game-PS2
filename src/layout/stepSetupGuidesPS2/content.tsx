import type React from "react";

type propsStepGuidePS2 = {
  numberStep: string;
  children: React.ReactNode;
  srcImg: string;
  altImg: string;
};

export default function StepSetupGuidesPS2(props: propsStepGuidePS2) {
  const { numberStep, children, srcImg, altImg } = props;
  return (
    <div className="flex gap-x-5">
      <div className="basis-[7%] lg:basis-[5%] flex justify-center">
        <div className="w-1 h-full bg-black rounded-t-lg rounded-b-lg flex flex-col items-center">
          <div className="size-10 rounded-full bg-blue-500 mt-7 flex items-center justify-center text-slate-100 text-2xl font-semibold">
            {numberStep}
          </div>
        </div>
      </div>
      <div className="basis-full mt-7 flex flex-col gap-7 md:flex-row">
        <div className="w-full md:w-2/5">{children}</div>
        <img
          src={srcImg}
          alt={altImg}
          className="w-full md:w-1/2 max-h-80 object-contain"
        />
      </div>
    </div>
  );
}
