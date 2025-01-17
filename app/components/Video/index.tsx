// components/VideoPlayer.js
export default function VideoPlayer() {
  return (
    <div>
      <video className="w-full max-w-2xl rounded-lg shadow-lg" controls>
        <source src="/images/Banner/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
