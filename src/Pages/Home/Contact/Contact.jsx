import React from "react";

const Contact = () => {
  return (
    <div className="">
      <h2 className="text-center font-bold text-3xl my-10">Contact With Us</h2>
      <div className="bg-white flex justify-evenly p-10 rounded-xl">
        <div className="w-1/3">
          <h2 className="text-5xl text-black font-bold">Hello</h2>
        </div>
        <div className="flex bg-[#FF0126] p-10 gap-10 rounded-xl w-2/3">
          <div className="text-white w-1/2">
            <h3 className="font-bold text-3xl">
              Lets discuss on something cool together
            </h3>
            <div className="grid grid-cols-1 gap-3 mt-20">
                <h5 className="">email.contact@mail.com</h5>
                <h5 className="">+88012 959 500</h5>
                <h5 className="">Street #122, Road #122, Dhaka, Bangladesh</h5>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 bg-white p-10 rounded-xl w-1/2 ">
            <h5 className="font-bold">I am interested in...</h5>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered input-info w-full"
            />
            <input
              type="text"
              placeholder="Your email"
              className="input input-bordered input-info w-full "
            />
            <input
              type="text"
              placeholder="Your phone"
              className="input input-bordered input-info w-full "
            />
            <textarea
              placeholder="Your message"
              className="textarea textarea-bordered textarea-sm w-full "
            ></textarea>
            <button className="btn btn-block bg-[#FF0126] border-0">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
