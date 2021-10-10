import { PopupButton } from "react-calendly";

const ServiceCard = ({ img, title, price, packageIncludes, link }) => {
  console.log(link);
  return (
    <div className="flex flex-col justify-between items-center m-2 bg-gray-100 rounded-2xl shadow-lg">
      <div className="h-96 w-full">
        <img
          src={img}
          alt=""
          className="h-full w-full object-cover rounded-t-2xl "
        />
      </div>

      <h3 className="text-2xl mt-3">{title}</h3>
      <h4 className="text-lg font-semibold">€{price}.00</h4>

      {packageIncludes?.map((item, i) =>
        Object.entries(item).map((item, i) => (
          <div key={i}>
            <h3 className="text-lg">
              {item[0]} - {item[1]}
            </h3>
          </div>
        ))
      )}

      <PopupButton
        className="bg-gray-200 px-4 py-2 m-2 rounded-lg hover:bg-gray-300 transform transition duration-300 ease-out"
        pageSettings={{
          backgroundColor: "ffffff",
          hideEventTypeDetails: false,
          hideGdprBanner: true,
          hideLandingPageDetails: false,
          primaryColor: "00a2ff",
          textColor: "4d5055",
        }}
        text="Book Now"
        url={link}
      />
    </div>
  );
};

export default ServiceCard;
