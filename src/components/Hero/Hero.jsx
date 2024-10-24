import React from "react";

export default function Hero() {
  return (
    <div
      className="hero rounded-xl bg-cover mx-auto h-max min-h-screen my-6"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/3kYtv41/banner.png&quot)",
      }}
    >
      
      <div className="hero-content text-neutral-content text-center w-10/12">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
          <p className="mb-5">
          Whether you are a beginner or a seasoned chef, our expert-led sessions offer personalized guidance and inspiration. Join us for an enriching culinary experience that is sure to ignite your passion for food and cooking.
          </p>
          <button className="btn mr-4 bg-primary text-white border-none hover:text-black">Explore Now</button>
          <button className="btn bg-transparent text-white hover:text-black">Our Feedback</button>
        </div>
      </div>
    </div>
  );
}
