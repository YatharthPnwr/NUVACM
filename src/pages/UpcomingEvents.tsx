import Navbar from "../components/Navbar";
import AnimatedGridPattern from "../components/ui/animated-grid-pattern";
import logo from "@/assets/Frame 4.png";
import { Footer } from "../components/Footer";
import { useState } from "react";

export default function UpcomingEvents() {
  const [isHovered, setIsHovered] = useState(false);

  const handleRegisterClick = () => {
    // Replace with actual Luma link
    window.open("https://lu.ma/ai-hackathon", "_blank");
  };

  return (
    <>
      <div className="fixed -z-30 inset-0 h-full w-full">
        <AnimatedGridPattern repeatDelay={2} width={100} height={100} numSquares={5} className="" />
      </div>
      <div className="z-50 flex items-center justify-between h-24 bg-black mb-10">
        <div className="logo bg-black">
          <img className="rounded-2xl" src={logo} height={400} width={470} />
        </div>
        <Navbar />
      </div>
      <div className="w-full flex flex-col items-center overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 mt-2 text-center">
          Upcoming Events
        </h1>
      </div>

      {/* AI Hackathon Event Card */}
      <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto py-10">
        <div className="w-full flex flex-col md:flex-row gap-10 items-center justify-center my-16 font-aleo relative">
          {/* QR Code Section */}
          <div className="w-full md:w-[400px] flex flex-col items-center z-10 md:mr-8">
            <div className="relative w-full max-w-xl aspect-square flex items-center justify-center shadow-2xl rounded-3xl overflow-hidden border-4 border-white/10 bg-black/60">
              {/* QR Code Placeholder - Replace with actual QR code image */}
              <div className="w-full h-full flex items-center justify-center bg-white rounded-3xl">
                <div className="w-80 h-80 bg-black rounded-2xl flex items-center justify-center">
                  <div className="grid grid-cols-8 gap-1 p-4">
                    {/* Simple QR code pattern placeholder */}
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 ${Math.random() > 0.5 ? "bg-black" : "bg-white"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* QR Code Label */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur">
                Scan to Register
              </div>
            </div>
          </div>

          {/* Event Details Box */}
          <div className="w-full md:w-[600px] flex flex-col gap-4 items-center md:items-start z-20">
            <div
              className="relative w-full max-w-2xl p-6 rounded-3xl shadow-2xl border border-pink-500/30 bg-black/90 text-white flex flex-col gap-4 min-h-[320px]"
              style={{
                minHeight: 320,
                maxHeight: 600,
                boxShadow:
                  "0 8px 32px 0 rgba(31, 38, 135, 0.25), 0 1.5px 12px 0 rgba(236, 72, 153, 0.10)",
                background: "rgba(24,24,27,0.98)",
                border: "1.5px solid rgba(236,72,153,0.18)",
                boxSizing: "border-box",
                position: "relative",
                overflow: "visible",
              }}
            >
              {/* Event badge */}
              <div className="absolute -top-5 -right-5 z-10">
                <div
                  className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white text-lg font-extrabold shadow-lg border-4 border-white/30 select-none"
                  style={{ zIndex: 10, position: "relative" }}
                >
                  NEW
                </div>
              </div>

              {/* Soft inner glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl"
                style={{
                  boxShadow: "0 0 60px 10px rgba(236,72,153,0.10) inset",
                }}
              />

              {/* Accent bar */}
              <div className="absolute left-0 top-6 h-10 w-2 bg-gradient-to-b from-red-600 to-pink-400 rounded-r-xl" />

              <div className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg mb-1 pl-6">
                AI Hackathon
              </div>

              <div className="text-sm text-pink-200 mb-2 pl-6">Coming Soon</div>

              <div className="text-sm md:text-base text-white/90 pl-6 text-justify mb-6">
                Join us for an exciting AI Hackathon where innovation meets creativity! This event
                brings together passionate developers, designers, and AI enthusiasts to collaborate
                on cutting-edge artificial intelligence projects. Whether you're a beginner or an
                expert, this hackathon offers the perfect opportunity to learn, build, and showcase
                your skills in the rapidly evolving world of AI. Participants will work in teams to
                develop innovative AI solutions, compete for amazing prizes, and network with
                industry professionals.
              </div>

              {/* Register Button */}
              <div className="pt-2 w-full flex items-center justify-center pl-6">
                <button
                  onClick={handleRegisterClick}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`
                    px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 transform
                    ${
                      isHovered
                        ? "bg-red-700 text-white scale-105 shadow-lg shadow-red-500/30"
                        : "bg-red-600 text-white hover:bg-red-700"
                    }
                    border-2 border-red-500/50 backdrop-blur-sm
                  `}
                >
                  Register Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
