import {
  SlSocialLinkedin,
  SlSocialGithub,
  SlEnvolope,
  SlLink,
} from "react-icons/sl";
import ItemSocial from "./ItemSocial";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mb-8 mt-auto space-y-6 px-4 text-sm font-medium text-gray-500 sm:space-y-4 md:px-8 xl:px-14">
      <Link to="/">
        <img src="/my-films-logo.svg" alt="My Films Logo" />
      </Link>

      <div className="flex items-center gap-4">
        Data provided by
        <a href="https://www.themoviedb.org/" target="_blank">
          <img src="/tmdb.svg" alt="TMDB Logo" />
        </a>
      </div>

      <p>
        This project uses TMDB and the TMDB API but is not endorsed, certified
        or ortherwise approved by TMDB.
      </p>

      <div className="flex gap-6">
        {/* GitHub */}
        <ItemSocial url="https://github.com/gabesone">
          <SlSocialGithub />
        </ItemSocial>

        {/* LinkedIn */}
        <ItemSocial>
          <SlSocialLinkedin />
        </ItemSocial>

        {/* Website */}
        <ItemSocial>
          <SlLink />
        </ItemSocial>

        {/* Email */}
        <ItemSocial url="mailto:sena6.gabriel@gmail.com">
          <SlEnvolope />
        </ItemSocial>
      </div>
    </footer>
  );
}

export default Footer;
