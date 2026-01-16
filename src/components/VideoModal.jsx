import { X } from "lucide-react";

export const VideoModal = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-black/60 hover:bg-black text-white p-2 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <video
          src={video}
          controls
          autoPlay
          className="w-full h-full rounded-2xl bg-black"
        />
      </div>
    </div>
  );
};
