import React from "react";
import { Outlet } from "react-router-dom";
import sunuTeleLogo from 'C:/Users/jdiouf/Documents/personal-projects/sunu-tele/src/assets/sunu-tele.png'


const BaseLayout = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-backOfficePrimary">
      <div className="w-4/5 h-4/5 base-layout rounded-[4rem] text-center">
        <div className="w-full flex justify-center mt-6">
          <img className="w-[210px]" src={sunuTeleLogo} alt="logo sunutele" />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default BaseLayout;
