import Link from "next/link";
import { Navigation } from "./Navigation";

export const DesktopMenu = () => {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-xl"
          >
            <span>CxReports</span>
          </Link>
        </div>
        <div className="flex-1">
          <Navigation />
        </div>
      </div>
    </div>
  );
};
