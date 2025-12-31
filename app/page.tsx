import { Heading } from "@/components/heading";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Heading title="HomePage" description="You can start here"/>
      <div className="flex-1 flex flex-col items-center gap-y-8">
        <Link href="/tickets" className="underline">
          Go To Tickets
        </Link>
      </div> 
    </div>
  );
}
