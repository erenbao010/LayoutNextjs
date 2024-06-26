import Image from "next/image";
import React from "react";

function TopLeftImg() {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-70">
      <Image src="/top-left-img.png" width={400} height={400} alt=""></Image>
    </div>
  );
}

export default TopLeftImg;
