import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import img1 from "../assets/eventImages/OneDrive/compressjpeg/1-min.jpg";
import img2 from "../assets/eventImages/OneDrive/compressjpeg/2-min.jpg";
import img3 from "../assets/eventImages/OneDrive/compressjpeg/3-min.jpg";
import img4 from "../assets/eventImages/OneDrive/compressjpeg/4-min.jpg";
import img5 from "../assets/eventImages/OneDrive/compressjpeg/5-min.jpg";
import img6 from "../assets/eventImages/OneDrive/compressjpeg/6-min.jpg";
import img7 from "../assets/eventImages/OneDrive/compressjpeg/7-min.jpg";
import img8 from "../assets/eventImages/OneDrive/compressjpeg/8-min.jpg";
import img9 from "../assets/eventImages/OneDrive/compressjpeg/9-min.jpg";
import img10 from "../assets/eventImages/OneDrive/compressjpeg/10-min.jpeg";
import img11 from "../assets/eventImages/OneDrive/compressjpeg/11-min.jpeg";
import img12 from "../assets/eventImages/OneDrive/compressjpeg/12-min.jpeg";
import img13 from "../assets/eventImages/OneDrive/compressjpeg/13-min.jpeg";
const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
];

const firstRow = images.slice(0, images.length / 2);
const secondRow = images.slice(images.length / 2);

const ImageCard = ({ img }: { img: string }) => {
    return (
        <div
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-2",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-100/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-500/[.15]",
            )}
        >
            <img className="w-full h-full object-cover rounded-xl" alt="" src={img} />
        </div>
    );
};

export function MarqueeDemo() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee className="[--duration:26s]">
                {firstRow.map((img, index) => (
                    <ImageCard key={index} img={img} />
                ))}
            </Marquee>
            <Marquee reverse className="[--duration:26s]">
                {secondRow.map((img, index) => (
                    <ImageCard key={index} img={img} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
    );
}
