"use client";
import React, { useState } from 'react'
import { useGetCalls } from '@/hooks/useGetCalls';
import { useRouter } from 'next/navigation';
import { CallRecording } from '@stream-io/node-sdk';
import { Call } from '@stream-io/video-react-sdk';
import MeetingCard from './MeetingCard';
import Loader from './Loader';


const CallList = ({ type }: { type: 'upcoming' | 'recordings' | 'ended' }) => {
    const { endedCalls, upcomingCalls, calleRecordings, isLoading } = useGetCalls();
    const router = useRouter();
    const [recordings, setRecordings] = useState<CallRecording[]>([]);

    if (isLoading) return <Loader />

    const getCalls = () => {
        switch (type) {
            case 'upcoming':
                return upcomingCalls;
            case 'recordings':
                return recordings;
            case 'ended':
                return endedCalls;
            default:
                return [];
        }
    }

    const getNoCallMessage = () => {
        switch (type) {
            case 'upcoming':
                return "No Upcoming Calls";
            case 'recordings':
                return "No Recordings";
            case 'ended':
                return "No Ended Calls";
            default:
                return "";
        }
    }

    const calls = getCalls();
    const noCallsMessage = getNoCallMessage();

    return (
        <div className='grid grid-cols-1 gap-5 xl:grid-cols-2'>
            {
                (calls && calls.length > 0) ?
                    (calls.map((meeting: Call | CallRecording) =>
                    (
                        <MeetingCard key={(meeting as Call).id}
                            icon={type === "ended" ?
                                "/icons/previous.svg"
                                : type === "upcoming" ?
                                    "/icons/upcoming.svg" : "/icons/recordings.svg"}

                            title={(meeting as Call).state?.custom?.description?.substring(0, 26) || "No Description"}

                            date={(meeting as Call).state?.startsAt?.toLocaleString() || (meeting as CallRecording).start_time?.toLocaleString()}

                            isPreviousMeeting={type === "ended"}

                            buttonIcon1={type === "recordings" ? "/icons/play.svg" : undefined}

                            handleClick={type === "recordings"
                                ? () => router.push(`${(meeting as CallRecording).url}`)
                                : () => router.push(`/meeting/${(meeting as Call).id}`)}

                            link={type === "recordings"
                                ? (meeting as CallRecording).url
                                : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${(meeting as Call).id}`}

                            buttonText={type === "recordings" ? "Play" : "Start"}
                        />
                    )
                    )) : (
                        <h1>{noCallsMessage}</h1>
                    )
            }
        </div>
    )
}

export default CallList