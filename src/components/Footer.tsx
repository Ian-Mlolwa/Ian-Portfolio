import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="bg-gray-600 text-sm p-4 text-center text-white">
      Copyright <FontAwesomeIcon icon={faCopyright as any} />{" "}
      {new Date().getFullYear()} Ian Mlolwa.All Right reserved
    </div>
  );
};

export default Footer;
