import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
type Props = { pageInfo?: PageInfo };

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-justify md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-primary-200 text-2xl">
        about
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="max-sm:-my-12"
      >
        <Image
          width={224}
          height={224}
          src={urlFor(pageInfo?.profilePic).url()}
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-large md:w-[400px] md:h-96 xl:w-[500px] xl:h-[500px] md:max-w-[600px] md:max-h-[400px] xl:max-w-[600px] xl:max-h-[600px] max-xs:max-w-[150px] max-xs:max-h-[150px] xl:mt-10"
          alt="About"
        />
      </motion.div>
      <div className="space-y-2 px-0 md:px-10">
        <h4 className="text-4xl font-semibold max-sm:text-xl max-xs:text-lg">
          Here is a{" "}
          <span className="underline decoration-primary-900">little</span>{" "}
          background
        </h4>
        <p className="text-base text-justify max-sm:text-sm">
          {pageInfo?.backgroundInfo}
        </p>
      </div>
    </motion.div>
  );
}

export default About;
