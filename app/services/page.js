"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Desarrollo de sitios web personalizados utilizando las últimas tecnologías y mejores prácticas para asegurar una experiencia de usuario óptima y un rendimiento excepcional.",
  },
  {
    num: "02",
    title: "Aplicaciones web",
    description:
      "Creación de aplicaciones web interactivas y funcionales que se adaptan a las necesidades específicas de tu negocio, garantizando una alta usabilidad y escalabilidad.",
  },
  {
    num: "03",
    title: "Full Stack",
    description:
      "Servicios completos de desarrollo Full Stack, abarcando tanto el front-end como el back-end, para ofrecer soluciones integrales y cohesivas que optimicen el flujo de trabajo y la eficiencia del sistema.",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Optimización de motores de búsqueda (SEO) para mejorar la visibilidad de tu sitio web en los resultados de búsqueda y atraer más tráfico orgánico mediante estrategias efectivas y análisis detallados.",
  },
  {
    num: "05",
    title: "Diseño UI/UX",
    description:
      "Diseño de interfaces de usuario (UI) y experiencia de usuario (UX) que garantizan una navegación intuitiva, atractiva y centrada en el usuario, mejorando la satisfacción y retención de los clientes.",
  },
  {
    num: "06",
    title: "Consultoría",
    description:
      "Asesoramiento experto en tecnologías de la información para ayudarte a elegir y implementar las soluciones tecnológicas más adecuadas para tu negocio, optimizando recursos y mejorando la productividad.",
  },
  {
    num: "07",
    title: "Mantenimiento",
    description:
      "Servicios de mantenimiento y soporte técnico continuos para asegurar que tus aplicaciones y sitios web funcionen sin problemas, con actualizaciones regulares y resolución de problemas eficiente.",
  },
  {
    num: "08",
    title: "Marketing Digital",
    description:
      "Estrategias de marketing digital personalizadas para aumentar la presencia en línea de tu negocio, incluyendo gestión de redes sociales, campañas publicitarias y análisis de datos para maximizar el retorno de inversión.",
  },
];

const Services = () => {
  return (
  <section  className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className="container mx-auto">
        <motion.div 
        initial={{opacity:0}}
        animate={{
            opacity:1,
            transition: {delay:2.4, duration: 0.4, ease:'easeIn'}
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
            {services.map((service, index)=> {
                return(
                <div key={index} className="flex flex-1 flex-col justify-center gap-6 group">
                    <div className="w-full flex  justify-between items-center">
                        <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                        <Link href={service.title}>
                            <BsArrowDownRight/>
                        </Link>
                    </div>
                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                    <p className="text-white/60">{service.description}</p>
                    <div className="border-b border-white/20 w-full"></div>
                </div>
                )
            })}
        </motion.div>    
    </div>   
  </section>);
};

export default Services;
