import pic from "../../public/ff.png";

export const Mission = () => {
  return (
    <div className="min-h-[500px] bg-white flex flex-col items-center justify-center text-white p-8">
      <div className="flex flex-col items-center text-center max-w-[1500px] p-6 md:p-10 mt-16 md:mt-24">
        <h1>Missions + Projects</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
          <div className="w-full md:w-1/2 text-black flex flex-col items-center md:items-start">
            <h1 className="text-lg md:text-xl font-semibold py-3 text-center md:text-left">
              As part of JHF USA , we reach out to the lost, orphans, widows,
              prisoners, and poor, as well as provide REFORMATIONAL projects and
              operations in less-privileged communities as God directs us. “And
              the King will answer them, ‘Truly, I say to you, as you did it to
              one of the least of these my brothers, you did it to me.’ Matthew
              25:40
            </h1>
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
