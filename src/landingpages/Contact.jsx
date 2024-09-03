import React, { useState } from "react";
// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../components/firebase.config";
// React Router Location
import { useLocation } from "react-router-dom";
// React Hot Toast
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const dbref = collection(db, "ContactForm");
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(dbref, { Name: name, Email: email, Message: message });
      toast.success("Pesan berhasil terkirim, terima kasih 😊");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Ah... Tidak pesanmu gagal terkirim 😟");
    }
    window.history.replaceState(null, "", location.pathname);
  };

  return (
    <section
      id="contact"
      className="flex items-center justify-center bg-sky-600 pb-32 pt-20 dark:bg-green lg:pt-36"
    >
      <div className="container mx-10 flex flex-col items-center justify-center">
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 6000,
            style: {
              background: "#0e132766",
              backdropFilter: "blur(4px)",
            },
            success: {
              duration: 4000,
              className: "toast-success",
              style: {
                border: "2px solid green",
                boxShadow:
                  "0 1px 3px 0 rgb(0, 255, 0), 0 1px 3px 0 rgb(0, 255, 0)",
                color: "#00ff00",
              },
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
            error: {
              className: "toast-error",
              duration: 4000,
              style: {
                border: "2px solid red",
                boxShadow:
                  "0 1px 3px 0 rgb(255, 0, 0), 0 1px 3px 0 rgb(255, 0, 0)",
                color: "#ff0000",
              },
              theme: {
                primary: "red",
                secondary: "black",
              },
            },
          }}
        />
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold text-white dark:text-black lg:text-3xl">
              Contact Us
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-darkcustom dark:text-gray-100 lg:text-4xl">
              Hubungi Kami
            </h2>
            <p className="text-base font-medium text-gray-700 dark:text-gray-300 lg:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              nam numquam sit debitis perspiciatis quos.
            </p>
          </div>
        </div>
        <form className="mb-32 w-full" onSubmit={handleSubmit}>
          <div className="mb-8 w-full px-4">
            <label
              htmlFor="name"
              className="text-base font-bold text-white dark:text-black"
            >
              Nama
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              placeholder="Nama Lengkapmu"
              className="mt-3 w-full rounded-md bg-sky-800 p-3 text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-green dark:bg-[#096e2e] dark:text-gray-200"
              value={name}
            />
          </div>
          <div className="mb-8 w-full px-4">
            <label
              htmlFor="email"
              className="text-base font-bold text-white dark:text-black"
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="contoh.emailmu@gmail.com"
              className="mt-3 w-full rounded-md bg-sky-800 p-3 text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-green dark:bg-[#096e2e] dark:text-gray-200"
              value={email}
            />
          </div>
          <div className="mb-8 w-full px-4">
            <label
              htmlFor="message"
              className="text-base font-bold text-white dark:text-black"
            >
              Pesan
            </label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              placeholder="Isi pesan disini"
              className="mt-3 h-32 w-full rounded-md bg-sky-800 p-3 text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-green dark:bg-[#096e2e] dark:text-gray-200 lg:h-64"
              value={message}
            />
          </div>
          <div className="w-full px-4">
            <button
              type="submit"
              className="btn btn-sm border-2 border-l-gray-400 border-t-gray-400 font-semibold text-white transition duration-500 hover:text-darkcustom dark:text-white dark:hover:text-white"
            >
              Kirim Pesan
            </button>
          </div>
        </form>
        <iframe
          id="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.98378988961!2d108.59593336721191!3d-6.8910869194050015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1a9f5ffdd36f%3A0xe7ef90ba42aad3f3!2sKarangwuni%2C%20Sedong%2C%20Cirebon%2C%20West%20Java%2C%20Indonesia!5e0!3m2!1sen!2ssg!4v1725215441658!5m2!1sen!2ssg"
          width="100%"
          height="700"
          style={{ maxWidth: "1150px", borderRadius: 10, margin: "0 auto" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default Contact;
