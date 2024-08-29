import React from "react";

const CustomizeOptions = () => {
  return (
    <section className="my-20">
      <div className="max-w-7xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-5 md:mb-12">
          Customizable Options
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-4 text-justify">
          Mechanical keyboards provide endless customization possibilities to
          match your personal style and needs. From keycaps to switches, you can
          create a keyboard that is uniquely yours. This flexibility allows you
          to tailor your typing experience, whether you prioritize aesthetics,
          feel, or functionality.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-justify">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md border border-gray-300">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Keycaps</h3>
            <p className="text-gray-700">
              Choose from a variety of materials, profiles, and colors to create
              a keyboard that stands out. Keycaps can be made of ABS, PBT, or
              POM materials, each offering a different feel and durability.
              Profiles such as SA, DSA, and OEM allow you to further customize
              the height and shape of your keycaps. With endless color options
              and designs, you can make your keyboard truly unique.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md border border-gray-300">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Switches</h3>
            <p className="text-gray-700">
              Select from different switch types (linear, tactile, clicky) to
              get the perfect feel. Linear switches offer smooth keystrokes with
              no tactile bump, ideal for fast typing and gaming. Tactile
              switches provide a noticeable bump at the actuation point,
              enhancing typing feedback. Clicky switches add an audible click
              sound along with the tactile bump, preferred by those who enjoy
              auditory feedback. Switches also come in different actuation
              forces, allowing you to choose the level of resistance that suits
              your typing style.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md border border-gray-300">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Layouts</h3>
            <p className="text-gray-700">
              Choose from various layouts (e.g., 60%, TKL, full-size) to fit
              your desk and typing needs. A 60% layout is compact and ideal for
              minimalist setups, while a Tenkeyless (TKL) layout retains the
              function keys but omits the numeric keypad, saving desk space.
              Full-size keyboards include all keys, including the number pad,
              providing a complete typing experience. There are also ergonomic
              and split layouts designed to reduce strain during long typing
              sessions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeOptions;
