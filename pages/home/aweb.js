import React from "react";
import Head from "next/head";
import Image from "next/image";
import homeimg from  "../../public/assests/Images/tail-bg.png";
import { homedata, hometext } from "../data";

const Aweb = () => {
  return (
    <>
      <Head>
        <title>A new web with a Design</title>
      </Head>
      <main className="bg-blue-200 flex justify-around">
        <div className=" h-auto pt-32 pl-20">
          <div className="text-5xl w-3/4 ">{hometext.title}</div>
          <p className="w-1/2 pt-10">{hometext.subtitle}</p>
          <div className="buttons mt-5">
            <button className={hometext.btnClass}>{hometext.btnText}</button>
          </div>
        </div>
        <div
          className="img pt-32 pr-20 rounded-3xl"
          data-aos="flip-left"
          data-aos-delay="500"
        >
          <Image
            src={homeimg}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      </main>
      <div className="flex  bg-blue-200 pt-20 h-96 justify-between pl-20 pr-20">
        {homedata.map((data, i) => {
          const { name, image } = data;
          const { key } = i;
          return (
            <>
              <div
                key={key}
                className="justify-center"
                data-aos="fade-down"
                data-aos-delay="500"
              >
                <Image src={image} height={60} width={60} />
                <h6>{name}</h6>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Aweb;
