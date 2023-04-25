import Image from "next/legacy/image";

export default function CustomImage({
  zIndex = "z-0",
  opacity = "opacity-0",
  classes = "",
  imgUrl,
}: {
  zIndex?: string;
  opacity?: string;
  classes?: string;
  imgUrl: string;
}) {
  return (
    <div className={`h-full w-full   relative  ${zIndex} ${classes}`}>
      <Image
        layout="fill"
        loading="lazy"
        objectFit="cover"
        src={imgUrl}
        className={classes}
        // alt={"background image"}

      />
      <div className={`absolute inset-0 ${opacity} bg-black`} />
    </div>
  );
}
