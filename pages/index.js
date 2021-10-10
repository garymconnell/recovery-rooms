import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Map from "../components/Map";
import ServiceCard from "../components/ServiceCard";
import db from "../firebase";

export default function Home({ services }) {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Macs Recovery Room || Leading Sports Recovery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <main className="mx-auto px-8 max-w-7xl lg:max-w-[1800px]">
        <section>
          <h2 className="text-4xl font-semibold pt-10 pl-2 pb-2">Services</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 gap-8 ">
            {services.map(service => (
              <ServiceCard
                key={service.id}
                img={service.img}
                title={service.title}
                price={service.price}
                packageIncludes={service.PackageIncludes}
                link={service.link}
              />
            ))}
          </div>
        </section>
      </main>

      <section className="mt-4 mb-10 mx-auto h-screen flex flex-col p-4 px-8 sm:px-16 max-w-7xl lg:max-w-[1800px] ">
        <h3 className="text-4xl font-semibold py-4">Our Location</h3>
        <Map />
      </section>

      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const services = await db
    .collection("services")
    .orderBy("price", "desc")
    .get();

  const docs = services.docs.map(service => ({
    id: service.id,
    ...service.data(),
  }));

  return {
    props: {
      services: docs,
    },
  };
}
