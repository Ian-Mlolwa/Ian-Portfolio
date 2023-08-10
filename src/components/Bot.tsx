import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

const Bot = () => {
  return (
    <div
      className="fixed  bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl
    bg-cyan-600 hover:bg-cyan-900 w-16 h-16 flex items-center justify-center rounded-full animate-bounce"
    >
      <FontAwesomeIcon icon={faCommentDots as any} />
    </div>
  );
};

export default Bot;
