import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between px-5 pt-6">
      <div className="relative h-[30px] w-[100px]">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Food_s"
            width={100}
            height={30}
            className="h-10"
          />
        </Link>
      </div>
      <Button
        size="icon"
        variant="ghost"
        className="rounded-md border-none bg-transparent p-2"
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
