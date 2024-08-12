"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Cook = () => {
  return (
    <div className="relative" id="cook-section">
      <div className="mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6">
        <div className="absolute right-0 bottom-[-18%] hidden lg:block">
          <Image
            src={"/images/Cook/man-work.png"}
            alt="burger-image"
            width={463}
            height={622}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5">
          <div className="col-span-6 flex justify-start">
            <Image
              src="/images/Cook/cook.png"
              alt="nothing"
              width={636}
              height={808}
            />
          </div>

          <div className="col-span-6 flex flex-col justify-center">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h2 className="text-pink text-lg font-normal mb-3 ls-51 uppercase text-start">
                Quem somos ?
              </h2>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h3 className="text-3xl lg:text-5xl font-semibold text-black text-start">
                A Enersol Energia Solar é a garantia da sua economia.
              </h3>
            </Fade>
            <Fade
              direction={"up"}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="text-grey md:text-lg font-normal mb-10 text-start mt-2">
                A Enersol Energia Solar é uma empresa dedicada a proporcionar
                soluções sustentáveis e econômicas em energia solar. Com foco em
                qualidade, inovação e eficiência, a Enersol se destaca por
                oferecer serviços completos de instalação de sistemas
                fotovoltaicos, desde o planejamento até a execução e manutenção.{" "}
              </p>
              <p className="text-grey md:text-lg font-normal mb-10 text-start mt-1">
                Nós, da Enersol, entendemos a importância de investir em
                energias renováveis para um futuro mais limpo e sustentável.
                Nossa missão é garantir que cada cliente obtenha a melhor
                economia possível em sua conta de energia, enquanto contribui
                para a preservação do meio ambiente. Com uma equipe altamente
                capacitada e tecnologia de ponta, somos a escolha certa para
                quem deseja fazer parte da revolução energética, garantindo
                economia e valorização do seu imóvel.
              </p>
              <div className="flex align-middle justify-center md:justify-start">
                <button className="text-xl font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-10 mr-6">
                  Ver mais
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cook;
