"use client";
import { useState } from "react";
import TextField from "../text-field/TextField";

function ContactForm() {
  const [values, setValues] = useState({
    fullName: "",
    phone: "",
    email: "",
    nickname: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <div className="flex flex-col justify-center py-6">
      <div className="relative py-3 sm:mx-auto sm:max-w-xl">
        <div className="home-bg absolute inset-0 -skew-y-6 transform shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"></div>
        <div className="contact-card relative px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="mx-auto max-w-md">
            <div>
              <h1 className="text-2xl font-semibold">Contact us</h1>
            </div>
            <form className="" onSubmit={handleSubmit}>
              <div className="space-y-4 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                <TextField
                  id="fullName"
                  name="fullName"
                  inputMode="text"
                  label="Your name"
                  placeholder=""
                  type="text"
                  value={values.fullName}
                  handleChange={handleChange}
                  required
                />
                <TextField
                  id="phone"
                  name="phone"
                  inputMode="text"
                  label="phone number"
                  placeholder=""
                  type="text"
                  value={values.phone}
                  handleChange={handleChange}
                  required
                />
                <TextField
                  id="email"
                  name="email"
                  inputMode="email"
                  label=" Enter your email"
                  placeholder=""
                  type="email"
                  value={values.email}
                  handleChange={handleChange}
                  required
                />

                <TextField
                  id="message"
                  name="message"
                  label="Enter your message"
                  placeholder=""
                  handleChange={handleChange}
                  type="text"
                  value={values.email}
                  inputMode="text"
                  required
                />
              </div>
              <div className="relative">
                <button
                  type="submit"
                  className="btn-bg w-full rounded-full p-2 text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
