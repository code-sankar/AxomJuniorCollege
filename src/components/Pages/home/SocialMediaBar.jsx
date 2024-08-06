import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

function SocialMediaBar() {
  return (
    <div className="bg-gray-300 p-2 mt-5 flex justify-around items-center rounded-xl shadow-md h-auto text-black">
      <div className="flex flex-col items-center mr-14">
        <a
          href="https://wa.me/yourphonenumber"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="w-10 h-10 mb-2 text-green-500" />
        </a>
        <span className="text-lg font-semibold">WhatsApp</span>
      </div>
      <div className="flex flex-col items-center mr-14">
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="w-10 h-10 mb-2 text-pink-500" />
        </a>
        <span className="text-lg font-semibold">Instagram</span>
      </div>
      <div className="flex flex-col items-center mr-14">
        <a
          href="https://www.facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="w-10 h-10 mb-2 text-blue-600" />
        </a>
        <span className="text-lg font-semibold">Facebook</span>
      </div>
    </div>
  );
}

export default SocialMediaBar;
