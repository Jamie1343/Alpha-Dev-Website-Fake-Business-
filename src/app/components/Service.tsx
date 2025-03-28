import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Service({ imgPath, title, description, linkText, linkURL }: { imgPath: string; title: string; description: string; linkText: string; linkURL: string }) {
  return (
    <div className="flex flex-col items-center text-center w-[80%] mx-auto lg:w-full">
      <Image src={imgPath} alt={title} width={75} height={75} />
      <h3>{title}</h3>
      <p className="w-[80%] mt-2">{description}</p>
      <br></br>
      <Link href={linkURL} className="mt-auto">
        {linkText}
      </Link>
    </div>
  );
}
