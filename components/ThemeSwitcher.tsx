import { useEffect, useState } from "react";
import type { NextPage } from "next";
// import { SunIcon, MoonIcon } from "@/data/icons";
import { useTheme } from "next-themes";

import { FaSun, FaMoon } from "react-icons/fa";
const ThemeSwitcher: NextPage = () => {
    // 我们将提取主题和setTheme;
    const { resolvedTheme, setTheme } = useTheme();
    const [mount, setMount] = useState(true);
    useEffect(() => setMount(false), []);
    const IconToUse = resolvedTheme === "light" ? FaMoon : FaSun;
    return (
        <button
            disabled={mount}
            type="button"
            aria-label="Theme Switcher"
            onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="flex items-center p-1 rounded-full text-black hover:bg-gray-200 dark:text-white dark:hover:bg-gray-200 dark:hover:text-black"
        >
            <IconToUse />
        </button>
    );
};

export default ThemeSwitcher;
