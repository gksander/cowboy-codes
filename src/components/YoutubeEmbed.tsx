import { FaPlayCircle } from "./icons/FaPlayCircle";
import { useState } from "preact/hooks";

type YoutubeEmbedProps = {
  id: string;
};

export const YoutubeEmbed = ({ id }: YoutubeEmbedProps) => {
  const [isActivated, setIsActivated] = useState(false);

  return (
    <article
      style={{
        backgroundImage: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)`,
      }}
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    >
      {isActivated ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          width="100%"
          height="100%"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0"
        ></iframe>
      ) : (
        <button
          className="absolute inset-0 flex justify-center items-center bg-gray-300 bg-opacity-80 backdrop-grayscale"
          onClick={() => setIsActivated(true)}
          aria-label="Play video"
        >
          <FaPlayCircle class="w-10 h-10 text-gray-800 group-hover:text-secondary-500 transition-colors duration-150" />
        </button>
      )}
    </article>
  );
};
