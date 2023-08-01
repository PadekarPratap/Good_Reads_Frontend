import { ImLinkedin } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {

    const currentYear = new Date().getFullYear()

  return (
    <div className="bg-primary py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between">
          {/* left section  */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-14">
            {/* company  */}
            <div>
              <h5 className="font-semibold text-[#767676] text-xl">Company</h5>
              <ul className="mt-2 space-y-1 text-secondary">
                <li className="hover:underline cursor-pointer">About Us</li>
                <li className="hover:underline cursor-pointer">Careers</li>
                <li className="hover:underline cursor-pointer">Terms</li>
                <li className="hover:underline cursor-pointer">
                  Privacy Policy
                </li>
                <li className="hover:underline cursor-pointer">Help</li>
                <li className="hover:underline cursor-pointer">Interest</li>
              </ul>
            </div>

            {/* work with us  */}
            <div>
              <h5 className="font-semibold text-[#767676] text-xl">
                Work with us
              </h5>
              <ul className="mt-2 space-y-1 text-secondary">
                <li className="hover:underline cursor-pointer">Authors</li>
                <li className="hover:underline cursor-pointer">Advertise</li>
                <li className="hover:underline cursor-pointer">Authors Blog</li>
                <li className="hover:underline cursor-pointer">API</li>
              </ul>
            </div>

            {/* connect with us  */}
            <div>
              <h5 className="text-[#767676] font-semibold text-xl">
                Connect with us
              </h5>
              <div className="flex items-center gap-4 text-secondary text-2xl mt-2">
                <a href="#">
                  <BsFacebook />
                </a>
                <a href="#">
                  <AiFillTwitterCircle size={30} />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <ImLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* right section  */}
          <div>
            <p>&copy; GoodReads, Inc.</p>
            <p> {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
