import { useRouter } from "next/dist/client/router";

const Success = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center justify-center text-center p-5 md:p-20 rounded-xl shadow-xl bg-gray-200">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/macs-recovery-5a84b.appspot.com/o/img%2FMRR%20Logo_1%20Grey%20-1%20(1).png?alt=media&token=e3398496-bba9-4444-9d4d-44e9bf74c0e7"
          alt="macs recovery rooms"
          className=" h-[300px] w-[300px] md:h-[500px] md:w-[500px] object-contain"
        />
        <h3 className="-mt-16">Your message has been received!</h3>
        <p>A member of our team will be in touch shortly</p>
        <button
          onClick={() => router.push("/")}
          className="bg-green-400 text-white my-4 py-2 px-20 rounded-lg active:scale-90 transition duration-150 ease-out"
        >
          Return to Homepage
        </button>
      </div>
    </div>
  );
};

export default Success;
