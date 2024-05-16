import { GiAutoRepair } from "react-icons/gi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (

        <footer className="footer p-10 bg-[#151515] text-white mt-24">
        <div className="max-w-6xl mx-auto footer">
        <aside>
            <div>
                <GiAutoRepair className="text-5xl mb-1"/>
            </div>
            <p>
              Tech Revive Ltd.
              <br />
              Providing reliable tech services since 2006
              <br />
              Copyright © 2024 - All right reserved
            </p>
            <p className="flex gap-2 justify-center items-center">
              <span className="text-[16px]">Follow us:</span>
              <FaFacebookSquare className="text-xl"/>
              <FaLinkedin className="text-xl"/>

            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </footer>
      
    );
};

export default Footer;