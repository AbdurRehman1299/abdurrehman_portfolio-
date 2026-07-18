'use client';

import React, {useState} from 'react'
import Image from "next/image";
import {assets} from "@/lib/assets";

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending...");
        const form = event.currentTarget;
        const formData = new FormData(form);

        formData.append("access_key", process.env.NEXT_PUBLIC_KEY || "");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form submitted successfully.");
            form.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section id={"contact"} className={"w-full px-[12%] py-10 scroll-mt-20"}>
            <h4 className={"text-center mb-2 text-lg"}>Connect with me</h4>
            <h2 className={"text-center text-5xl"}>Get in touch</h2>

            <p className={"text-center max-w-2xl mx-auto mt-5 mb-12"}>
                I&apos;d love to hear from you! If you have any questions, comments, or feedback, please use the form below.
            </p>

            <form onSubmit={onSubmit} className={"max-w-2xl mx-auto"}>
                <div className={"grid grid-cols-auto gap-6 mt-10 mb-8"}>
                    <input type={"text"} name={"name"} placeholder={"Enter your name"} required className={"flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-black/20"} autoComplete={"true"}/>
                    <input type={"email"} name={"email"} placeholder={"Enter your email"} required className={"flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-black/20"} autoComplete={"true"}/>
                </div>

                <textarea rows={6} name={"message"} placeholder={"Enter your message"} required className={"w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-black/20 mb-6"}></textarea>

                <button type={"submit"} className={"py-3 px-8 w-max flex items-center justify-between gap-2 border-[0.5px] border-gray-400 rounded-full mx-auto hover:bg-black/20 duration-500"}>Submit now <Image src={assets.right_arrow_white} alt={"right-arrow"} className={"w-4"} width={33} height={22} /></button>

                <p className={"mt-4 text-center"}>{result}</p>
            </form>
        </section>
    )
}
export default Contact
