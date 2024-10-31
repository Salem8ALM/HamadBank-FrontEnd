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
      <main className="grid  bg-white w-[80rem] grid-row-2 rounded-lg m-auto mt-5 overflow-hidden">
        <div className="flex flex-col ">
          <div className="max-w-screen-xl  ">
            <BasicSlider autoSlide={true} autoSlideInterval={5000}>
              {slides.map((s, index) => (
                <img key={index} src={s} />
              ))}
            </BasicSlider>
          </div>
          <div className="flex flex-row bg-white rounded-lg shadow-lg overflow-hidden  m-5">
            <Image
              width={500}
              height={300}
              alt="Boubyan Bank Debit Cards"
              style={{ height: "auto" }}
              src="https://i.postimg.cc/NjK2WgX0/DALL-E-2024-10-31-04-39-38-A-premium-bank-card-design-with-a-dark-elegant-color-gradient-backgrou.png"
            />

            <div className="text-[#54585a] flex flex-col items-center justify-center text-left">
              <div>
                <h1 className="m-5 text-4xl font-bold">
                  Unique private banking <br />
                  experience
                </h1>
                <p className="m-5">Private banking cards and benefits</p>
                <Link href="/login">
                  <button className="mx-5 border-[#b39521] text-[#b39521] border-[1px] rounded-md p-6 py-2 hover:scale-110 hover:bg-[#b39521] hover:text-white hover:shadow-[0_8px_16px_0_rgba(207,214,112,0.16)] duration-300">
                    Bank with us today
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-col  bg-white rounded-lg shadow-lg overflow-hidden   m-5">
              <Image
                width={538}
                height={456}
                alt="Boubyan"
                src="https://boubyan.bankboubyan.com/media/WEBP/df/fdb76e/media/filer_public/b4/6d/b46d68b2-eadb-456c-bfcd-c5d5a4ecbc42/personal_boubyan_investments_t.webp"
                style={{ height: "auto" }} // Adjusted for responsive behavior
              />
              <div className="px-5 py-4">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Flexible investments
                </h1>
                <p className="text-gray-700 mb-4">
                  Enjoy rewarding returns with Boubyan Capital Funds
                </p>
                <Link href="/login">
                  <button className="mx-36  border-[#b39521] text-[#b39521] border-[1px] rounded-md p-6 py-2 hover:scale-110 hover:bg-[#b39521] hover:text-white hover:shadow-[0_8px_16px_0_rgba(207,214,112,0.16)] duration-300">
                    Bank with us today
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col bg-white   rounded-lg shadow-lg overflow-hidden w-[33rem]  m-6">
              <Image
                width={538}
                height={456}
                alt="Boubyan"
                src="https://boubyan.bankboubyan.com/media/WEBP/f7/f4e42a/media/filer_public/61/3a/613ad4cd-568d-4eb8-885a-032bde00947a/img_6100.webp"
                style={{ height: "auto" }} // Adjusted for responsive behavior
              />
              <div className="px-5 py-4">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Failaka Rewards Program
                </h1>
                <p className="text-gray-700 mb-4">
                  Enjoy a world of rewards with the best credit card rewards
                  program in Kuwait
                </p>
                <Link href="/login">
                  <button className="mx-36 border-[#b39521] text-[#b39521] border-[1px] rounded-md p-6 py-2 hover:scale-110 hover:bg-[#b39521] hover:text-white hover:shadow-[0_8px_16px_0_rgba(207,214,112,0.16)] duration-300">
                    Bank with us today
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-row bg-white rounded-lg shadow-lg overflow-hidden  m-5 ">
            <Image
              width={570}
              height={300}
              alt="Boubyan Bank Debit Cards"
              style={{ height: "auto" }}
              src="https://boubyan.bankboubyan.com/media/WEBP/1c/e7293b/media/filer_public/bc/8c/bc8cd15b-483e-4fef-be41-bd03156fcab3/private-jana-opt.webp"
            />

            <div className="text-[#54585a] flex flex-col items-center justify-center text-left">
              <div>
                <h1 className="m-5 text-4xl font-bold">Al Jana deposit</h1>
                <p className="m-5">
                  Freedom to withdraw without breaking the deposit
                </p>
                <Link href="/login">
                  <button className="mx-5 border-[#b39521] text-[#b39521] border-[1px] rounded-md p-6 py-2 hover:scale-110 hover:bg-[#b39521] hover:text-white hover:shadow-[0_8px_16px_0_rgba(207,214,112,0.16)] duration-300">
                    Bank with us today
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
