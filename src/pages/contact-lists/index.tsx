"use client";
import React from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";

type Props = {
    _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

const contactList: Props[] = [
  {
    _id: '1',
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "+234000000000",
  },
  {
    _id: '2',
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "+234000000000",
  },
  {
    _id: '3',
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "+234000000000",
  },
  {
    _id: '4',
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "+234000000000",
  },
];

const ContactLists = () => {
  return (
    <div className="py-12 max-w-4xl mx-auto">
      <h1 className="text-center font-bold text-4xl">Contact Lists</h1>
      <ul className="mt-5 space-y-4">
        {contactList.map((list, index) => (
          <li
            key={index}
            className="flex justify-between border border-red-200 rounded-xl p-4 md:p-6"
          >
            <div>
              <p className="font-semibold text-xl">
                {list?.firstName} {list?.lastName}
              </p>
              <p className="">{list?.phoneNumber}</p>
            </div>
            <div className="flex items-center gap-6">
              <RiDeleteBin7Line
                size={24}
                className="text-red-800 cursor-pointer"
              />
              <FiEdit3 size={24} className=" cursor-pointer" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactLists;
