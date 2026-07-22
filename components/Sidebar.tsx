"use client";

import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <section className="sticky left-0 top-0 flex h-[96vh] w-fit flex-col justify-between bg-[#191D32] rounded-2xl p-6 m-2 pt-28 text-white max-sm:hidden lg:w-66">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((link) => {
          // const isActive = (pathName === link.route) || (pathName.startsWith(link.route));
          const isActive = (pathName === link.route);

          return (
            <Link href={link.route} key={link.label} className={cn("flex gap-4 items-center p-4 rounded-lg justify-start", { "bg-[#C33C54] text-black": isActive })}>
              <Image src={link.imgUrl} alt={link.label} width={24} height={24} />
              <p className="text-lg font-semibold max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
