export const ReformMedia = () => {
  return (
    <div className="min-h-full w-full mt-24 p-4 bg-white bg-media">
      <div className="max-w-6xl p-4 min-h-[400px] m-auto text-center mt-4">
        <h1 className="text-4xl font-bold text-white">REFORM7 MEDIA</h1>
        <p className="text-white py-4">
          REFORM7 MEDIA is designed to release perpetual frequencies of light,
          sound, fire, wind and water of God the Father, Jesus Christ the King
          of Glory, and Holy Spirit the Dunamis (Power) of Heaven to bring
          reformation to cultures and societies everyday.
        </p>
        <div className="flex items-center justify-center flex-col gap-10 py-4">
          <div className="flex gap-2">
            <h1 className="text-3xl font-bold text-white">Videos:</h1>
            <button className="px-5 bg-orange-700 py-2 text-white rounded-md">
              WATCH NOW
            </button>
          </div>
          <div className="flex gap-2">
            <h1 className="text-3xl font-bold text-white">Podcasts</h1>
            <button className="px-5 bg-orange-700 py-2 text-white rounded-md">
              LISTEN NOW
            </button>
          </div>
          <div className="flex gap-2">
            <h1 className="text-3xl font-bold text-white">Radio:</h1>
            <button className="px-5 bg-orange-700 py-2 text-white rounded-md">
              LISTEN NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
