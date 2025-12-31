import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">HomePage</h1>
      <p className="text-sm text-muted-foreground">
        Your start here 
      </p>
      <div className="flex-1 flex flex-col items-center gap-y-8">
        <Link href="/tickets" className="underline">
          Go To Tickets
        </Link>
      </div> 
    </div>
  );
}
