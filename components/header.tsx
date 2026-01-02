
import { homePath, ticketsPath } from "@/app/data/paths"
import { Button, buttonVariants } from "./ui/button"
import { LucideKanban } from "lucide-react"
import Link from "next/link";
import { ThemeProvider } from "./theme/theme-provider";
import { ThemeSwitcher } from "./theme/theme-switcher";

const AppHeader = () => {
    return(
        <>
        <nav className="
        supports-background-blur:bg-background/60
        fixed left-0 right-0 top-0 z-20 
        flex justify-between py-2.5 px-5 border-b w-full
        
        ">
          <div className="flex align-item gap-x-2">
            <Link href={homePath()} className={buttonVariants({variant : "ghost"})}>
              <h2 className="ml-2 text-lg font-semibold">TicketBounty</h2>
              <LucideKanban />
            </Link>
          </div> 
          <div className="flex items-center gap-x-2">
          <ThemeSwitcher />
          <Link href={ticketsPath()}  className={buttonVariants({variant : "outline" })}>
            Tickets
          </Link>
          </div> 
        </nav>
        </>
    )
}


export {AppHeader}


