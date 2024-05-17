
import Link from "next/link";
import React from "react";
import { FaComputer } from "react-icons/fa6";

export default function Computer() {
  return (
    <div>
        <Link href="/computer" >
            <FaComputer className="w-28 h-28" />
            <h2 className="mb-3 text-2xl font-semibold">
            Computer{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
            </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
            </p>
        </Link>
    </div>
  );
}
