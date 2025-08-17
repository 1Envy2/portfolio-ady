import { Input } from "@heroui/react";
import { IoMdPaperPlane } from "react-icons/io";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone,
} from "react-icons/hi";

const Contact = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center gap-4 pb-5 px-52">
      <h1 className="text-5xl">Get In Touch</h1>
      <p>
        Have a Project in mind or want to collaborate? Feel free to reach out.
        I&apos;m always open discussing to new opportunities.
      </p>
      <div className="flex flex-row justify-center items-center gap-4 w-6xl">
        <div className="w-1/2 flex  flex-col gap-6 ">
          <h1 className="text-2xl font-bold text-center pb-4">
            Contact Information
          </h1>
          <div className="flex flex-row gap-4   ">
            <HiOutlineMail className="m-2 size-6" />
            <div className="flex flex-col">
              <h1>Email</h1>
              <p>adyatma.y.f@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-row gap-4   ">
            <HiOutlinePhone className="m-2 size-6" />
            <div className="flex flex-col">
              <h1>Phone</h1>
              <p>(+62) 895-3501-30060</p>
            </div>
          </div>
          <div className="flex flex-row gap-4   ">
            <HiOutlineLocationMarker className="m-2 size-6" />
            <div className="flex flex-col">
              <h1>Location</h1>
              <p>Bandar Lampung, Lampung</p>
            </div>
          </div>
        </div>
        <div className=" w-1/2 bg-[#09112A]  p-4 rounded-xl border-1 border-[#101837] ">
          <h1 className="text-2xl font-bold text-center pb-4">
            Send a message
          </h1>
          <form action="" className="flex flex-col gap-4">
            <Input
              label="Your Name"
              type="text"
              className="w-auto "
              variant={"bordered"}
            />
            <Input
              label="Your Email"
              type="email"
              className="w-auto"
              variant={"bordered"}
            />
            <Input
              label="Your Message"
              type="text"
              variant={"bordered"}
              className="w-auto"
            />

            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Send Message
                <IoMdPaperPlane />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
