import { Logo } from "../ui/logo";
import { Navigation } from "./navigation";

export const DesktopMenu = () => {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <Logo />

        <div className="flex-1">
          <Navigation />
        </div>
      </div>
    </div>
  );
};
