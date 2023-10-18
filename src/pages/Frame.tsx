import { FunctionComponent } from "react";

const Frame: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[1080px] overflow-hidden text-left text-21xl text-black font-inter">
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[1080px] object-cover"
        alt=""
        src="/--1@2x.png"
      />
      <img
        className="absolute top-[calc(50%_+_240px)] left-[calc(50%_-_960px)] w-[1920px] h-[300px]"
        alt=""
        src="/bottom.svg"
      />
      <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1920px] h-[140px]">
        <div className="absolute top-[0px] left-[0px] bg-gray [backdrop-filter:blur(25px)] w-[1920px] h-[140px]" />
        <div className="absolute top-[calc(50%_-_24px)] left-[691px] w-[538px] h-12">
          <b className="absolute top-[calc(50%_-_24px)] left-[0px]">JDM</b>
          <b className="absolute top-[calc(50%_-_24px)] left-[149px]">
            ИСТОРИЯ
          </b>
          <b className="absolute top-[calc(50%_-_24px)] left-[408px]">О НАС</b>
        </div>
        <img
          className="absolute top-[7px] left-[30px] w-[125px] h-[125px] object-cover"
          alt=""
          src="/freeiconracingcar7379279-1@2x.png"
        />
        <div className="absolute top-[47px] left-[1635px] w-[255px] h-[45px]">
          <img
            className="absolute top-[0px] left-[0px] w-[45px] h-[45px] object-cover"
            alt=""
            src="/freeicontelegram739260@2x.png"
          />
          <img
            className="absolute top-[0px] left-[105px] w-[45px] h-[45px] object-cover"
            alt=""
            src="/freeiconwhatsapp1077055@2x.png"
          />
          <img
            className="absolute top-[0px] left-[210px] w-[45px] h-[45px] object-cover"
            alt=""
            src="/freeiconvk2111828@2x.png"
          />
        </div>
      </div>
      <b className="absolute top-[800px] left-[839px] inline-block w-[746px] h-[263px]">
        <p className="m-0">Наш самый дорогой проект!</p>
        <p className="m-0">
          Toyota Supra A80 была построена в 2022 году. Каждый винтик этой машины
          новый, каждый механизм - обслужен)))
        </p>
      </b>
      <div className="absolute top-[165px] left-[30px] text-[96px] font-inder text-white inline-block w-[950px]">
        KHV Stance Culture
      </div>
      <div className="absolute top-[304px] left-[30px] text-[48px] font-inder text-white inline-block w-[799px]">
        Тюнинг-ателье, которое обожает старые японские автомобили
      </div>
    </div>
  );
};

export default Frame;
