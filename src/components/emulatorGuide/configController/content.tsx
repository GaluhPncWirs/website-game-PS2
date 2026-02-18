import StepSetupGuidesPS2 from "@/layout/stepSetupGuidesPS2/content";

export default function ConfigController() {
  return (
    <>
      <StepSetupGuidesPS2
        numberStep="1"
        srcImg="/images/emulatorGuide/setupEmulator/settingBios.png"
        altImg="Tutorial Setup Controller"
      >
        <h1 className="font-bold text-2xl tracking-wide text-[#003366] 2xl:text-3xl">
          Go to setting and choose controller
        </h1>
        <p className="font-semibold mt-3 text-[#393E46] text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ullam
          laudantium doloribus numquam fugit? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Eius, blanditiis expedita sequi
          voluptates maxime deleniti ea? Voluptates possimus illo optio.
        </p>
      </StepSetupGuidesPS2>
      <StepSetupGuidesPS2
        numberStep="2"
        srcImg="/images/emulatorGuide/setupController/configController_1.png"
        altImg="Tutorial Setup Controller"
      >
        <h1 className="font-bold text-2xl tracking-wide text-[#003366] 2xl:text-3xl">
          Active the Mouse / pointer source
        </h1>
        <p className="font-semibold mt-3 text-[#393E46] text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
          expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
          eligendi?
        </p>
      </StepSetupGuidesPS2>
      <StepSetupGuidesPS2
        numberStep="3"
        srcImg="/images/emulatorGuide/setupController/configController_2.png"
        altImg="Tutorial Setup Controller"
      >
        <h1 className="font-bold text-2xl tracking-wide text-[#003366] 2xl:text-3xl">
          Custom every button gamepad became keyboard for control your game
        </h1>
        <p className="font-semibold mt-3 text-[#393E46] text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
          expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
          eligendi? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Veritatis necessitatibus, quos dolore enim, qui laudantium ratione
          perferendis sapiente soluta sit minima excepturi reiciendis est ex ab
          natus molestias facere animi?
        </p>
      </StepSetupGuidesPS2>
    </>
  );
}
