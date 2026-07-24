"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
// import { avatarImages } from "@/constants";
import { toast } from "./ui/toast";

interface MeetingCardProps {
    title: string;
    date: string;
    icon: string;
    isPreviousMeeting?: boolean;
    buttonIcon1?: string;
    buttonText?: string;
    handleClick: () => void;
    link: string;
}

const MeetingCard = ({
    icon,
    title,
    date,
    isPreviousMeeting,
    buttonIcon1,
    handleClick,
    link,
    buttonText,
}: MeetingCardProps) => {

    return (
        <section className="flex min-h-64.5 w-full flex-col justify-between rounded-[14px] bg-[#191D32] px-5 py-8 xl:max-w-142">
            <article className="flex flex-col gap-5">
                <Image src={icon} alt="upcoming" width={28} height={28} />
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl text-white/80 font-bold">{title}</h1>
                        <p className="text-base text-white/80 font-normal">{date}</p>
                    </div>
                </div>
            </article>
            <article className={cn("flex justify-center relative", {})}>
                {!isPreviousMeeting && (
                    <div className="flex gap-2">
                        <Button onClick={handleClick} className="rounded bg-[#0E78F9] px-6">
                            {buttonIcon1 && (
                                <Image src={buttonIcon1} alt="feature" width={20} height={20} />
                            )}
                            &nbsp; {buttonText}
                        </Button>
                        <Button
                            onClick={() => {
                                navigator.clipboard.writeText(link);
                                toast.add({
                                    title: "Link Copied",
                                    type: "success"
                                });
                            }}
                            className="bg-[#252A41] px-6 py-4"
                        >
                            <Image
                                src="/icons/copy.svg"
                                alt="feature"
                                width={20}
                                height={20}
                            />
                            &nbsp; Copy Link
                        </Button>
                    </div>
                )}
            </article>
        </section>
    );
};

export default MeetingCard;