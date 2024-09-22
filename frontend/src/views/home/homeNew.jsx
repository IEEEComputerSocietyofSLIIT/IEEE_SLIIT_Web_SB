import './style.css';
import CS from '../../images/logos/CSYelllow2.png'
import EMBS from '../../images/logos/EMBS.png'
import IAS from '../../images/logos/IAS.png'
import IEEE from '../../images/logos/IEEE.png'
import PES from '../../images/logos/PES.png'
import RAS from '../../images/logos/RAS.png'
import WIE from '../../images/logos/WIE.png'
import Group from '../../images/headerBackground.png'
import WebSection from '../../images/Welcome.png'

const HomeNew = () => {
    return (
        <>
            <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-[90vh] text-white overflow-hidden">
                <div class="absolute inset-0">
                    <img src={Group} alt="Background Image" class="object-cover object-center w-full h-[90vh]" />
                    <div class="absolute inset-0 bg-black opacity-60"></div>
                </div>

                <div class="relative z-10 flex flex-col px-[24px] w-fit mx-auto justify-center items-center h-full text-center">
                    <h1 class="text-4xl sm:text-6xl font-bold leading-tight mb-4">IEEE STUDENT BRANCH<br />SLIIT</h1>
                    <p class="text-lg text-gray-300 mb-8">Join the Force Driving Technological Advancements</p>
                    <a href="#" class="bg-white text-gray-900 hover:bg-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Join Us</a>
                </div>
            </div>


            <div class="relative bg-gradient-to-r from-purple-600 to-blue-600  text-white overflow-hidden">
                <div class="absolute inset-0">
                    <img src={WebSection} alt="Background Image" class="object-cover object-center w-full h-full" />
                    <div class="absolute inset-0"></div>
                </div>
                <div
                    className="absolute inset-0 bg-black/60 sm:bg-transparent sm:from-black/95 sm:to-black/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right xl:-ml-[50px]">
                        <h1 className="text-3xl font-bold sm:text-5xl">
                            Welcome To IEEE Student Branch of SLIIT

                        </h1>

                        <p className="mt-4 max-w-lg sm:text-md/relaxed ">
                            Since our inception in 2011, It has been one of the most famous student chapters in Sri Lanka.
                            Pioneering a variety of projects in a variety of fields, including technical projects and community service as our student members including seminars and career support workshops in science and technical areas and personal development programs to improve the productivity of their achievements.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">


                            <a
                                href="#"
                                className="bg-white text-gray-900 hover:bg-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                            >
                                About Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <section id="features" class=" px-[24px] space-y-6 py-8 md:py-12 lg:py-24 max-w-screen-2xl mx-auto">
                <div class="mx-auto flex max-w-screen-2xl flex-col items-center space-y-4 text-center">
                    <h1 class="text-4xl sm:text-5xl font-bold leading-tight mb-10">IEEE Student Branch Chapters</h1>
                </div>
                <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 max-w-screen-xl md:grid-cols-3">
                <div class="relative overflow-hidden rounded-3xl border bg-gray-100/50 p-2">
                        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <img src={CS} className='scale-125' />
                            <div class="">
                                <p class="text-sm text-muted-foreground text-center">IEEE Computer Society of SLIIT</p>
                            </div>
                        </div>
                    </div>
                    <div class="relative overflow-hidden rounded-3xl border bg-gray-100/50 p-2">
                        <div class="flex h-[180px] flex-col justify-between rounded-lg p-6">
                            <img src={WIE} />
                            <div class="">
                                <p class="text-sm text-muted-foreground text-center">IEEE Women In Engineering Society</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="relative overflow-hidden rounded-3xl border bg-gray-100/50 p-2">
                        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <img src={PES}  />
                            <div class="">
                                <p class="text-sm text-muted-foreground text-center">IEEE Power & Energy Society</p>
                            </div>
                        </div>
                    </div>
                    <div class="relative overflow-hidden rounded-3xl border bg-gray-100/50 p-2">
                        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <img src={RAS} />
                            <div class="">
                                <p class="text-sm text-muted-foreground text-center">IEEE Robotics & Automation Society</p>
                            </div>
                        </div>
                    </div>
                    <div class="relative overflow-hidden rounded-3xl border bg-gray-100/50 p-2">
                        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <img src={IAS} />
                            <div class="">
                                <p class="text-sm text-muted-foreground text-center">IEEE Industry Applications Society</p>
                            </div>
                        </div>
                    </div>
                    <div class="relative overflow-hidden rounded-3xl border bg-gray-100/50 p-2">
                        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <img src={EMBS} />
                            <div class="">
                                <p class="text-sm text-muted-foreground text-center">IEEE Engineering in Medicine & Biology Society</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default HomeNew;