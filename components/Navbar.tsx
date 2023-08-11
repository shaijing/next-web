"use client";
import type { NextPage } from "next";
import Link from "next/link";
import { headerNavLinks } from "@/data/config";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
    const pathname = usePathname();
    return (
        <header className="flex max-w-3xl container mx-auto py-3">
            <nav className="flex w-full">
                <ul className="flex flex-1">
                    {headerNavLinks?.map((nav: any) => (
                        <li key={nav?.title}>
                            <Link
                                className={`flex p-2 underline-offset-4  ${
                                    pathname === nav?.href
                                        ? "underline"
                                        : "text-gray-600 hover:text-black hover:underline outline-none dark:text-gray-400 dark:hover:text-gray-200"
                                }`}
                                href={nav?.href}
                            >
                                {nav?.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ThemeSwitcher />
            </nav>
        </header>
    );
}

