const VideoPresentation = () => {
  return (
    <div className="relative bg-black flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full lg:w-3/4 xl:w-2/3">
        <iframe
          src="https://drive.google.com/file/d/1nT8kPri8dqpQFYTWaZXR9bBt2z30-fQR/preview"
          className="w-full h-64 md:h-96 lg:h-120"
          allow="autoplay"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPresentation;
