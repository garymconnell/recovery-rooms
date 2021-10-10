import Image from "next/image";
import { PopupButton } from "react-calendly";

const Banner = () => {
  return (
    <div className=" relative mx-auto h-[600px] w- z-0 ">
      <div className="absolute w-full h-full  bg-gray-900 z-10">
        {/* Image Container */}
        <Image
          src="https://images.pexels.com/photos/949131/pexels-photo-949131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Text Container */}
      <div className="absolute top-1/4 text-center w-full text-gray-100 z-50">
        <h1 className="text-2xl lg:text-4xl font-bold">Macs Recovery Room</h1>
        <p className="mt-4 text-sm lg:text-lg max-w-[300px] sm:max-w-[500px] md:max-w-2xl mx-auto">
          Kells leading  sports recovery service, catering for athletes of all
          levels, amateur to elite, looking to maintain and get the best out of
          their body, reduce the risk of injury &amp; perform to their maximum
          potential
        </p>
        <PopupButton
          className="bg-blue-500 mt-4 py-2 px-4 rounded-lg font-semibold"
          pageSettings={{
            backgroundColor: "ffffff",
            hideEventTypeDetails: false,
            hideGdprBanner: true,
            hideLandingPageDetails: false,
            primaryColor: "00a2ff",
            textColor: "4d5055",
          }}
          text="Book a 60 min Session here or select a different package below"
          url="https://calendly.com/macsrecoveryroomskells/60-mins-session"
        />
      </div>
    </div>
  );
};

export default Banner;
