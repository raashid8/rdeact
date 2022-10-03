import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Blog = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div data-aos="zoom-in" className="bg-red-400">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          enim consequuntur distinctio earum laborum magnam, atque nihil
          molestiae ab? Rem nobis sapiente enim blanditiis consequuntur,
          perspiciatis officia facere, non quaerat quia laborum earum!
        </p>
      </div>
    </>
  );
};

export default Blog;
