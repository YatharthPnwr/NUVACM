import Navbar from "../components/Navbar";
import AnimatedGridPattern from "../components/ui/animated-grid-pattern";
import logo from "../assets/Frame 4.png";
// import WordPullUp from "../components/ui/word-pull-up";
import { Footer } from "../components/Footer";
// import axios from "axios";
// import { BACKEND_URL } from "../../config";
// import { useEffect, useState } from "react";
// import { EventDetails } from "@/components/EventDetails";
// import { Marquee } from "@/components/magicui/marquee";
import { EventDetails } from "@/components/EventDetails";
import img1 from "../assets/eventImages/OneDrive/compressjpeg/1-min.jpg";
import img2 from "../assets/eventImages/OneDrive/compressjpeg/2-min.jpg";
import img3 from "../assets/eventImages/OneDrive/compressjpeg/3-min.jpg";
import img4 from "../assets/eventImages/OneDrive/compressjpeg/4-min.jpg";
import img5 from "../assets/eventImages/OneDrive/compressjpeg/5-min.jpg";
import img6 from "../assets/eventImages/Event2/Image1E2.png";
import img7 from "../assets/eventImages/Event2/Image2E2.png";
import img8 from "../assets/eventImages/Event2/Image3E2.png";
import img9 from "../assets/eventImages/Event3/Rutu-mi.jpeg";
import img10 from "../assets/eventImages/Event3/social-mi.jpeg";
import img11 from "../assets/eventImages/Event3/Anchors-mi.jpeg";
import img12 from "../assets/eventImages/Event3/GroupPhoto-mi.jpeg";
import img13 from "../assets/eventImages/Event3/Aarya-mi.jpeg";
import img14 from "../assets/eventImages/Event4/img1.jpg";
import img15 from "../assets/eventImages/Event4/img2.jpg";
import img16 from "../assets/eventImages/Event4/img3.jpg";
import img17 from "../assets/eventImages/Event4/img4.jpg";
import img18 from "../assets/eventImages/Event4/img5.jpg";
import img19 from "../assets/eventImages/Event4/img6.jpg";
import img21 from "../assets/eventImages/Event4/Winner2.jpeg";
import img20 from "../assets/eventImages/Event4/Winner1.jpeg";
import img22 from "../assets/eventImages/Event4/Winner3.jpeg";

export default function Events() {
  return (
    <>
      <div className="fixed -z-30 inset-0 h-full w-full">
        <AnimatedGridPattern
          repeatDelay={2}
          width={100}
          height={100}
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
      <div className="w-full flex flex-col items-center overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 mt-2 text-center">
          Event Gallery
        </h1>
      </div>

      {/* New Event Sections */}
      <div className="flex flex-col gap-16 items-center justify-center w-full max-w-6xl mx-auto py-10">
        <EventDetails
          isAdmin={false}
          Heading="NUV ACM Student Chapter Inauguration"
          Description="The NUV ACM Student Chapter was officially inaugurated on 7th February 2025, uniting students and faculties to mark the beginning of an exciting journey in computing. The event featured an inspiring keynote by Dr. Rutvi Shah, ACM-W India Chair, highlighting the future of computing and ACM's role in career development. The inauguration was organized to raise awareness about ACM and its benefits, fostering a culture of innovation and collaboration across Navrachana University and neighboring institutions. Engaging discussions on upcoming workshops, hackathons, and industry collaborations energized participants, with students enthusiastically exploring coding challenges, the ACM Digital Library, and networking opportunities."
          images={[img1, img2, img3, img4, img5]}
          date="2025-02-07"
          formLink="https://example.com/register1"
          qrLink="https://example.com/qr1"
          events={[]}
          setEvents={() => {}}
          reverse={false}
          eventNumber={1}
        />
        <EventDetails
          isAdmin={false}
          Heading="Expert Talk: Technology Changing the Global Landscape by Mr. David Migdal"
          Description="In his talk titled “Technology Changing the Global Landscape”, Mr. Migdal delved into the transformative role of emerging technologies across a variety of domains — including biotechnology, digital banking, life sciences, gaming, and enterprise software.He emphasized the growing importance of digital transformation and innovation as key drivers in shaping the future of industries worldwide. With a rich background in global IT strategy and enterprise innovation, Mr. Migdal offered attendees a valuable perspective on the dynamic and rapidly evolving technological landscape."
          images={[img6, img7, img8]}
          date="2025-04-24"
          events={[]}
          setEvents={() => {}}
          reverse={true}
          eventNumber={2}
        />

        <EventDetails
          isAdmin={false}
          Heading="Expert Talk: Shaping Tomorrow – The Transformative Power of Nanotechnology By Dr. Rutu Parekh (Associate Professor, Dhirubhai Ambani University)"
          Description="An expert talk on nanotechnology was delivered by Dr. Rutu Parekh, focusing on the transformative potential of nanoscience and its foundation in quantum mechanics. She explained how unique behaviors at the nanoscale, such as color variation due to quantum dots, open up groundbreaking possibilities. Real-world applications discussed included IoT, big data, laser projection, cosmetics, and nano-robots—many inspired by nature, like gecko toes and butterfly wings. The talk also introduced nanotechnology’s taxonomy—covering architecture, data representation, materials, and nanochemical oscillators—and highlighted promising career opportunities in material science, aerospace, and engineering."
          images={[img9, img10, img11, img12, img13]}
          date="2025-07-31"
          events={[]}
          setEvents={() => {}}
          reverse={false}
          eventNumber={3}
        />

        <EventDetails
          isAdmin={false}
          Heading="IndiGenius A.I. Hackathon"
          Description={
            <div className="w-full break-words whitespace-pre-line">
              <p>
                The NUV ACM Student Chapter successfully hosted IndiGenius AI,
                an 8-hour state-level hackathon supported by ACM India, on
                September 2, 2025, at Navrachana University. With 28 teams from
                top institutions like Ganpat University, G.H. Patel (CVM
                University), SVIT, and MSU, the campus buzzed with innovation
                from 8 AM to 5 PM as students built AI-powered solutions for
                real-world campus challenges. The event celebrated creativity,
                teamwork, and community spirit.
              </p>
              <div className="mt-4">
                <span className="font-bold text-lg">🏆 Winners:</span>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>
                    <span className="font-semibold">🥇 1st Place:</span> Viraj
                    Mangesh Warhade, Vansh Mehta, Het Mehta, Krish Dave, Chitral
                    Shah – G H Patel College of Engg. & Tech. –{" "}
                    <span className="font-bold">₹15,000</span>
                  </li>
                  <li>
                    <span className="font-semibold">🥈 2nd Place:</span> Taksh
                    Patel, Lavari Virkumar, Prajapati Maitra, Patanvadiya Vikash
                    – Navrachana University –{" "}
                    <span className="font-bold">₹10,000</span>
                  </li>
                  <li>
                    <span className="font-semibold">🥉 3rd Place:</span> Aditi
                    Sudheer, Vedant Gandhi, Diya Desai, Tisha Shah – Navrachana
                    University – <span className="font-bold">₹5,000</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                A huge thanks to our mentors, faculty, and volunteers for making
                this flagship event a grand success!
              </div>
            </div>
          }
          images={[
            img18,
            img14,
            img15,
            img16,
            img17,
            img19,
            img20,
            img21,
            img22,
          ]}
          date="2025-09-02"
          events={[]}
          setEvents={() => {}}
          reverse={true}
          eventNumber={4}
        />
      </div>
      <Footer />
    </>
  );
}
