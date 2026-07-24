import MeetingTypeList from "@/components/MeetingTypeList";
import LiveClock from "@/components/LiveClock";

const Home = () => {
  return (
    <>
      <section className="flex size-full flex-col gap-10 text-white">
        <div className="h-75 w-full rounded-[20px] bg-[url('/images/hero-background.png')]">
          <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
            <LiveClock />
          </div>
        </div>

        <MeetingTypeList />
      </section>
    </>
  )
}

export default Home
