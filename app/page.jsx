import Image from "next/image";
import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "../components/Social";
import Photo from "../components/Photo";
import Stast from "../components/Stast";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full Stack Developer</span>
            <h1 className="h1">
              ¡Hola!, yo soy <br />
              <span className="text-accent">Brajin Hanna</span>
            </h1>
            <p className="max-w-[700px] mt-2 mb-9 text-white/80">
              Con años de experiencia creando soluciones web robustas y
              dinámicas, domino tecnologías clave como JavaScript, React,
              Next.js, Node.js, PHP, y muchas más.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Descargar CV</span>
                <FiDownload className="mr-2 text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyle="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stast/>
    </section>
  );
};

export default Home;
