import React from "react";

const Footer = () => {
  return (
    <div className="pt-12 xl:pt-14 px-6">
      <div tabIndex="0" aria-label="footer" className="focus:outline-none w-full border-gray-300 border-t lg:mx-auto md:mx-auto">
        <div className="container mx-auto ">
          {/* Bottom */}
          <div className="xl:flex flex-wrap justify-between mt-5 pb-6 pl-3 sm:pl-0">
            <div className="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 xl:mb-0">
              <p tabIndex="0" className="focus:outline-none text-gray-800 text-base">
                2022 4ty. All Rights Reserved
              </p>
            </div>
            <div className="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0 ">
              <ul className="xl:flex lg:flex md:flex sm:flex justify-between">
                <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                  <a className="focus:outline-none focus:underline" href="/">
                    Terms of service
                  </a>
                </li>
                <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                  <a className="focus:outline-none focus:underline" href="/">
                    Privacy Policy
                  </a>
                </li>
                <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                  <a className="focus:outline-none focus:underline" href="/">
                    Security
                  </a>
                </li>
                <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                  <a className="focus:outline-none focus:underline" href="/">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-11/12 xl:w-1/6 lg:w-1/6 sm:w-11/12 mx-auto lg:mx-0 xl:mx-0 mb-2 lg:mb-0 xl:mb-0 mt-8 lg:mt-8 xl:mt-0">
              <div className="flex justify-start sm:justify-start xl:justify-end space-x-6 pr-2 xl:pr-0 lg:pr-0 md:pr-0 sm:pr-0">
                <div>
                  <a aria-label="Twitter" href="/">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_with_sitemap-svg2.svg" alt="Twitter" />
                  </a>
                </div>
                <div>
                  <a aria-label="Instagram" href="/">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_with_sitemap-svg3.svg" alt="Instagram" />
                  </a>
                </div>
                <div>
                  <a aria-label="Dribble" href="/">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_with_sitemap-svg4.svg" alt="Dribble" />
                  </a>
                </div>
                <div>
                  <a aria-label="Github" href="/">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_with_sitemap-svg5.svg" alt="Github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
