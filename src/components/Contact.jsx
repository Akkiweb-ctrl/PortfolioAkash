import { CONTACT } from "../constants";
import React from "react";

import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
    fetch("https://formspree.io/f/xwpezvbe", {
      method: "POST",
      body: new FormData(e.target),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent");
          e.target.reset();
        } else {
          alert("Failed to send message");
        }
      })
      .catch((err) => {
        alert("Failed to send message");
        console.log(err);
      });
  };
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>

      <div className="text-center tracking-tighter mb-10">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        {/* <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
         className="my-4">{CONTACT.phoneNo}</motion.p> */}
        <span>
          Please contact me directly at{" "}
          <a href={`mailto:${CONTACT.email}`} target="_blank" className="border-b">
            {CONTACT.email}
          </a>{" "}
          or through the form below.
        </span>
      </div>
      <div className="text-center">
        <form onSubmit={handleSubmit} method="POST">
          <div>
            {/* <label htmlFor="name" className="mx-4">Name</label> */}
            <input
              name="name"
              className="bg-slate-300 text-black text-lg rounded-md border-none focus:bg-white focus:outline-none w-1/3 px-2 py-1 mb-4"
              type="text"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <textarea
              name="messsage"
              className="bg-slate-300 text-black text-lg rounded-md border-none focus:bg-white focus:outline-none w-1/3 px-2 py-1 mb-4"
              type="text"
              placeholder="Your message"
              rows={5}
              required
            ></textarea>
          </div>
          <div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.2 }}
              className="px-8 py-2 rounded-full bg-slate-400"
            >
              Submit
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
