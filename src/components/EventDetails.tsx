import { ChevronLeft, ChevronRight } from "lucide-react";
import { Modal } from "./Modal";
import { useState, useEffect, useRef } from "react";
// Import images for demo (first 10)

interface EventDetailsProps {
  isAdmin: boolean;
  eventId?: string;
  Heading: string;
  Description: React.ReactNode;
  formLink?: string;
  qrLink?: string;
  images: string[];
  date?: string;
  events: any;
  setEvents: (e: any) => void;
  reverse?: boolean;
  eventNumber?: number;
}

export const EventDetails = (props: EventDetailsProps) => {
  const [model, setModel] = useState(false);
  const [current, setCurrent] = useState(0);
  const images = props.images;
  const total = images.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const reverse = props.reverse || false;

  // Auto-slide logic
  useEffect(() => {
    if (total <= 1) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [total]);

  function prev() {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
    if (intervalRef.current) clearInterval(intervalRef.current);
  }
  function next() {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
    if (intervalRef.current) clearInterval(intervalRef.current);
  }

  // async function deleteEvent() {
  //   try {
  //     const res = await axios.delete(`${BACKEND_URL}admin/dashboard/Event/`, {
  //       data: {
  //         name: props.Heading,
  //       },
  //     });
  //     props.setEvents(
  //       props.events.filter((e: any) => {
  //         return e.name !== props.Heading;
  //       })
  //     );
  //     if (res.status === 200) {
  //       console.log("Event Deleted successfully");
  //     }
  //   } catch (e) {
  //     console.log("Error occured while trying to remove event");
  //     console.log(e);
  //   }
  // }

  return (
    <div
      className={`w-full flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-10 items-center justify-center my-16 font-aleo relative`}
    >
      {props.isAdmin && (
        <Modal
          open={model}
          isEdit={true}
          eventId={props.eventId}
          onClose={() => {
            setModel(false);
          }}
        />
      )}
      {/* Carousel */}
      <div className="w-full md:w-[400px] flex flex-col items-center z-10 md:mr-8">
        <div className="relative w-full max-w-xl aspect-[5/6] flex items-center justify-center shadow-2xl rounded-3xl overflow-hidden border-4 border-white/10 bg-black/60">
          <img
            className="w-full h-full object-cover transition-all duration-700 rounded-3xl shadow-xl"
            src={images[current]}
            alt={props.Heading + " image"}
            style={{ minHeight: 500, maxHeight: 640 }}
          />
          {total > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 z-20 shadow-lg backdrop-blur"
                onClick={prev}
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 z-20 shadow-lg backdrop-blur"
                onClick={next}
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`block w-3 h-3 rounded-full border-2 ${
                  idx === current
                    ? "bg-red-600 border-red-600"
                    : "bg-gray-200/60 border-white/60"
                }`}
              />
            ))}
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
          {/* Event number badge */}
          {props.eventNumber && (
            <div className="absolute -top-5 -right-5 z-10">
              <div
                className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white text-3xl font-extrabold shadow-lg border-4 border-white/30 select-none"
                style={{ zIndex: 10, position: "relative" }}
              >
                {props.eventNumber}
              </div>
            </div>
          )}
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
            {props.Heading}
          </div>
          {props.date && (
            <div className="text-sm text-pink-200 mb-2 pl-6">
              {(() => {
                const d = new Date(props.date as string);
                return d
                  .toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                  .replace(/ /g, " ");
              })()}
            </div>
          )}
          <div className="text-sm md:text-base text-white/90 pl-6 text-justify">
            {props.Description}
          </div>
          {!props.isAdmin && props.formLink && (
            <div className="pt-5 w-full flex items-center justify-center pl-6">
              {/* <Button
                variant="secondary"
                size="md"
                text="Register Now!"
                onClick={() => {
                  window.open(props.formLink, "_blank");
                }}
              ></Button> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
