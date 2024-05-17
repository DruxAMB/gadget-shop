import React from "react";
import Link from "next/link";
import { FaLaptop } from "react-icons/fa6";

export default function Laptop() {
  return (
    <div>
        <Link href="/laptop" >
            <FaLaptop className="w-28 h-28"/>
            <h2 className="mb-3 text-2xl font-semibold">
            Laptops{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
            </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
            </p>
        </Link>
    </div>
  );
}
