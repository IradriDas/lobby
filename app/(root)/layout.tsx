import { ReactNode } from "react";
import { auth } from "@clerk/nextjs/server";
import { StreamVideoProvider } from "@/providers/StreamClientProvider";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  await auth.protect();

  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
