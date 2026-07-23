"use client";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"

import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
    const pathName = usePathname();
    return (
        <>
            <section className="w-full max-w-66">

                <Sheet>
                    <SheetTrigger
                        nativeButton={false}
                        render={
                            <Image src="/icons/hamburger.svg" alt="Menu" width={36} height={36} className="cursor-pointer sm:hidden" />
                        }
                    />

                    <SheetContent side="left" className="border-none bg-[#191D32] p-6">
                        <Link href={"/"} className="flex items-center gap-1">
                            <Image
                                src="/icons/logo.svg"
                                alt="Lobby Logo"
                                width={32}
                                height={32}
                                className="max-sm:size-10"
                            />
                            <p className="text-[26px] font-extrabold text-white">Lobby</p>
                        </Link>

                        <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
                            <section className="flex h-full flex-col gap-6 pt-16 text-white text-[20px]">
                                {sidebarLinks.map((link) => {
                                    const isActive = (pathName === link.route);

                                    return (
                                        <SheetClose
                                            key={link.label}
                                            nativeButton={false}
                                            render={
                                                <Link
                                                    href={link.route}
                                                    className={cn("flex gap-4 items-center p-4 rounded-lg w-full max-w-60", { "bg-[#0E78F9]": isActive })}
                                                    key={link.label}

                                                >
                                                    <Image src={link.imgUrl} alt={link.label} width={20} height={20} />
                                                    <p className="font-semibold">{link.label}</p>
                                                </Link>
                                            }
                                        />
                                    );
                                })}
                            </section>
                        </div>
                    </SheetContent>
                </Sheet>
            </section>
        </>
    )
}

export default MobileNav