import { UserIcon } from "@heroicons/react/outline";
import { MenuIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";
import logo from "../img/logo-gray.png";

const Header = () => {
  const router = useRouter();
  return (
    <header className="flex w-full items-center justify-between sticky top-0 z-50 whitespace-nowrap px-5 md:px-20 py-4 bg-gray-200 text-gray-700 shadow-lg">
      <div>
        <img
          onClick={() => router.push("/")}
          src="https://firebasestorage.googleapis.com/v0/b/gary-recovery-room.appspot.com/o/img%2FMRR%20Logo_1%20Grey%20-1%20(1).png?alt=media&token=d79881d9-d232-4849-aed0-df376e4d39f9"
          alt=""
          className="h-10 w-20 object-cover cursor-pointer "
        />
      </div>

      <div className="flex flex-grow text-center justify-end space-x-10 md:space-x-20">
        <p onClick={() => router.push("/about")} className="cursor-pointer">
          About Macs
        </p>
        <a
          className=""
          id="Setmore_button_iframe"
          href="https://my.setmore.com/bookingpage/970f22ec-ae43-4fa8-816c-288c9d54fb48"
        >
          {" "}
          Book Now
        </a>
      </div>

      <script
        id="setmore_script"
        type="text/javascript"
        src="https://my.setmore.com/webapp/js/src/others/setmore_iframe.js"
      ></script>
    </header>
  );
};

export default Header;
