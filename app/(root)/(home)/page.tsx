import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {

  const now = new Date();

  // const time = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })).format(now);
  const time = (new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit' })).format(now);


  return (
    <>
      <section className="flex size-full flex-col gap-10 text-white">
        <div className="h-75 w-full rounded-[20px] bg-[url('/images/hero-background.png')]">
          <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
            <h2 className="glassmorphism max-w-67.5 rounded py-2 text-center text-base font-normal">Upcoming meeting at: 12:30 PM</h2>
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-extrabold lg:text-7xl">
                {time.toUpperCase()}
              </h1>
              <p className="text-lg font-medium text-[#C9DDFF] lg:text-2xl">
                {date}
              </p>
            </div>
          </div>
        </div>

        <MeetingTypeList />
      </section>
    </>

  )
}

export default Home
