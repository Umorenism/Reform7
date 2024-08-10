export const NewsLetter = () => {
  return (
    <div className="mt-10 max-h-[300px] bg-slate-200 w-full p-4">
      <div className="p-4 min-h-[400px] m-auto text-center mt-4">
        <div className="flex flex-col md:flex-row gap-4 items-center  p-4">
          <h1 className="w-full mb-5 text-2xl font-bold">
            Be part of our REFORM7 community
          </h1>
          <div className="w-full flex flex-col items-center">
            <div className="py-2 flex items-center w-full">
              <input
                type="text"
                className="w-full max-w-xl h-full outline-none bg-white border-none focus:outline-none"
                placeholder="Enter your email"
              />
              <button className="py-2 px-10 bg-[#3C3C3E] text-white ml-0">
                Subscribe
              </button>
            </div>
            <h2 className="text-xl flex items-start text-start mt-4 w-full">
              Get all the updates on our posts, events, podcasts, etc.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
