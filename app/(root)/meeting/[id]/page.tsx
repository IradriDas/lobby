"use client";
import { use, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useGetCallById } from "@/hooks/useGetCallById";
import Loader from "@/components/Loader";
import MeetingSetup from "@/components/MeetingSetup";
import MeetingRoom from "@/components/MeetingRoom";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function Meeting({ params }: Props) {
  const { user, isLoaded } = useUser();
  const [isSetUpComplete, setIsSetUpComplete] = useState(false);

  const { id } = use(params);

  const { call, isCallLoading } = useGetCallById(id);

  if (!isLoaded || isCallLoading) {
    return <Loader />
  }

  return (
    <>
      <main className="h-screen w-full">
        <StreamCall call={call}>
          <StreamTheme>
            {
              !isSetUpComplete ? (<MeetingSetup setIsSetUpComplete={setIsSetUpComplete} />) : (<MeetingRoom />)
            }

          </StreamTheme>
        </StreamCall>
      </main>
    </>
  );
}