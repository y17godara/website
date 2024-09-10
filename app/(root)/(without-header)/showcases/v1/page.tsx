import React from "react";
import Image from "next/image";
import Avatar from "../icon.png";
import { Suspense } from "react";
import { Header, Footer } from "@/components";

export default async function page() {
  return (
    <>
      <Header />
      <main
        className={
          "mx-auto mt-10 min-h-[60vh] max-w-[700px] px-4 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20"
        }
      >
        <div className='flex flex-col gap-16 md:gap-24'></div>
      </main>
      <Footer />
    </>
  );
}
