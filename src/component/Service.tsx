import vid from "../video/reformvideo.mp4";

export const Service = () => {
  return (
    <div className="min-h-[500px] bg-white flex flex-col items-center justify-center text-white p-8">
      <div className="flex flex-col items-center text-center max-w-[1500px] p-10 mt-24">
        <h1 className="text-4xl mb-10 text-black font-bold">Who We Are</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="w-full md:w-1/2 h-[400px]">
            <video
              src={vid}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2  p-4 flex items-center justify-center text-black flex-col">
            <p className="text-xl">
              We are followers of Jesus Christ, anointed and consumed with the
              passion of the Holy Spirit in love and grace, to see Africa become
              the people God has purposed her to be, by raising reformers that
              are passionate, focused, and very courageous to influence society
              everyday by walking in their God-driven purposes outside (and
              within) the four walls of the church. We are not religious;
              rather, through our intimate relationship with God, we are able to
              influence our society with the same influence we receive from God.
              We are rebuilders, restorers… REFORMERS!
            </p>
            <button className="px-6 py-2 mt-4 font-bold border border-yellow-950 transition-transform transform hover:scale-105 hover:bg-yellow-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-yellow-950 h-1"></div>
    </div>
  );
};
