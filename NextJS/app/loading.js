import Image from "next/image";

export default function Loading() {
  return (
    <Image src="./img/loading.svg" width={50} height={50} className="loading-icon"/>
  );
}
