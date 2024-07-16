import { Link } from "react-router-dom";
import {
  FaceBookIcon,
  InstagramIcon,
  TwitterIcon,
  GitHubIcon,
  DribbleIcon,
} from "../../shared/Icons";

function LandingSocialMediaIcons() {
  return (
    <div className="mt-8 flex space-x-6 text-gray-600">
      <Link
        className="hover:opacity-75"
        to="#"
        target="_blank"
        rel="noreferrer"
      >
        <span className="sr-only"> Facebook </span>
        <FaceBookIcon />
      </Link>
      <Link
        className="hover:opacity-75"
        to="#"
        target="_blank"
        rel="noreferrer"
      >
        <span className="sr-only"> Instagram </span>
        <InstagramIcon />
      </Link>
      <Link
        className="hover:opacity-75"
        to="#"
        target="_blank"
        rel="noreferrer"
      >
        <span className="sr-only"> Twitter </span>
        <TwitterIcon />
      </Link>
      <Link
        className="hover:opacity-75"
        to="#"
        target="_blank"
        rel="noreferrer"
      >
        <span className="sr-only"> GitHub </span>
        <GitHubIcon />
      </Link>
      <Link
        className="hover:opacity-75"
        to="#"
        target="_blank"
        rel="noreferrer"
      >
        <span className="sr-only"> Dribble </span>
        <DribbleIcon />
      </Link>
    </div>
  );
}

export default LandingSocialMediaIcons;
