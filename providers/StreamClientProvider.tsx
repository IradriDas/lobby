"use client";

import { useEffect, useState } from "react";
import {
  StreamVideo,
  StreamVideoClient,
  User,
} from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";
import { tokenProvider } from "@/actions/stream.action";
import Loader from "@/components/Loader";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

export const StreamVideoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient | undefined>(
    undefined,
  );
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;
    if (!apiKey) {
      console.error("Stream API key is not defined");
      return;
    }

    const streamUser: User = {
      id: user.id,
      name: user.username || user.id,
      image: user.imageUrl,
    };

    const client = new StreamVideoClient({
      apiKey,
      user: streamUser,
      tokenProvider,
    });

    setVideoClient(client);

    return () => {
      client.disconnectUser().catch(console.error);
      setVideoClient(undefined);
    };
  }, [user?.id, isLoaded]);

  if (!videoClient) return <Loader />;

  return (
    <>
      <StreamVideo client={videoClient}>{children}</StreamVideo>
    </>
  );
};
