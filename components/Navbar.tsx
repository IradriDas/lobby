import Link from "next/link"
import Image from "next/image"
import MobileNav from "./MobileNav"
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"

const Navbar = () => {
  return (
    <>
      <nav className="flex-between fixed z-50 w-full bg-[#191D32] px-6 py-4 lg:px-10">
        <Link href={"/"} className="flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            alt="Lobby Logo"
            width={32}
            height={32}
            className="max-sm:size-10"
          />
          <p className="text-[26px] font-extrabold text-white max-sm:hidden">Lobby</p>
        </Link>

        <div className="flex-between gap-5">
          {/* Clerk - user management */}
          <Show when="signed-out">
            <SignInButton />

            <SignUpButton>
              <button className="bg-purple-700 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>

          </Show>

          <Show when="signed-in">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-10 h-10 ring-2 ring-blue-500 ring-offset-2 ring-offset-[#191D32]',
                  userButtonPopoverCard: 'bg-[#1c1f2e] border border-[#252a41] shadow-2xl rounded-2xl overflow-hidden',
                  userButtonPopoverHeader: 'border-b border-[#252a41] pb-3 px-4',
                  userPreviewMainIdentifier: 'text-white font-semibold text-sm',
                  userPreviewSecondaryIdentifier: 'text-gray-400 text-xs',
                  userButtonPopoverActions: 'p-2 flex flex-col gap-1',
                  userButtonPopoverActionButton: 'text-white rounded-xl transition-all duration-200',
                  userButtonPopoverActionButtonIconBox: 'bg-blue-500/10 rounded-md p-1',
                  userButtonPopoverActionButtonIcon: 'text-blue-400',
                  userButtonPopoverFooter: 'hidden',
                }
              }}
            />
          </Show>

          <MobileNav />
        </div>
      </nav>
    </>
  )
}

export default Navbar
