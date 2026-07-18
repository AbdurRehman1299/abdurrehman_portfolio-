import Image from "next/image";
import {assets} from "@/lib/assets";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section id={"top"} className={"w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"}>
            <div>
                <Image src={assets.profile_img} alt={'profile-image'} className={"rounded-full w-38"} width={316} height={316} priority/>
            </div>

            <h3 className={"flex items-end gap-2 text-xl md:text-2xl mb-3"}>
                Hi! I am Abdur Rehman <Image src={assets.hand_icon} alt={'hand-icon'} className={"w-6"} width={56} height={57}/>
            </h3>

            <h1 className={"text-3xl sm:text-6xl lg:text-[66px]"}>
                Backend Developer based in Pakistan.
            </h1>

            <p className={"max-w-2xl mx-auto"}>
                I build modern backend applications that are clean, scalable, and easy to maintain.
            </p>

            <div className={"flex flex-col sm:flex-row items-center gap-4 mt-4"}>
                <Link href={'mailto:abdurrehman76001@gmail.com'} className={"px-12 py-3 border border-white rounded-full bg-black/50 text-white flex items-center gap-2"}>
                    Email Me <Image src={assets.right_arrow_white} alt={'right-arrow'} className={"w-4"} width={44} height={44}/>
                </Link>

                <Link href={'/Muhammad Abdur Rehman Resume.pdf'} download className={"px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"}>
                    My Resume <Image src={assets.download_icon} alt={'download-icon'} className={"w-4 dark:invert"} width={44} height={44}/>
                </Link>
            </div>
        </section>
    )
}
export default HeroSection
