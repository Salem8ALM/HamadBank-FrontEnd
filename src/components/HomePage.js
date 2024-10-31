"use client";
import Image from "next/image";
import Link from "next/link";
import BasicSlider from "./Content/SliderShow/BasicSlider";

const slides = [
  "https://i.postimg.cc/ZRsFm9CW/Protect-Yourself-From-Fraud.png",
  "https://www.nbk.com/.imaging/default/dam/Images/nbk-kuwait/Diraya/Diraya_Desktop_A.jpg/jcr:content.jpg",
];
function HomePage() {
  return (
    <>
      <main className="grid bg-white md:w-[80rem] sm:w-full rounded-lg mx-auto mt-5 overflow-hidden">
        <div className="flex flex-col">
          <div className="md:max-w-screen-xl md:block">
            <BasicSlider autoSlide={true} autoSlideInterval={2000}>
              {slides.map((s, index) => (
                <img key={index} src={s} className="" />
              ))}
            </BasicSlider>
          </div>
          <div className="grid bg-white sm:w-full md:w-[70rem] grid-cols-1 md:grid-cols-2 rounded-lg mx-auto mt-8 md:mt-16 overflow-hidden shadow-md">
            <Image
              width={500}
              height={300}
              alt="Boubyan Bank Debit Cards"
              style={{ height: "auto" }}
              src={
                "https://github.com/EngrIbrahimAdnan/NextJS-Bank-Project-Collaborators/blob/main/src/assets/HomePageImg1.jpg?raw=true"
              }
              className="w-full"
            />
            <div className="text-[#54585a] flex flex-col items-center justify-center text-left p-4 md:p-8">
              <h1 className="m-5 text-2xl md:text-4xl font-bold text-center md:text-left">
                Unique private banking experience
              </h1>
              <p className="m-5 text-center md:text-left">
                Private banking cards and benefits
              </p>
              <Link href="/login">
                <button className="mx-5 md:mx-0 border-[#b39521] text-[#b39521] border-[1px] rounded-md p-3 md:p-6 py-2 hover:scale-105 hover:bg-[#b39521] hover:text-white hover:shadow-md duration-300">
                  Bank with us today
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-evenly mt-5">
            <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-[32rem] md:m-4">
              <Image
                width={538}
                height={456}
                alt="Boubyan"
                src="https://boubyan.bankboubyan.com/media/WEBP/df/fdb76e/media/filer_public/b4/6d/b46d68b2-eadb-456c-bfcd-c5d5a4ecbc42/personal_boubyan_investments_t.webp"
                className="w-full h-auto"
              />
              <div className="px-5 py-4 text-center md:text-left">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Flexible investments
                </h1>
                <p className="text-gray-700 mb-4">
                  Enjoy rewarding returns with Failaka Capital Funds
                </p>
                <Link href="/login">
                  <button className="mx-auto md:mx-0 border-[#b39521] text-[#b39521] border-[1px] rounded-md p-3 md:p-6 py-2 hover:scale-105 hover:bg-[#b39521] hover:text-white hover:shadow-md duration-300">
                    Bank with us today
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-[32rem] md:m-4">
              <Image
                width={538}
                height={456}
                alt="Boubyan"
                src="https://boubyan.bankboubyan.com/media/WEBP/f7/f4e42a/media/filer_public/61/3a/613ad4cd-568d-4eb8-885a-032bde00947a/img_6100.webp"
                className="w-full h-auto"
              />
              <div className="px-5 py-4 text-center md:text-left">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Failaka Rewards Program
                </h1>
                <p className="text-gray-700 mb-4">
                  Enjoy a world of rewards with the best credit card rewards
                  program in Kuwait
                </p>
                <Link href="/login">
                  <button className="mx-auto md:mx-0 border-[#b39521] text-[#b39521] border-[1px] rounded-md p-3 md:p-6 py-2 hover:scale-105 hover:bg-[#b39521] hover:text-white hover:shadow-md duration-300">
                    Bank with us today
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden mx-4 mt-5 md:my-8 mb-4">
            <Image
              width={570}
              height={300}
              alt="Boubyan"
              src="https://boubyan.bankboubyan.com/media/WEBP/1c/e7293b/media/filer_public/bc/8c/bc8cd15b-483e-4fef-be41-bd03156fcab3/private-jana-opt.webp"
              className="w-full md:w-1/2 h-auto"
            />
            <div className="text-[#54585a] flex flex-col items-center justify-center text-center md:text-left p-4 md:p-8 w-full md:w-1/2 ">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Al Jana deposit
              </h1>
              <p className="text-gray-700 mb-4">
                Freedom to withdraw without breaking the deposit
              </p>
              <Link href="/login">
                <button className="mx-auto md:mx-5 border-[#b39521] text-[#b39521] border-[1px] rounded-md p-3 md:p-6 py-2 hover:scale-105 hover:bg-[#b39521] hover:text-white hover:shadow-md duration-300">
                  Bank with us today
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
