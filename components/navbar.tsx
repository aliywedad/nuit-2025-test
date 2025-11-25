"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Learn 3FA", href: "/3fa" },
  { name: "Learn cryptography", href: "/cryptography" },
  { name: "Learn network security", href: "/network-security" },
  { name: "Learn phishing", href: "/phishing" },
  { name: "Quiz", href: "/quiz" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const pathname = usePathname();

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-20 bg-black/90 backdrop-blur after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between w-full">
              {/* Bouton mobile */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon aria-hidden="true" className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon aria-hidden="true" className="block h-6 w-6" />
                  )}
                </DisclosureButton>
              </div>

              {/* Logo + liens desktop */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                  <Image
                    alt="3FA App logo"
                    src="/image2.png"          // image dans /public/3fa.png
                    width={40}
                    height={40}
                    className="h-10 w-auto px-2"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 items-center h-full">
                    {navigation.map((item) => {
                      const isCurrent = pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          aria-current={isCurrent ? "page" : undefined}
                          className={classNames(
                            isCurrent
                              ? "bg-gray-950/50 text-white"
                              : "text-gray-300 hover:bg-white/5 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Menu mobile */}
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => {
                const isCurrent = pathname === item.href;
                return (
                  <DisclosureButton
                    key={item.name}
                    as={Link}
                    href={item.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={classNames(
                      isCurrent
                        ? "bg-gray-950/50 text-white"
                        : "text-gray-300 hover:bg-white/5 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                );
              })}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
