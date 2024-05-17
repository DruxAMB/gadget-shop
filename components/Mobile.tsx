import React from "react";
import Link from "next/link";
import { FaMobile } from "react-icons/fa6";

export default function Mobile() {
  return (
    <div>
      <Link href="/mobile" >
        <FaMobile className="w-28 h-24 mb-4" />
          <h2 className="mb-3 text-2xl font-semibold">
            Mobiles{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
      </Link>
    </div>
  );
}
