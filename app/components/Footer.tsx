import Image from "next/image";
import {assets} from "@/lib/assets";
import Link from "next/link";

const Footer = () => {
    return (
        <section className={"mt-20"}>
            <div className={"text-center"}>
                <Image src={assets.logo_dark} alt={"logo"} className={"w-36 mx-auto mb-2"} width={360} height={70} />

                <div className={"w-max flex items-center gap-2 mx-auto"}>
                    <Image src={assets.mail_icon_dark} alt={"mail-icon"} className={"w-6"} width={64} height={47}/>
                    abdurrehman76001@gmail.com
                </div>
            </div>

            <footer className={"text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6"}>
                <small>
                    &copy; 2026 Abdur Rehman. All rights reserved.
                </small>
                <ul className={"flex items-center gap-10 justify-center mt-4 sm:mt-0"}>
                    <li>
                        <Link
                            target={"_blank"}
                            href={'https://github.com/AbdurRehman1299'}
                            className={"flex items-center gap-3 justify-center"}>
                            <Image
                                src={assets.github}
                                alt="GitHub"
                                width={18}
                                height={18}
                            />
                            GitHub
                        </Link>
                    </li>
                    <li>
                        <Link
                            target={"_blank"}
                            href={'https://www.linkedin.com/in/abdur-rehman313/'}
                            className={"flex items-center gap-3 justify-center"}>
                            <Image
                                src={assets.linkedin}
                                alt="LinkedIn"
                                width={18}
                                height={18}
                            />
                            LinkedIn
                        </Link>
                    </li>
                    <li>
                        <Link
                            target={"_blank"}
                            href={'https://x.com/abdur_rehmandev'}
                            className={"flex items-center gap-3 justify-center"}>
                            <Image
                                src={assets.twitter}
                                alt="X (formerly Twitter)"
                                width={14}
                                height={14}
                            />
                            Twitter/X
                        </Link>
                    </li>
                </ul>
            </footer>
        </section>
    )
}
export default Footer
