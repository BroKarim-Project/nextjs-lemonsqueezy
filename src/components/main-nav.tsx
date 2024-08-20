"use client";

import Link from "next/link";

interface MobileNavProps {
  navigation: { name: string; href: string }[];
}

export default function MainNav({ navigation }: MobileNavProps) {
  return (
    <div className="hidden lg:flex   lg:gap-x-12">
      {navigation.map((item) => (
        <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6">
          {item.name}
        </Link>
      ))}
    </div>
  );
}
