import Image from "next/image";

interface HomeCardProps {
  title: string;
  subtitle: string;
  icon: string;
  handleClick: () => void;
  color: string;
}
const HomeCard = ({
  title,
  subtitle,
  icon,
  handleClick,
  color,
}: HomeCardProps) => {
  return (
    <>
      <div
        className={`${color} px-4 py-6 flex flex-col justify-between w-full xl:max-w-65 min-h-64 rounded-[14px] cursor-pointer`}
        onClick={() => {
          handleClick();
        }}
      >
        <div className="flex-center glassmorphism size-12 rounded-[10px]">
          <Image src={icon} alt="add new meeting" width={27} height={27} />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-lg font-normal">{subtitle}</p>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
