const ServiceCard = ({ img, title }) => {
  return (
    <div className="hover:scale-105 transform transition duration-300 ease-out">
      <div className="h-96 w-96">
        <img
          src={img}
          alt=""
          className="h-full w-full object-cover rounded-2xl"
        />
      </div>

      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default ServiceCard;
