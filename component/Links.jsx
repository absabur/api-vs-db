import Link from "next/link";
import React from "react";
import ClickDate from "./ClickDate";

const Links = () => {
  return (
    <div className="flex gap-4 items-center flex-col sm:flex-row">
      <ClickDate from="ssr-db-start">
        <Link
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href="/direct-db"
          rel="noopener noreferrer"
          prefetch={false}
        >
          Dynamic SSR Using DB
        </Link>
      </ClickDate>

      <ClickDate from="ssr-api-start">
        <Link
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
          href="/fetch-api"
          rel="noopener noreferrer"
          prefetch={false}
        >
          Dynamic SSR Using Api
        </Link>
      </ClickDate>
      <ClickDate from="csr-api-start">
        <Link
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href="/csr"
          rel="noopener noreferrer"
          prefetch={false}
        >
          Client Side Rendering
        </Link>
      </ClickDate>
    </div>
  );
};

export default Links;
