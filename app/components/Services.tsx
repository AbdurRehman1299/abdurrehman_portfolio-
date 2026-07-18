import {serviceData} from "@/lib/assets";
import Image, {StaticImageData} from "next/image";

const Services = () => {
    return (
        <section id={"services"} className={"w-full px-[12%] py-10 scroll-mt-20"}>
            <h4 className={"text-center mb-2 text-lg"}>What I Offer</h4>
            <h2 className={"text-center text-5xl"}>My Services</h2>

            <p className={"text-center max-w-2xl mx-auto mt-5 mb-12"}>
                Turning ideas into reliable backend systems with modern technologies.
            </p>

            <div className={"grid grid-cols-auto gap-6 my-10"}>
                {serviceData.map(({icon, title, description}: {icon: StaticImageData, title: string, description: string}, index) => (
                    <div key={index} className={"border border-gray-400 rounded-lg px-8 py-15 cursor-pointer hover:bg-black/20 hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#fff] will-change-transform"}>
                        <Image src={icon} alt={title} className={"w-10 dark:invert"} width={128} height={128}/>
                        <h3 className={"text-lg my-4 text-gray-300"}>{title}</h3>
                        <p className={"text-sm text-gray-300 leading-5"}>{description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Services
