import Logo from "@/docs-components/nav-bar/Logo";
import React from "react";

function AboutUs() {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-lg font-bold md:text-3xl">Native UI</h2>
        <p>
          This documentation provides a collection of reusable React components
          and hooks that are designed with built-in functionality and a
          minimalistic design using JSX and Tailwind CSS. No need to install
          extra UI libraries—just copy/past, customize, and use them as you
          like!
        </p>
        <p>
          With a focus on flexibility, performance, and simplicity, these
          components and hooks help you build modern React applications faster
          without the bloat of unnecessary dependencies.
        </p>
      </div>
      <div className="flex flex-col justify-center">
        <div className="relative py-3 sm:mx-auto sm:max-w-xl">
          <div className="home-bg absolute inset-0 -skew-y-6 transform shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl" />
          <div className="contact-card relative flex h-72 w-72 items-center justify-center px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20 md:h-96 md:w-96">
            <Logo className="h-20 w-40 pl-0" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
