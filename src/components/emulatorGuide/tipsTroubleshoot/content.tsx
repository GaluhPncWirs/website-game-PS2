import StepSetupGuidesPS2 from "@/layout/stepSetupGuidesPS2/content";

export default function TipsTroubleshoot() {
  return (
    <>
      <StepSetupGuidesPS2
        numberStep="1"
        srcImg="/images/emulatorGuide/setupEmulator/settingBios.png"
        altImg="Tips Troubleshoot"
      >
        <h1 className="font-bold text-2xl tracking-wide text-[#003366] 2xl:text-3xl">
          Go to setting and choose graphics
        </h1>
        <p className="font-semibold mt-3 text-[#393E46] text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ullam
          laudantium doloribus numquam fugit? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Autem, nostrum.
        </p>
      </StepSetupGuidesPS2>
      <StepSetupGuidesPS2
        numberStep="2"
        srcImg="/images/emulatorGuide/setupImproveGame/configImproveGame_1.png"
        altImg="Tips Troubleshoot"
      >
        <h1 className="font-bold text-2xl tracking-wide text-[#003366] 2xl:text-3xl">
          Follow all the instructions in the picture (Display)
        </h1>
        <p className="font-semibold mt-3 text-[#393E46] text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
          expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
          eligendi? qui laudantium ratione perferendis sapiente soluta sit
          minima excepturi reiciendis est ex ab natus molestias facere animi?
        </p>
      </StepSetupGuidesPS2>
      <StepSetupGuidesPS2
        numberStep="3"
        srcImg="/images/emulatorGuide/setupImproveGame/configImproveGame_2.png"
        altImg="Tips Troubleshoot"
      >
        <h1 className="font-bold text-2xl tracking-wide text-[#003366] 2xl:text-3xl">
          Follow all the instructions in the picture (Rendering)
        </h1>
        <p className="font-semibold mt-3 text-[#393E46] text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
          expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
          eligendi? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Veritatis necessitatibus, quos dolore enim,
        </p>
      </StepSetupGuidesPS2>
    </>
  );
}
