import React from "react";
import { logo } from "../assets/index";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row justify-between pt-10 sm:pt-16 pb-12 space-y-12 md:space-y-0 lg:items-center">
        <div className="md:max-w-xs flex-1 mr-24 xl:mr-32">
          <img src={logo} alt="hoobank" className="w-2/4 mb-6" />
          <p className="paragraph leading-relaxed">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] flex flex-wrap justify-between gap-y-12 md:gap-y-0">
          {footerLinks.map((footerlink) => (
            <div className="font-poppins min-w-[160px]" key={footerlink.title}>
              <h5 className="text-white mb-5">{footerlink.title}</h5>
              <ul className="space-y-3">
                {footerlink.links.map((cur) => (
                  <li className="paragraph" key={cur.name}>
                    <a href={cur.link}>{cur.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="py-6 border-t-[1px] border-t-slate-600">
        <div className="flex justify-between items-center flex-col md:flex-row text-white font-poppins space-y-6 md:space-y-0">
          <p className="paragraph text-sm">
            Copyright &#169; 2022 HooBank. All Rights Reserved.
          </p>
          <ul className="flex items-center space-x-6">
            {socialMedia.map((cur) => (
              <li key={cur.id}>
                <a href={cur.link}>
                  <img src={cur.icon} alt={cur.id} className="w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
