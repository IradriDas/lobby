"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import HomeCard from "./HomeCard";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { toast } from "@/components/ui/toast"

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();

  const { user } = useUser();
  const client = useStreamVideoClient();

  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });

  const [callDetails, setCallDetails] = useState<Call>();

  const createMeeting = async () => {
    if (!client || !user) return;

    try {
      if (!values.dateTime) {
        toast.add({
          title: "Please select a date and time",
          type: "destructive"
        })
        return;
      }
      const id = crypto.randomUUID();
      const call = client.call("default", id);
      if (!call) throw new Error("Failed to create call");

      const startsAt = values.dateTime.toISOString() || (new Date(Date.now())).toISOString();
      const description = values.description || "Instant meeting";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: { description },
        },
      });

      setCallDetails(call);

      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }

      toast.add({
        title: "Meeting Created",
        type: "success"})

    } catch (error) {
      console.log(error);
      toast.add({
        title: "Failed to create meeting",
        description:"Please try again",
        type:"destructive"
      })
    }
  };

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        title="New Meeting"
        subtitle="Start an instant meeting"
        icon="/icons/add-meeting.svg"
        handleClick={() => {
          setMeetingState("isInstantMeeting");
        }}
        color="bg-[#C33C54]"
      />

      <HomeCard
        title="Join Meeting"
        subtitle="via invitation link"
        icon="/icons/join-meeting.svg"
        handleClick={() => {
          setMeetingState("isJoiningMeeting");
        }}
        color="bg-[#0E78F9]"
      />
      <HomeCard
        title="Schedule Meeting"
        subtitle="Plan your meeting"
        icon="/icons/schedule.svg"
        handleClick={() => {
          setMeetingState("isScheduleMeeting");
        }}
        color="bg-[#387D7A]"
      />
      <HomeCard
        title="View Recordings"
        subtitle="Check out your recordings"
        icon="/icons/Video.svg"
        handleClick={() => {
          router.push("/recordings");
        }}
        color="bg-[#ED6A5A]"
      />

      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => {
          setMeetingState(undefined);
        }}
        title="Start an Instant Meeting"
        buttonText="Create Meeting"
        handleClick={createMeeting}
        className="text-center"
      />
    </section>
  );
};

export default MeetingTypeList;
