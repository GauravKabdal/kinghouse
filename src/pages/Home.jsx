import Header from "../components/Header";
import bgImage from "../assets/ayodhya.webp";

const Home = () => {
  return (
    <>
      <Header />
      <section
  id="home"
  className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white pt-20"
  style={{ backgroundImage: `url(${bgImage})` }}
>

        <div className=" bg-opacity-50 p-6 sm:p-8 rounded-lg text-center sm:max-w-xl">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">Make Yourself At Home</h1>
          <p className="text-3xl sm:text-5xl font-bold mb-4">In our <span className="text-red-500 font-bold bg-white px-2">Guest House</span></p>
          <a
            href="#rooms"
            className="bg-blue-600 hover:bg-white text-white hover:text-blue-700 py-2 px-6 rounded-full inline-block"
          >
            Book Now
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
