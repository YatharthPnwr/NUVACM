import { MemberInfo } from "@/components/MemberInfo";
import Navbar from "@/components/Navbar";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import WordFadeIn from "@/components/ui/word-fade-in";
import Travon from "@/icons/ACM_CORE_TEAM_PHOTOS/Travon.png";
import Dharminf from "@/icons/ACM_CORE_TEAM_PHOTOS/Dharminf.png";
import Ray from "@/icons/ACM_CORE_TEAM_PHOTOS/Ray.png";
import Amaan from "@/icons/ACM_CORE_TEAM_PHOTOS/Amaan.png";
import Jaideep from "@/icons/ACM_CORE_TEAM_PHOTOS/JaideepRaulji.jpg";
import Ujwala from "@/icons/ACM_CORE_TEAM_PHOTOS/UjwalaPetigara.jpg";
import Ashish from "@/icons/ACM_CORE_TEAM_PHOTOS/AshishJani.jpg";
import yatharth from "@/icons/ACM_CORE_TEAM_PHOTOS/Yatharth.png";
import { Footer } from "@/components/Footer";
import logo from "@/assets/Frame 4.png";

export function Team() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute -z-30 w-full h-[910px]">
        <AnimatedGridPattern
          repeatDelay={2}
          width={200}
          height={108}
          numSquares={5}
          className=""
        />
      </div>
      <div className="z-50 flex items-center justify-between h-24 bg-black mb-10">
        <div className="logo bg-black">
          <img className="rounded-2xl" src={logo} height={400} width={470} />
        </div>
        <Navbar />
      </div>
      <div className="w-full flex justify-center text-white p-10">
        <WordFadeIn
          words="MEET THE BRAINS"
          className="text-black"
          delay={0.7}
        />
      </div>

      {/* Updated team section with full width grid */}
      <div className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 w-full max-w-7xl mx-auto">
          <div className="w-full h-96 flex">
            <MemberInfo
              name="Ms. Ujwala Petigara"
              position="Faculty Officer"
              linkedInProfileUrl=""
              TwitterProfileUrl=""
              imageUrl={Ujwala}
              height="top-20"
            />
          </div>
          <div className="w-full h-96 flex">
            <MemberInfo
              name="Travon Bhagat"
              position="Chair"
              linkedInProfileUrl="https://www.linkedin.com/in/travon-bhagat"
              TwitterProfileUrl="https://x.com/TravonBhagat?t=YJ15G5hhPILMpmsu-qaZUQ&s=09"
              imageUrl={Travon}
              height="top-20"
            />
          </div>
          <div className="w-full h-96 flex">
            <MemberInfo
              name="Amaan Surti"
              position="Co Chair"
              linkedInProfileUrl="https://www.linkedin.com/in/amaan-surti-14b072206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              TwitterProfileUrl="https://x.com/Amaan7399"
              imageUrl={Amaan}
              height="top-20"
            />
          </div>
          <div className="w-full h-96 flex">
            <MemberInfo
              name="Dharmin Nagar"
              position="Treasurer"
              linkedInProfileUrl="https://www.linkedin.com/in/nagardharmin/"
              TwitterProfileUrl="https://x.com/dharminnagar"
              imageUrl={Dharminf}
              height="top-20"
            />
          </div>
          <div className="w-full h-96 flex">
            <MemberInfo
              name="Hir Ray"
              position="Secretary"
              TwitterProfileUrl=""
              linkedInProfileUrl="https://www.linkedin.com/in/hir-ray-7953a0286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              imageUrl={Ray}
              height="object-top"
            />
          </div>
          <div className="w-full h-96 flex">
            <MemberInfo
              name="Yatharth Singh Panwar"
              position="Web Master"
              linkedInProfileUrl="https://www.linkedin.com/in/yatharth-singh-panwar-153058288/"
              TwitterProfileUrl="https://x.com/yatharthpnwr"
              imageUrl={yatharth}
              height="top-20"
            />
          </div>
          <div className="w-full h-96 flex">
            <MemberInfo
              name="Dr. Jaideepsinh Raulji"
              position="Faculty Advisor"
              linkedInProfileUrl="https://www.linkedin.com/in/jaideepsinhraulji/?originalSubdomain=in"
              TwitterProfileUrl=""
              imageUrl={Jaideep}
              height="top-20"
            />
          </div>
          <div className="w-full h-96 flex">
            <MemberInfo
              name="Dr. Ashish Jani"
              position="Faculty Advisor"
              linkedInProfileUrl="https://www.linkedin.com/in/ashish-jani/"
              TwitterProfileUrl=""
              imageUrl={Ashish}
              height="top-20"
            />
          </div>
        </div>
      </div>

      <div className="mb-10"></div>
      <Footer />
    </div>
  );
}
