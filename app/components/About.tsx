import Image, {StaticImageData} from "next/image";
import {assets, infoList, toolsData} from "@/lib/assets";

const AboutMe = () => {
    return (
        <section id={"about"} className={"w-full px-[12%] py-10 scroll-mt-20"}>
            <h4 className={"text-center mb-2 text-lg"}>Introduction</h4>
            <h2 className={"text-center text-5xl"}>About Me</h2>

            <div className={"flex w-full flex-col lg:flex-row items-center justify-center gap-20 my-20"}>
                <div className={"w-64 sm:w-80 rounded-3xl max-w-none"}>
                    <Image src={assets.user_image} alt={'user-image'} className={"w-full rounded-3xl"} width={800} height={800} />
                </div>

                <div className={"max-w-2xl"}>
                    <p className={"mb-10 max-w-2xl"}>
                        I&apos;m a Backend Developer who builds backend systems that solve real problems. I work mainly with NestJS, TypeScript, and PostgreSQL to create clean APIs, manage databases, and build modular applications. I like understanding how different parts of a system work together and writing code that is simple, organized, and easy to maintain. I&apos;m always learning, improving my skills, and looking for opportunities to build reliable backend products with experienced teams.
                    </p>

                    <ul className={"grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"}>
                        {infoList.map(({icon, title, description}: {icon: StaticImageData, title: string, description: string}, index) => (
                            <li key={index} className={"border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-black/20 hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#fff] will-change-transform"}>
                                <Image src={icon} alt={title} className={"w-7 mt-3"} width={48} height={48} />
                                <h3 className={"my-4 font-semibold text-gray-400"}>{title}</h3>
                                <p className={"text-gray-300 text-sm"}>{description}</p>
                            </li>
                        ))}
                    </ul>

                    <h4 className={"my-6"}>Tools I Use</h4>
                    <ul className={"flex items-center gap-3 sm:gap-5"}>
                        {toolsData.map((tool, index) => (
                            <li key={index} className={"flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"}>
                                <Image src={tool} alt={`tool-${index}`} className={"w-5 sm:w-7"} width={80} height={80}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default AboutMe
