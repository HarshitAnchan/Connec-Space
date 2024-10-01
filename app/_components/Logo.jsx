import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={"/dashboard"} className="flex items-center gap-2">
      <Image
        src={"/CS-BLACK.png"}
        alt="logo"
        width={30}
        height={30}
        className="mt-1"
      />
      <h2 className="font-bold text-xl">ConnecSpace</h2>
    </Link>
  );
}

export default Logo;
