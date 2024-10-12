import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa"; // Social Media Icons

const Footer = () => {
  return (
    <footer className="grid w-full py-8 text-white bg-blue-300 px-10">
      <div className="container grid justify-center grid-cols-1 gap-8 mx-auto md:grid-cols-3">
        {/* Column 1: Website Name and Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">DeVote</h2>
          <p className="mt-2">Your go-to platform for a transparent election.</p>
          <p className="mt-4">&copy; {new Date().getFullYear()} DeVote. All Rights Reserved.</p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="text-center lg:text-left">
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="transition duration-300 hover:text-blue-400">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="transition duration-300 hover:text-blue-400">
                Events
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="transition duration-300 hover:text-blue-400">
                Profile
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="transition duration-300 hover:text-blue-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media Links */}
        <div className="text-center md:text-left">
          <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center space-x-4 md:justify-start">
            <a
              href="#"
              className="text-white transition duration-300 transform hover:text-blue-400 hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-white transition duration-300 transform hover:text-blue-400 hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              className="text-white transition duration-300 transform hover:text-blue-400 hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
