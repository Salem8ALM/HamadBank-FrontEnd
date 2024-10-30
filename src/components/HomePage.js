"use client";

import Image from "next/image";
import Link from "next/link";

function HomePage() {
  return (
    <>
      <main className="grid p-10 bg-white grid-cols-1 rounded-lg  overflow-hidden md:grid-cols-2 md:p-20">
        <div>
          <Image
            width={570}
            height={300}
            alt="Boubyan Bank Debit Cards"
            style={{ height: "auto" }}
            src="https://boubyan.bankboubyan.com/media/WEBP/f1/253c51/media/filer_public/34/e7/34e7386c-3d81-4e94-ade3-0da333f15913/private-hero-1.webp"
          />
        </div>
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
      </main>
    </>
  );
}

export default HomePage;
