import { TwitterLogo } from "../icons/Twitter";
import { LinkedInIcon } from "@/icons/LinkedIn";
import { MagicCard } from "./ui/magic-card";
import { useState } from "react";

interface Information {
  imageUrl: string;
  name: string;
  position: string;
  linkedInProfileUrl?: string;
  TwitterProfileUrl: string;
  imgclassName?: string;
  height?: string;
}

export function MemberInfo(props: Information) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative h-full w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <MagicCard
        className="relative h-full w-full overflow-hidden rounded-2xl border border-gray-200/20 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-2"
        gradientColor="#dc2626"
        gradientOpacity={0.3}
      >
        <div className="relative h-full w-full">
          {/* Image Section with Proper Padding */}
          <div className="relative h-5/6 w-full p-4 pb-2">
            <div className="h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200">
              <img
                className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-110 ${
                  props.height || "object-center"
                }`}
                src={props.imageUrl}
                alt={props.name}
              />
            </div>

            {/* Floating Social Icons - Only visible on hover */}
            <div
              className={`z-50 absolute top-6 right-6 flex flex-col gap-2 transition-all duration-300 ${
                isHovered
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4"
              }`}
            >
              {props.TwitterProfileUrl && (
                <a
                  href={props.TwitterProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/90 p-2 shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-white hover:scale-110"
                >
                  <TwitterLogo isOpen={isHovered} />
                </a>
              )}
              {props.linkedInProfileUrl && (
                <a
                  href={props.linkedInProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/90 p-2 shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-white hover:scale-110"
                >
                  <LinkedInIcon isOpen={isHovered} />
                </a>
              )}
            </div>
          </div>

          {/* Content Section with Better Typography */}
          <div className="flex h-32 flex-col justify-start text-center">
            <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-red-200 mb-2">
              {props.name}
            </h3>
            <p className="text-sm font-bold text-white underline">
              {props.position}
            </p>
          </div>

          {/* Subtle Gradient Overlay on Hover */}
          <div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-t from-red-50/20 via-transparent to-transparent transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </MagicCard>
    </div>
  );
}

// Alternative Modern Card Variant (without MagicCard dependency)
export function MemberInfoModern(props: Information) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative h-96 w-80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
        {/* Image Section */}
        <div className="relative h-64 w-full p-6 pb-3">
          <div className="h-full w-full overflow-hidden rounded-xl shadow-md">
            <img
              className="h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-110 "
              src={props.imageUrl}
              alt={props.name}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex h-32 flex-col justify-center px-6 py-4 text-center">
          <h3 className="mb-2 text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-red-600">
            {props.name}
          </h3>

          <p className="mb-4 text-sm font-medium text-gray-600">
            {props.position}
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            <a
              href={props.TwitterProfileUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-gray-500 transition-all duration-200 hover:bg-blue-50 hover:text-blue-500 hover:scale-110"
              onClick={(e) => !props.TwitterProfileUrl && e.preventDefault()}
            >
              <TwitterLogo isOpen={isHovered} />
            </a>
            <a
              href={props.linkedInProfileUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-gray-500 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 hover:scale-110"
              onClick={(e) => !props.linkedInProfileUrl && e.preventDefault()}
            >
              <LinkedInIcon isOpen={isHovered} />
            </a>
          </div>
        </div>

        {/* Hover Effect Border */}
        <div
          className={`absolute inset-0 rounded-2xl border-2 border-red-500/20 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}

// Grid Layout Component for Team Page
export function TeamGrid({ members }: { members: Information[] }) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-800">Meet Our Team</h2>
        <p className="text-lg text-gray-600">
          The brilliant minds behind our success
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
        {members.map((member, index) => (
          <MemberInfo key={index} {...member} />
        ))}
      </div>
    </div>
  );
}
