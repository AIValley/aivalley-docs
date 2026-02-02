import Image from "next/image";

export function Logo() {
  return (
    <div className="flex w-full items-center gap-2 font-semibold text-xl">
      <Image
        className="dark:invert"
        src="/images/rsstoday-full.png"
        alt="rss.Today logo"
        width={100}
        height={20}
        priority
      />
    </div>
  );
}
