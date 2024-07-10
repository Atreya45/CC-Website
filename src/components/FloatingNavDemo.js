// src/components/FloatingNavDemo.js

import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconUser, IconMessage } from "@tabler/icons-react";
import Link from "next/link";
const FloatingNavDemo = () => {
  const navItems = [
    {
      name: "Home",
      link: "/#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Codeforces",
      link: "/#codeforces",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Leetcode",
      link: "/#leetcode",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "CodeChef",
      link: "/#codechef",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>
  );
};

const DummyContent = () => {
  return (
    <div className="grid grid-cols-1 h-[40rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
      <section id="home">
        <p className="dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold">
          Scroll down to reveal Navbar
        </p>
      </section>
      <section id="codeforces">
        <h2 className="text-2xl font-bold">Codeforces Contests</h2>
        {/* Replace with your Codeforces table component */}
      </section>
      <section id="leetcode">
        <h2 className="text-2xl font-bold">Leetcode Contests</h2>
        {/* Replace with your Leetcode table component */}
      </section>
      <section id="codechef">
        <h2 className="text-2xl font-bold">CodeChef Contests</h2>
        {/* Replace with your CodeChef table component */}
      </section>
    </div>
  );
};

export default FloatingNavDemo;
