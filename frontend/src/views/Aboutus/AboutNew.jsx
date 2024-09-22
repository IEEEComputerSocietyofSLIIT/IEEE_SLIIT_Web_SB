import React from "react";
import "./main.css"
import lightImg from "./images/PNG/light.png";
import missionImg from "./images/PNG/mission.png";
import vissionImg from "./images/PNG/vission.png";
import cover from "./images/cover.png";
import mission from "./images/mission1.png";
import aboutus from "./images/about.png";
import vision1 from "./images/vision1.png";
import mission1 from "./images/mission1.png";

export const AboutNew = () => {
    return (
        <>
            <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-[60vh] text-white overflow-hidden">
                <div class="absolute inset-0">
                    <img src={cover} alt="Background Image" class="object-cover h-[60vh]  object-center w-full " />
                    <div class="absolute inset-0 bg-black opacity-60"></div>
                </div>

                <div class="relative z-10 flex flex-col px-[24px] w-fit mx-auto justify-center items-center h-full text-center">
                    <h1 class="text-4xl sm:text-7xl font-bold leading-tight mb-4">About Us</h1>
                </div>
            </div>

            <section class="w-full mx-auto py-10 ">

                <div class="xl:w-[80%] sm:w-[85%] xs:w-[90%] px-6 mx-auto grid md:flex lg:gap-4 xs:gap-2 justify-center lg:items-center md:items-center mt-4">
                    <div class="lg:w-[50%] xs:w-full mb-10 md:mb-0">
                        <img class="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm  w-4/5 mx-auto" src={aboutus} alt="billboard image" />
                    </div>
                    <div class="lg:w-[50%] sm:w-full xs:w-full  h-fit bg-gray-100 dark:bg-gray-200  p-8 rounded-2xl">
                        <h2 class="text-3xl font-semibold text-gray-900 dark:text-black">About Us</h2>
                        <p class="text-md mt-4 ">IEEE is the world’s largest professional association dedicated
                            to advancing technological innovation and excellence for the
                            benefit of humanity. IEEE and its members inspire a global
                            community through IEEE’s highly cited publications, conferences,
                            technology standards, and professional and educational
                            activities.</p>
                    </div>
                </div>

                <div class="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto px-6  grid md:flex  lg:gap-4 xs:gap-2 justify-center lg:items-center md:items-center mt-6">
                    <div class="md:hidden sm:block xs:block xs:w-full">
                        <img class="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm  mx-auto p-10" src={vision1} alt="billboard image" />
                    </div>
                    <div class="md:w-[50%] w-full h-fit  bg-gray-100 dark:bg-gray-200    p-8  rounded-2xl">
                        <h2 class="text-3xl font-semibold text-gray-900 dark:text-black">Our Vision</h2>

                        <p class="text-md mt-4">OUR VISION is to be essential for the global technical
                            community and to technical professionals everywhere, and be
                            universally recognized for the contributions of technology and
                            of technical professionals in improving global conditions.</p>
                    </div>
                    <div class="md:block hidden xs:hidden w-[50%] ">
                        <img class="lg:rounded-t-lg xs:rounded-sm w-2/3 mx-auto" src={vision1} alt="billboard image" />
                    </div>
                </div>

                <div class="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto  px-6 grid md:flex  xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-center md:items-center mt-4">
                    <div class="lg:w-[50%] xs:w-full">
                        <img class="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm w-11/12 p-6 mx-auto" src={mission1} alt="billboard image" />
                    </div>
                    <div class="lg:w-[50%] sm:w-full xs:w-full h-fit bg-gray-100 dark:bg-gray-200   p-8  rounded-2xl">
                        <h2 class="text-3xl font-semibold text-gray-900 dark:text-black">Our Mission</h2>
                        <p class="text-md mt-4">MISSION of IEEE - IEEE’s core purpose is to foster
                            technological innovation and excellence for the benefit of
                            humanity.</p>
                    </div>
                </div>
            </section>

        </>
    );
};
