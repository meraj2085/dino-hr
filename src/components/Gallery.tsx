import React from "react";

const Gallery = () => {
  return (
    <section className="py-6 mb-16 max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl lg:font-bold ">
          Work <span className="text-[#8484BD]">Gallery</span>
        </h1>

        <p className="max-w-lg mx-auto mt-4 text-gray-500">
          Our recent work gallery
        </p>
      </div>
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <img
          src="https://source.unsplash.com/301x301/?house/?4"
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 aspect-square"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
          src="https://source.unsplash.com/200x200/?house"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
          src="https://source.unsplash.com/200x200/?house/?1"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
          src="https://source.unsplash.com/200x200/?house/?2"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
          src="https://source.unsplash.com/200x200/?house/?3"
        />
      </div>
    </section>
  );
};

export default Gallery;
