import { Globe } from "@/components/ui/globe";
import Meteors from "@/components/ui/meteors";
import SparklesText from "@/components/ui/sparkles-text";
import BlurredInComponent from "@/components/BlurIn";
import Navbar from "@/components/Navbar";
import { AnimatedBeamDemo } from "@/components/About";
import WordPullUp from "@/components/ui/word-pull-up";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import NumberTicker from "@/components/ui/number-ticker";
import Particles from "@/components/ui/particles";
import { Footer } from "@/components/Footer";
import logo from "@/assets/Frame 4.png";
import BenefitsCard from "@/components/BenefitsCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import AI_Hackathon_Poster from "../assets/AI_Hackathon_Poster.jpeg";

export function Landing() {
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    // Show alert dialog after component mounts
    const timer = setTimeout(() => {
      setShowDialog(true);
    }, 2000); // Show dialog after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleRegisterClick = () => {
    setShowDialog(false);
    navigate("/UpcomingEvents");
  };

  const handleCancelClick = () => {
    setShowDialog(false);
  };

  return (
    <div>
      <div className="absolute -z-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        <Meteors number={30} />
      </div>
      <div className="absolute -z-30 w-full h-[910px]">
        <AnimatedGridPattern
          repeatDelay={2}
          width={100}
          height={100}
          numSquares={5}
          className="bg-[#ffffff]"
        />
      </div>
      <div className="z-50 m-0 flex items-center justify-between h-24 bg-black mb-10">
        <div className="logo bg-black">
          <img className="rounded-2xl" src={logo} height={400} width={470} />
        </div>
        <Navbar />
      </div>
      {/* Main Content */}
      <div className="flex flex-col min-h-[calc(100vh-6rem)] justify-center items-center">
        <div className="relative w-full text-center mb-20">
          <WordPullUp
            words="NUV ACM"
            className="text-red-600 font-mega-bold text-9xl p-2 font-aleo"
          />
          <SparklesText
            className="z-30 font-bold absolute left-1/2 transform -translate-x-1/2 text-transparent text-8xl p-2 font-aleo"
            text="NUV ACM"
          />

          {/* Student Chapter and Description */}
          <div className="max-w-6xl mx-auto px-4 mt-16">
            <div className="text-black text-6xl font-extrabold mb-10 font-aleo">
              Student Chapter
            </div>
            <div className="font-aleo font-bold text-xl leading-relaxed mx-auto mb-28 max-w-4xl">
              <a href="https://nuv.ac.in/">
                <span className="text-red-600 underline">Navrachana University</span>
              </a>
              , established in July 2009 in Vadodara, Gujarat, is a premier private institution
              accredited with an 'A' grade by NAAC. It offers a holistic, interdisciplinary
              curriculum emphasizing real-world application. The university houses five schools:
              Science, Engineering & Technology, Business & Law, Environmental Design &
              Architecture, and Liberal Studies & Education, on a modern campus. The Chapter is
              dedicated to fostering knowledge and interest in modern computing—encompassing its
              science, design, development, and applications—while promoting communication among
              enthusiasts, primarily serving students at Navrachana University and reaching out to
              the broader community.
            </div>
          </div>
        </div>
        <div className="flex flex-col	items-center justify-center">
          <div className="w-full absolute">
            <Particles color="#b91c1c" />
          </div>
          <div className="">
            <div className="text-3xl text-center font-bold mb-10  ">
              <BlurredInComponent word="Why to Choose ACM?" />
            </div>
            <div className="flex justify-center gap-12  mb-5 flex-wrap">
              <BenefitsCard
                title="Career Advancement"
                desc="Subscribe to the ACM Digital Library for full-text articles, bibliographic data, research papers, and tutorials on cutting-edge technologies."
                img="/assets/LandingPageAssets/CareerAdvancement.svg"
              />
              <BenefitsCard
                title="Leadership"
                desc="Opportunities for students to take up leadership roles within
                  the chapter and showcase their contributions to a global
                  audience."
                img="/assets/LandingPageAssets/Leadership.svg"
              />

              <BenefitsCard
                title="Networking Opportunities"
                desc="A chance to connect with ACM’s global community of
                  professionals, academicians, and students through conferences,
                  webinars, and mentorship programs."
                img="/assets/LandingPageAssets/Networking.svg"
              />
              <BenefitsCard
                title="Research Opportunities"
                desc="ACM offers research opportunities, connecting students to
                  advancements in computing through publications, conferences,
                  and special interest groups."
                img="/assets/LandingPageAssets/ProffesionalDevelopment.svg"
              />
              <BenefitsCard
                title="Skill Advancement"
                desc="Hands-on learning experiences through workshops, hackathons,
                  coding competitions, and seminars that cover various domains
                  of computing and technology."
                img="/assets/LandingPageAssets/Skills.svg"
              />
            </div>
          </div>
          <div className="mt-16">
            <BlurredInComponent word="What is ACM?" />
          </div>
          <div className="w-full flex items-center justify-center mt-8">
            <div className=" flex items-center max-w-3xl text-justify">
              <div className="font-aleo size-full max-w-full items-center justify-center overflow-hidden pt-8">
                <p className="text-2xl">
                  The{" "}
                  <strong>
                    Association for Computing Machinery (
                    <a
                      className="underline cursor-pointer"
                      href="https://www.acm.org/"
                      target="blank"
                    >
                      ACM
                    </a>
                    )
                  </strong>{" "}
                  is a global organization dedicated to advancing computing as a science and
                  profession. With over 100,000 members worldwide, ACM brings together educators,
                  researchers, and professionals to address the challenges and opportunities in
                  computing. The Navrachana University ACM Chapter joins this vast network, creating
                  a platform for students and faculty to connect, learn, and contribute to the
                  ever-evolving field of technology.
                </p>
              </div>
            </div>
            <div className="text-black flex flex-col w-[500px] items-center justify-center mx-0 px-0 ">
              <div className="relative w-80 h-80">
                <Globe className="absolute w-full h-full" />
              </div>
              <div className="flex gap-5">
                <NumberTicker
                  value={190}
                  className="whitespace-pre-wrap text-5xl font-extrabold tracking-tighter text-black"
                />
                <p className="text-5xl font-extrabold text-black">+</p>
              </div>
              <div className="text-xl font-extrabold tracking-tighter text-black">COUNTRIES</div>
            </div>
          </div>
          <div className="h-28"></div>

          <div className="w-full flex items-center justify-center">
            <BlurredInComponent word="Our Vision & Mission" />
          </div>
          <div className="w-full flex items-center justify-center mt-8">
            <div className=" flex w-[500px] items-center justify-center mx-0 px-0">
              <AnimatedBeamDemo />
            </div>
            <div className=" flex items-center max-w-3xl">
              <p className="pl-9 text-xl text-justify ">
                The ACM Student Chapter envisions fostering an inclusive, innovative, and
                collaborative environment where students can excel in the field of computing and
                technology. Our chapter serves as a bridge between academic learning and
                professional excellence, empowering students to explore emerging trends, contribute
                to impactful projects, and develop problem-solving skills essential for the
                challenges of tomorrow. Through workshops, hackathons, guest lectures, and
                collaborative research opportunities, we aim to inspire curiosity and nurture
                talent. By cultivating a vibrant community, we strive to promote diversity,
                encourage interdisciplinary collaboration, and ignite a passion for lifelong
                learning in the ever-evolving landscape of computing. Together, we are building a
                foundation where the students of today become the thought leaders, innovators, and
                change-makers of the future.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* AI Hackathon Alert Dialog */}
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent className="w-xl w-full bg-black/95 border border-red-500/30 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-bold text-center text-red-400 mb-4">
              🚀 Exciting News
              <p className="text-lg font-semibold text-red-300">AI Hackathon is Coming Soon!</p>
            </AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="space-y-4">
                {/* Event Poster */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-80 h-96 bg-gradient-to-br from-red-600 via-red-700 to-black rounded-2xl p-6 shadow-2xl border border-red-500/50">
                    {/* Poster Content */}
                    <div className="h-full flex flex-col justify-between text-center">
                      <img src={AI_Hackathon_Poster} />
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-2 right-2 w-6 h-6 bg-yellow-300 rounded-full opacity-80"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 bg-red-300 rounded-full opacity-60"></div>
                  </div>
                </div>

                {/* Description */}
                <div className="text-center text-white/90 space-y-3">
                  
                  {/* <p className="text-sm leading-relaxed">
                    Join us for an incredible opportunity to innovate with AI, collaborate with
                    talented developers, and compete for amazing prizes! Whether you're a beginner
                    or expert, this hackathon offers the perfect platform to showcase your skills.
                  </p> */}
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-3 justify-center mt-3">
            <AlertDialogCancel
              onClick={handleCancelClick}
              className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600"
            >
              Maybe Later
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleRegisterClick}
              className="bg-red-600 hover:bg-red-700 text-white border-red-500"
            >
              Register Now
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
