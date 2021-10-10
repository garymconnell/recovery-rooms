import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import db from "../firebase";
import { Circle } from "better-react-spinkit";
import { useRouter } from "next/dist/client/router";

const About = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const recipient = ["lukementon15@gmail.com"];

  const handleSubmit = e => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields");
    } else {
      setLoading(true);
      db.collection("messages")
        .add({
          name,
          team,
          email,
          phone,
          to: recipient,
          message: {
            subject: "Macs Recovery Room Form Submission",
            html: `${name} <br/> ${team} <br/> ${email} <br/> ${phone} <br/> ${message}`,
          },
        })
        .then(() => {
          setLoading(false);
          router.push("/success");
        })
        .catch(err => alert(err.message));
    }
    setName("");
    setTeam("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      <Header />

      {loading ? (
        <div className="flex justify-center">
          <Circle color="rgb(84,203,144)" size={60} />
        </div>
      ) : (
        <div className="mt-6 xl:mt-8 px-5 md:px-20 max-w-7xl mx-auto">
          <h1 className="text-4xl text-center">Macs Recovery Rooms</h1>

          {loading && <h1>Loading...</h1>}

          <p className="text-center mt-4 text-md">
            Macs recovery room is Kells leading sports recovery service.
            Catering for athletes of all levels, amateur to elite, who are
            looking to maintain and get the best out of their body, reduce the
            risk of injury & perform to their maximum potential.
            <br />
            Our service is to help athletes get more out of their performances,
            whatever it may be, by aiding the recovery process in a relaxing
            setting. We aim for customers to leave feeling physically and
            mentally refreshed.
          </p>

          <div className="shadow-xl mt-8 mb-20 sm:mb-8 bg-gray-100 rounded-lg">
            <div className="bg-green-400 text-white text-center p-4 lg:flex flex-col justify-center rounded-t-lg">
              <h1 className="pb-2 text-xl font-semibold">
                Macs Recovery Rooms
              </h1>
              <ul>
                <li>
                  <p>
                    Kells Business Park, 6F, 6F Cavan Road,
                    <br />
                    Mountainpole, Kells, Co. Meath fA82 C3W9
                  </p>
                </li>
                <li className="mt-2">(085) 172 8559</li>
                <li className="mt-2">gary-mcconnell@hotmail.com</li>
              </ul>
            </div>

            <div className="p-4 mt-4 lg:w-full md:px-10 ">
              <h3 className="text-2xl">Contact Us</h3>
              <form>
                <div className="flex flex-col md:grid grid-cols-2 gap-2">
                  <p className="my-4">
                    <label className="block">Name</label>
                    <input
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full outline-none p-2"
                      type="text"
                      name="name"
                      required
                    />
                  </p>
                  <p className="my-4">
                    <label className="block">Team</label>
                    <input
                      value={team}
                      onChange={e => setTeam(e.target.value)}
                      className="w-full outline-none p-2"
                      type="text"
                      name="team"
                    />
                  </p>
                  <p className="my-4">
                    <label className="block">Email</label>
                    <input
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full outline-none p-2"
                      type="email"
                      name="email"
                      required
                    />
                  </p>
                  <p className="my-4">
                    <label className="block">Phone</label>
                    <input
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full outline-none p-2"
                      type="phone"
                      name="phone"
                    />
                  </p>
                </div>
                <p className="my-4">
                  <label className="block">Message</label>
                  <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full outline-none p-2"
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                </p>
                <div className="w-full flex justify-center">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="bg-green-400 text-white w-1/2 my-4 py-2 rounded-lg active:scale-90 transition duration-150 ease-out"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default About;
