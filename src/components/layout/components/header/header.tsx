import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import i18n from "i18next";
import { Globe, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Trans } from "react-i18next";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.slice(4);
  const params = useParams();
  const [isDark, setIsDark] = useState(true);
  const lang = params.lang as string;

  const handleChangeTheme = (theme: "dark" | "light") => {
    const html = document.querySelector("html");
    if (theme === "dark") {
      html?.classList.add("dark");
      setIsDark(true);
    }
    if (theme === "light") {
      html?.classList.remove("dark");
      setIsDark(false);
    }
  };

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    navigate(`/${lang}/${path}`);
  };
  return (
    <header className="flex items-center justify-between border-b border-gray-800 px-4 py-3 pl-16 pr-16 dark:bg-black">
      <div className="flex items-center">
        <Link
          to={`/${lang}`}
          className="text-xl font-bold dark:text-gray-400 dark:hover:text-gray-200"
        >
          BitBlogs
        </Link>
      </div>

      <nav className="flex items-center gap-6">
        <Link
          to={`/${lang}`}
          className="hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
        >
          <Trans>header.nav-home</Trans>
        </Link>
        <Link
          to={`/${lang}/create`}
          className="hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
        >
          <Trans>header.nav-write</Trans>
        </Link>
        <Link
          to={`/${lang}/about`}
          className="hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
        >
          <Trans>header.nav-about</Trans>
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <button className="dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">S</button>
        <Link
          to={`/${lang}/login`}
          className="rounded-lg bg-blue-600 px-4 py-2 dark:text-white dark:hover:bg-blue-700"
        >
          <Trans>header.login</Trans>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="dark:text-gray-400">
            {isDark ? <Moon size={20} /> : <Sun size={20} />}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleChangeTheme("dark")}>
              <Trans>header.theme-dark</Trans>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleChangeTheme("light")}>
              <Trans>header.theme-light</Trans>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>{" "}
        <DropdownMenu>
          <DropdownMenuTrigger className="dark:text-gray-400">
            <Globe size={20}/>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleChangeLanguage("en")}>
              English
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleChangeLanguage("ka")}>
              ქართული
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;