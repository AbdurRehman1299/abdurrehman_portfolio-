import { assets, workData } from "@/lib/assets";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section id={"projects"} className={"w-full px-[12%] py-10 scroll-mt-20"}>
      <h4 className={"text-center mb-2 text-lg"}>My Portfolio</h4>
      <h2 className={"text-center text-5xl"}>Projects</h2>

      <p className={"text-center max-w-2xl mx-auto mt-5 mb-12"}>
        Explore the projects I&apos;ve built to solve real problems and
        strengthen my backend development skills.
      </p>

      <div className={"grid grid-cols-auto my-10 gap-6"}>
        {workData.map((project, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className={
              "aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group will-change-transform"
            }
          >
            <Link target="_blank" href={project.link}>
              <div
                className={
                  "bg-black/95 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:-translate-y-2"
                }
              >
                <div>
                  <h2 className={"font-semibold"}>{project.title}</h2>
                  <p className={"text-sm text-gray-400"}>
                    {project.description}
                  </p>
                </div>

                <div
                  className={
                    "border rounded-full border-white w-9 aspect-square flex items-center justify-center shadow-[1px_1px_0_#fff] group-hover:bg-white  transition"
                  }
                >
                  <Image
                    src={assets.send_icon}
                    alt={"send-icon"}
                    className={"w-5 dark:invert group-hover:invert-0"}
                    width={36}
                    height={34}
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
