import { cn } from '@/lib/utils';
import { CallControls, CallingState, CallParticipantsList, CallStatsButton, PaginatedGridLayout, SpeakerLayout, useCallStateHooks } from '@stream-io/video-react-sdk';
import React, { useState } from 'react'

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LayoutList, Users } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import EndCallButton from './EndCallButton';
import Loader from './Loader';

type CallLayoutType = "grid" | "speaker-left" | "speaker-right";

const CallLayout = ({ layout }: { layout: CallLayoutType }) => {
    switch (layout) {
        case 'grid':
            return <PaginatedGridLayout />;
        case 'speaker-left':
            return <SpeakerLayout participantsBarPosition='left' />;
        case 'speaker-right':
            return <SpeakerLayout participantsBarPosition='right' />;
        default:
            return <PaginatedGridLayout />;
    }
}

const MeetingRoom = () => {
    const searchParams = useSearchParams();
    const isPersonalRoom = !!searchParams.get('personal');
    const router = useRouter();

    const [layout, setLayout] = useState<CallLayoutType>('speaker-left');

    const [showParticipants, setShowParticipants] = useState(false);

    const { useCallCallingState } = useCallStateHooks();
    const callingState = useCallCallingState();

    if (callingState !== CallingState.JOINED) return <Loader />;



    return (
        <section className='relative h-screen w-full overflow-hidden pt-4 text-white'>
            <div className='relative flex size-full items-center justify-center'>
                <div className='flex size-full max-w-250 items-center'>
                    <CallLayout layout={layout} />
                </div>

                <div className={cn("h-[calc(100vh-86px)] hidden rounded-2xl ml-1.5 p-4 bg-[#0B2545]", { "block": showParticipants })}>
                    <CallParticipantsList onClose={() => setShowParticipants(false)} />
                </div>
            </div>

            <div className="fixed bottom-0 w-full flex items-center justify-center gap-5">
                <CallControls
                    onLeave={() => { router.push("/") }}
                />

                <DropdownMenu>
                    <div className="flex items-center px-4">
                        <DropdownMenuTrigger className='cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c5264]'>
                            <LayoutList size={20} className='text-white' />
                        </DropdownMenuTrigger>
                    </div>


                    {/* Dropdown Menu Content */}
                    <DropdownMenuContent className="border-dark-100 bg-[#1c1e21] text-white">
                        {["Grid", "Speaker-Left", "Speaker-Right"].map((item, index) => {
                            return (
                                <div key={index}>
                                    <DropdownMenuItem
                                        className="cursor-pointer"
                                        onClick={() => {
                                            setLayout(item.toLowerCase() as CallLayoutType);
                                        }}
                                    >
                                        {item}
                                    </DropdownMenuItem>
                                </div>
                            );
                        })}
                    </DropdownMenuContent>
                </DropdownMenu>

                <CallStatsButton />

                <button onClick={() => setShowParticipants((prev) => !prev)}>
                    <div className='cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c5264]'>
                        <Users size={20} className='text-white' />
                    </div>
                </button>
                {!isPersonalRoom && (<EndCallButton />)}
            </div>
        </section>
    )
}

export default MeetingRoom