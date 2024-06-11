"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import LightLogo from "@/public/images/cx-reports-logo-dark.svg";
import DarkLogo from "@/public/images/cx-reports-logo-light.svg";
import clsx from "clsx";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  const { theme } = useTheme();

  return (
    <div
      className={clsx(
        "flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6",
        className
      )}
    >
      <Link href="/" className="flex items-center gap-2 font-semibold text-xl">
        <Image
          src={theme === "dark" ? DarkLogo : LightLogo}
          alt="Logo"
          width={174}
          height={28}
          priority
        />
      </Link>
    </div>
  );
};
