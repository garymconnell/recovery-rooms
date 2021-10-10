import { SiFacebook } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col sm:flex-row px-20 py-6 items-center justify-center bg-gray-200 text-xl whitespace-nowrap">
        <h3 className="pb-4 sm:pb-0">Macs Recovery Rooms &copy;</h3>

        <div className="flex sm:ml-10 space-x-4 mb-4 sm:mb-0">
          <a href="https://www.facebook.com/garymacfitness/">
            <SiFacebook className="text-blue-800" />
          </a>
          <a href="https://instagram.com/macsrecoveryroomskells?utm_medium=copy_link">
            <FiInstagram className="text-red-500" />
          </a>
        </div>
        <h3 className="sm:ml-10 pb-4 sm:pb-0">
          Website by{" "}
          <span className="hover:underline cursor-pointer">
            <a href="https://www.lukementon.com/">Luke Menton</a>
          </span>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
