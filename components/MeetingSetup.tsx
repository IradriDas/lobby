"use client";
import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import { useEffect, useState } from 'react'
import { Button } from './ui/button';

const MeetingSetup = ({ setIsSetUpComplete }: { setIsSetUpComplete: (value: boolean) => void }) => {
    const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);

    const call = useCall();


    useEffect(() => {
        if (!call) return;

        if (isMicCamToggledOn) {
            call?.camera.disable();
            call?.microphone.disable();
        }
        else {
            call?.camera.enable();
            call?.microphone.enable();
        }
    }, [isMicCamToggledOn, call, call?.camera, call?.microphone])

    if (!call) return null;
    return (
        <div className='flex flex-col h-screen w-full items-center justify-center gap-3'>
            <h1 className='text-2xl font-bold'>Setup your microphone and camera</h1>

            <VideoPreview />
            <div className="flex h-16 items-center justify-center gap-3">
                <label className='flex items-center justify-center gap-2 font-medium' htmlFor="">
                    <input
                        checked={isMicCamToggledOn}
                        onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
                        type="checkbox" name="" id="" />

                    Join with mic and camera off
                </label>
                <DeviceSettings />
            </div>

            <Button className="rounded-md py-2.5 px-4 bg-[#8CFFDA] text-black cursor-pointer hover:text-amber-50"
                onClick={() => {
                    call.join();
                    setIsSetUpComplete(true);
                }}
            >
                Join meeting</Button>
        </div>
    )
}

export default MeetingSetup