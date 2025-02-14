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
}

export function MemberInfo(props: Information) {
    const [mouse, updateMouse] = useState(false);
    return (
        <div className="relative h-80 w-72" onMouseEnter={() => { updateMouse(true) }} onMouseLeave={() => { updateMouse(false) }}>
            <MagicCard className="flex justify-center p-5" children={
                <div className="relative h-full w-full">
                    <div className={`${props.imgclassName} image overflow-hidden rounded-lg ${mouse ? "transform-gpu scale-95 duration-300" : ""}`}>
                        <img className="rounded-lg h-full w-full object-cover" src={props.imageUrl} />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end items-center bg-black bg-opacity-70 text-white p-0 mt-52" style={{ height: '35%', width: '100%' }}>
                        <div className="text-start font-extrabold text-xl mt-2"><p>{props.name}</p></div>
                        <div className="text-start mb-2"><p>{props.position}</p></div>
                        <div className="flex justify-center gap-5 mb-2">
                            <a href={props.TwitterProfileUrl} target="_blank" rel="noopener noreferrer">
                                <TwitterLogo isOpen={mouse} />
                            </a>
                            <a href={props.linkedInProfileUrl} target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon isOpen={mouse} />
                            </a>
                        </div>
                    </div>
                </div>
            } />
        </div>
    );
}
