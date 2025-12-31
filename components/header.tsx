
import { homePath, ticketsPath } from "@/app/data/paths"
import { Button, buttonVariants } from "./ui/button"
import { LucideKanban } from "lucide-react"
import Link from "next/link";

const AppHeader = () => {
    return(
        <>
        <nav className="flex justify-between py-2.5 px-5 border-b">
            <Link href={homePath()} className={buttonVariants({variant : "ghost"})}>
              <LucideKanban />
              <h2 className="ml-2 text-lg font-semibold">TicketBounty</h2>
            </Link> 
          <div>
          <Link href={ticketsPath()}  className={buttonVariants({variant : "outline" })}>
            Tickets
          </Link>
          </div> 
        </nav>
        </>
    )
}


export {AppHeader}


