import { UserIcon } from "@heroicons/react/outline";
import { MenuIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";
import { PopupButton } from "react-calendly";
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

        <PopupButton
          pageSettings={{
            backgroundColor: "ffffff",
            hideEventTypeDetails: false,
            hideGdprBanner: true,
            hideLandingPageDetails: false,
            primaryColor: "00a2ff",
            textColor: "4d5055",
          }}
          text="Book a Session"
          url="https://calendly.com/lukementon15/hour-session"
        />
      </div>
    </header>
  );
};

export default Header;
