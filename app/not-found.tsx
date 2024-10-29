import { Button } from "@/components/ui/button";
import { PinLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-black m-0 p-0 flex justify-center items-center flex-col h-screen">
      <h1 className="text-4xl font-bold text-white mb-8">
        Oops, cette page n&apos;existe pas ! 🙃
      </h1>
      <Link href="/">
        <Button className="rounded-3xl text-2xl w-80 px-8 py-12 flex-col">
          <span className="">
            {" "}
            Revenir sur le site{" "}
            <PinLeftIcon className="inline-block scale-110" />
          </span>
          <span className="font-thin">julienpenna.com</span>
        </Button>
      </Link>
    </main>
  );
}
