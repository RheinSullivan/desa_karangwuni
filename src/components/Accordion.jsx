// React
import React from "react";
// React Head Lessui
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
// React Icons
import { IoChevronUpCircle, IoChevronDownCircle } from "react-icons/io5";

const Accordion = () => {
  const data = [
    {
      title: "Setu Sedong",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ratione id veritatis quasi perspiciatis voluptas repudiandae harum fugit explicabo est veniam, aperiam doloremque temporibus.",
    },
    {
      title: "Jembatan Cigantung",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ratione id veritatis quasi perspiciatis voluptas repudiandae harum fugit explicabo est veniam, aperiam doloremque temporibus.",
    },
    {
      title: "Kopi Gincu",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ratione id veritatis quasi perspiciatis voluptas repudiandae harum fugit explicabo est veniam, aperiam doloremque temporibus.",
    },
  ];
  return (
    <div className="w-full">
      {data.map((data, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <>
              <DisclosureButton
                className={`flex w-full items-center justify-between rounded-md bg-white p-4 text-left text-sky-600 ${open ? "border-l-4 border-green" : "mb-4 border"}`}
              >
                <span className="text-lg font-bold">{data.title}</span>
                {open ? (
                  <IoChevronUpCircle className="h-5 w-5 text-sky-600" />
                ) : (
                  <IoChevronDownCircle className="h-5 w-5 text-darkcustom" />
                )}
              </DisclosureButton>
              <DisclosurePanel className="mb-2 rounded-md border-l-4 border-green bg-white p-4 text-black">
                <p className="text-black">{data.desc}</p>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default Accordion;
