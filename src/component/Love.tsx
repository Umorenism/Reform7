import pic from "../../public/pexels-photo-887349.webp";

export const Love = () => {
  return (
    <div className="min-h-[500px] bg-white flex flex-col items-center justify-center text-white p-8">
      <div className="flex flex-col items-center text-center max-w-[1500px] p-6 md:p-10 mt-16 md:mt-24">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
          <div className="w-full md:w-1/2 text-black flex flex-col items-center md:items-start">
            <h1 className="text-2xl font-bold mt-4">Love + Grace</h1>
            <p className="text-lg md:text-xl font-semibold py-3 text-center md:text-left w-full">
              The greatest gift a person can give to express his/her love is the
              gift of him/herself in identity, quality time, and compassion. God
              has clearly demonstrated His love for us by giving us Himself in
              Jesus Christ and His Holy Spirit, making Himself available for us
              to come to Him at any time anywhere with any issue, has been where
              we are and can solve any issue we give to Him.
            </p>
            <button className="px-6 py-2 mt-4 font-bold border border-yellow-950 transition-transform transform hover:scale-105 hover:bg-yellow-200">
              Learn More
            </button>
          </div>
          <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
            <img
              src={pic}
              alt="Love and Grace"
              className="w-full max-w-xs md:max-w-full transition-transform transform hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
