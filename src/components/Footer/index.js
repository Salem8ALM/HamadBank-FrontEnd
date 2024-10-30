import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-800 text-gray-300 text-sm py-5 ">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1  md:grid-cols-5 gap-2">
          {/* Personal Col */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-white font-bold">PERSONAL</h4>
            <a href="/" className="hover:text-gray-100">
              Accounts
            </a>
            <a href="/" className="hover:text-gray-100">
              Cards
            </a>
            <a href="/" className="hover:text-gray-100">
              Finance
            </a>
            <a href="/" className="hover:text-gray-100">
              Investments
            </a>
            <a href="/" className="hover:text-gray-100">
              Ways to Bank
            </a>
            <a href="/" className="hover:text-gray-100">
              Discounts & Offers
            </a>
          </div>
          {/* Private Col */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-white font-bold">PRIVATE</h4>
            <a href="/" className="hover:text-gray-100">
              Account
            </a>
            <a href="/" className="hover:text-gray-100">
              Cards
            </a>
            <a href="/" className="hover:text-gray-100">
              Finance
            </a>
            <a href="/" className="hover:text-gray-100">
              Investments
            </a>
            <a href="/" className="hover:text-gray-100">
              Ways to Bank
            </a>
          </div>
          {/* About Failaka Col */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-white font-bold">ABOUT FAILAKA</h4>
            <a href="/" className="hover:text-gray-100">
              Failaka Group
            </a>
            <a href="/" className="hover:text-gray-100">
              Management
            </a>
            <a href="/" className="hover:text-gray-100">
              Awards
            </a>
            <a href="/" className="hover:text-gray-100">
              Investments
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-white font-bold">Connect with us :</h4>
            {/*  Social Media icons */}
            <div className="flex space-x-2 mt-5">
              <img
                src="https://boubyan.bankboubyan.com/media/filer_public/26/d1/26d1558c-d0fd-4adc-b007-c2e911837a2e/instagram-icon.svg"
                alt="Instagram-icon"
                className="hover:opacity-75"
              />
              <img
                src="https://boubyan.bankboubyan.com/media/filer_public/8f/03/8f03a7da-9ba0-41ca-99a2-a9c898bb6c16/twitter-icon.svg"
                alt="twitter-icon"
                className="hover:opacity-75"
              />
              <img
                src="https://boubyan.bankboubyan.com/media/filer_public/cc/7c/cc7cfbb4-789b-4111-8e8d-d04e22879b62/snapchat-icon.svg"
                alt="snapchat-icon"
                className="hover:opacity-75"
              />
              <img
                src="https://boubyan.bankboubyan.com/media/filer_public/4c/33/4c330de0-3447-4a07-bcdf-c7e1828afb0f/you-tube.svg"
                alt="you-tube"
                className="hover:opacity-75"
              />
              <img
                src="https://boubyan.bankboubyan.com/media/filer_public/b4/11/b4113284-2e35-483b-b08d-94a9e03a1837/group-32.svg"
                alt="group-32"
                className="hover:opacity-75"
              />
              <img
                src="https://boubyan.bankboubyan.com/media/filer_public/7f/f3/7ff33522-964b-41c6-92e4-f666742fdfce/whatsappicon.svg"
                alt="whatsappicon"
                className="hover:opacity-75"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-white font-bold">Download The Failaka App</h4>
            {/* Failaka app download links */}
            <div className="flex mt-5 size-auto flex-wrap">
              <img
                src="https://boubyan.bankboubyan.com/static/boubyan/images/mob/ios_footer.e31ba0ef5f38.png"
                alt="Download on iOS"
                className="hover:opacity-75 w-40"
              />
              <img
                src="https://boubyan.bankboubyan.com/static/boubyan/images/mob/android_footer.23aa5df21554.png"
                alt="Download on Android"
                className="hover:opacity-75 w-40 mt-2"
              />
              <img
                src="https://boubyan.bankboubyan.com/static/boubyan/images/mob/huawei_footer.a238b880a2b7.png"
                alt="Download on Huawei"
                className="hover:opacity-75 w-40 mt-2"
              />
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end text-xs">
          <p>©{new Date().getFullYear()} Failaka. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="/" className="hover:text-gray-100">
              Terms & Conditions
            </a>
            <a href="/" className="hover:text-gray-100">
              Security Tips
            </a>
            <a href="/" className="hover:text-gray-100">
              Manage Cookies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
