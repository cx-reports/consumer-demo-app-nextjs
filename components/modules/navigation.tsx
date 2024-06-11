"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "../ui/icon";

interface NavigationItemModel {
  href: string;
  text: string;
  icon?: string;
}

interface NavigationItemsModel {
  title?: string;
  items: NavigationItemModel[];
}

const navigationItems: NavigationItemsModel[] = [
  {
    title: "Documents",
    items: [
      {
        href: "/",
        text: "Invoices",
        icon: "file-spreadsheet",
      },
    ],
  },
  {
    title: "Reports",
    items: [
      {
        href: "/bank-transactions",
        text: "Bank Transactions",
        icon: "landmark",
      },
    ],
  },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-6">
      {navigationItems.map((navItem, index) => (
        <span className="mt-4 mb-1" key={`nav-item-${index}`}>
          <span>{navItem.title}</span>
          {navItem.items.map((navLink, index) => (
            <Link
              href={navLink.href}
              key={`nav-link-${index}`}
              className={clsx({
                "flex items-center gap-3 rounded-lg px-3 text-muted-foreground py-2 transition-all hover:text-primary":
                  true,
                "bg-muted text-primary": pathname == navLink.href,
              })}
            >
              {/* @ts-expect-error */}
              <Icon name={navLink.icon} />
              {navLink.text}
            </Link>
          ))}
        </span>
      ))}
    </nav>
  );
};
