const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="my justify-between">
        <button className="py-2 px-14 text-black  bg-white rounded-md hover:bg-opacity-80">
          Play
        </button>
        <button className="mx-4 py-2 px-14 text-white  bg-gray-500 rounded-md bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
