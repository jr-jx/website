"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme/ModeToggle";
import { SearchModal } from "@/components/ui/SearchModal";
import { cn } from "@/lib/utils";
import { AiOutlineSearch, AiOutlineGithub } from "react-icons/ai";
import Image from "next/image";

const nav = [
  { href: "/team", label: "团队" },
  { href: "/events", label: "活动" },
  { href: "/blog", label: "博客" },
  { href: "/docs", label: "文档" },
];

export function Header() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <Link href="/" className="font-semibold flex items-center gap-2">
            <Image src={"/favicon.ico"} alt="先锋计算机协会" width={24} height={24} />
            先锋计算机协会
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === item.href ? "text-foreground" : "text-foreground/60",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild size="sm">
              <Link href="https://github.com/jr-jx" target="_blank" rel="noopener noreferrer">
                <AiOutlineGithub />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2"
            >
              <AiOutlineSearch />
            </Button>
            <ModeToggle />
          </div>
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
