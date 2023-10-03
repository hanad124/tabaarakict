import loadingSpinner from "@/public/assets/loading-spinner.svg";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="h-screen bg-white relative z-30 flex justify-center items-center">
      <Image
        src={loadingSpinner}
        width={300}
        height={300}
        alt="loading spinner"
      />
    </div>
  );
}
