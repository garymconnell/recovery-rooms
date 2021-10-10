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
          src="https://firebasestorage.googleapis.com/v0/b/macs-recovery-5a84b.appspot.com/o/img%2FMRR%20Logo_1%20Grey%20-1%20(1).png?alt=media&token=e3398496-bba9-4444-9d4d-44e9bf74c0e7"
          alt="macs recovery rooms"
          className="h-10 w-20 object-cover cursor-pointer "
        />
      </div>

      <div className="flex flex-grow text-center justify-end space-x-10 md:space-x-20">
        <p onClick={() => router.push("/about")} className="cursor-pointer">
          About Macs
        </p>
      </div>
    </header>
  );
};

export default Header;
