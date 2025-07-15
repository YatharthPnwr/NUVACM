import { WhatsApp } from "@/icons/Whatsapp";
import FlickeringGrid from "./ui/flickering-grid";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <div>
      <hr className="mt-0 border-dashed" />
      <div className="relative footer text-white p-10 flex flex-col items-center font-aleo">
        <FlickeringGrid
          className="z-0 absolute inset-0 size-full bg-black"
          squareSize={4}
          gridGap={6}
          color="#7f1d1d"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
        <div className="z-50 text-4xl font-aleo font-bold mb-3">NUV ACM Student Chapter</div>
        <div className="links z-50 flex mt-2 gap-4">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Events</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="flex socials z-50 mt-2 gap-2">
          <a href="http://">
            <WhatsApp
              width={20}
              height={20}
              className="hover:scale-125 transition-all"
            />
          </a>
          <Github className="h-5 w-5 hover:scale-125 transition-all cursor-pointer" />
          <Linkedin className="h-5 w-5 hover:scale-125 transition-all cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
