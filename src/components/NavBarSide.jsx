"use client";
import { Disclosure } from "@headlessui/react";
import React from "react";

function NavBarSide() {
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button
          className="absolute p-2 top-4 right-4 inline-flex items-center peer justify-center hover:bg-slate-600 group"
          title="Title"
        >
          <svg
            className="block md:hidden bg-slate-100"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 50 50"
          >
            <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
          </svg>
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen z-20 bg-white fixed top-0 -left-96 lg:w:60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-150">
          <h1 className="text-base text-center text-blue-50">First</h1>
          <div className="my-4 border-b border-gray-50">
            <div className="flex mb-2 justify-start items-center gap-4">
              <div className="text-red-200">Second</div>
            </div>
            <div className="flex mb-2 justify-start items-center gap-4">
              <div className="text-red-200">Second</div>
            </div>
            <div className="flex mb-2 justify-start items-center gap-4">
              <div className="text-red-200">Second</div>
            </div>
            <div className="flex mb-2 justify-start items-center gap-4">
              <div className="text-red-200">Second</div>
            </div>
            <div className="flex mb-2 justify-start items-center gap-4">
              <div className="text-red-200">Second</div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default NavBarSide;
