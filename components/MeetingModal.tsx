import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  handleClick?: () => void;
  className?: string;
  buttonText?: string;
  children?: React.ReactNode;
  image?: string;
  buttonIcon?: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  handleClick,
  className,
  buttonText,
  children,
  image,
  buttonIcon,
}: MeetingModalProps) => {
  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="flex w-full max-w-130 flex-col gap-6 bg-[#1C1E22] border-none px-6 py-9 text-white">
          <div className="flex flex-col gap-6">
            {image && (
              <div className="flex justify-center">
                <Image src={image} alt="image" width={72} height={72} />
              </div>
            )}
            <h1
              className={cn(
                "text-2xl font-bold leading-10.5 text-center w-full",
                className,
              )}
            >
              {title}
            </h1>
            {children}

            <Button
              onClick={handleClick}
              className="bg-[#193abc] focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              {buttonIcon && (
                <div className="flex items-center gap-2">
                  <Image
                    src={buttonIcon}
                    alt="button icon"
                    width={13}
                    height={13}
                  />
                </div>
              )}
              &nbsp;{buttonText || "Schedule Meeting"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MeetingModal;
