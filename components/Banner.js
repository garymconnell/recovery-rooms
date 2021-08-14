import Image from "next/image";

const Banner = () => {
  return (
    <div className=" relative mx-auto h-[600px] w-screen z-0 ">
      <div className="absolute w-full h-full  bg-gray-900 z-10">
        {/* Image Container */}
        <Image
          src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?cs=srgb&dl=pexels-leon-ardho-1552252.jpg&fm=jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Text Container */}
      <div className="absolute top-1/4 text-center  w-full  text-gray-100 z-50">
        <h1 className="text-lg lg:text-4xl font-bold">Macs Recovery Room</h1>
        <p className="mt-4 text-sm lg:text-lg max-w-md  md:max-w-2xl mx-auto">
          Kells leading  sports recovery service, catering for athletes of all
          levels, amateur to elite, looking to maintain and get the best out of
          their body, reduce the risk of injury &amp; perform to their maximum
          potential
        </p>
        <button className="mt-4">
          <a
            className=""
            id="Setmore_button_iframe"
            href="https://my.setmore.com/bookingpage/970f22ec-ae43-4fa8-816c-288c9d54fb48"
          >
            <img
              border="none"
              src="https://storage.googleapis.com/full-assets/setmore/images/1.0/Settings/book-now-blue.svg"
              alt="Book an appointment with Luke Menton using Setmore"
            />
          </a>
        </button>
      </div>
      <script
        id="setmore_script"
        type="text/javascript"
        src="https://my.setmore.com/webapp/js/src/others/setmore_iframe.js"
      ></script>
    </div>
  );
};

export default Banner;
