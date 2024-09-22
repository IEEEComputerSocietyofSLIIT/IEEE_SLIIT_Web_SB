import "./CommitteeChairpersons.css";
import adithya from "../../images/committee members/Adithya_CS_Chairpersone - Adithya Liyanaarachchi-modified.png";
import ramudu from "../../images/committee members/Ramudu Welikala - Chairperson-modified.png"

const CommitteeChairpersons = () => {
    return (
        <>
           

            <section>
            <h3 className="text-5xl font-bold text-[#ffa300] ">CHAPTER CHAIRPERSONS</h3>
    {/* Container */}
    <div className="mx-auto flex flex-col md:flex-row justify-center w-screen gap-4 px-5 pt-16 md:px-10 md:pt-20">
        {/* Column 1 */}
        <div className="grid max-w-xl gap-6 w-full">
            {/* Item */}
            <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#00b5e2] px-4 py-4">
                <p className="text-2xl font-bold">
                    Adithya Liyanaarachchi<br />
                    <span className="text-md text-[#ffa300]">IEEE Computer Society</span>
                </p>
            </div>
            {/* Item */}
            <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#00b5e2] px-4 py-4">
                <p className="text-2xl font-bold">
                Ramudu Welikala<br />
                    <span className="text-md text-[#ffa300]">IEEE Industry Applications Society</span>
                </p>
            </div>
            {/* Item */}
            <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#00b5e2] px-4 py-4">
                <p className="text-2xl font-bold">
                Navod Nanayakkara
                <br />
                    <span className="text-md text-[#ffa300]">IEEE Power and Energy Society</span>
                </p>
            </div>
        </div>

        {/* Column 2 */}
        <div className="grid max-w-xl gap-6 w-full">
            {/* Item */}
            <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#00b5e2] px-4 py-4">
                <p className="text-2xl font-bold">
                Udula Wijesinghe<br />
                    <span className="text-md text-[#ffa300]">IEEE Robotics and Automation Society</span>
                </p>
            </div>
            {/* Item */}
            <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#00b5e2] px-4 py-4">
                <p className="text-2xl font-bold">
                Safni Mariyam<br />
                    <span className="text-md text-[#ffa300]">IEEE EMBS Chapter</span>
                </p>
            </div>
            {/* Item */}
            <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#00b5e2] px-4 py-4">
                <p className="text-2xl font-bold">
                Yashoda Athapattu<br />
                    <span className="text-md text-[#ffa300]">IEEE Women in Engineering</span>
                </p>
            </div>
        </div>
    </div>
</section>

        </>
    )
}

export default CommitteeChairpersons;