import Image from "next/image";
import { Poppins } from "next/font/google";
import { Banana } from "lucide-react";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="bg-white rounded-full p-1">
        <Banana className="rounded-xl w-28 h-28 text-white bg-gradient-to-r from-indigo-500 via purple-500 to-pink-500 p-3" />
      </div>
      <div className={cn("flex flex-col items-center", font.className)}>
        <p className="text-xl font-semibold text-slate-700">Messager</p>
      </div>
    </div>
  );
};

export default Logo;
