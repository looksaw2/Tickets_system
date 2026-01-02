import { initialTicket } from "@/app/data/data";
import type {Ticket}  from "@/app/features/ticket/types";
import { ticketsPath } from "@/app/data/paths";
import { TicketItem } from "@/app/features/ticket/components/ticket-item";
import { PlaceHolder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getTicket } from "@/app/features/ticket/queries/get-ticket";
import { notFound } from "next/navigation";
type TicketProps = {
    params : Promise<{
        ticketID : string
    }>
}



const TicketPageWithID = async ({params} : TicketProps) => {
    const ticket = await getTicket((await params).ticketID)
    if(!ticket){
        return (
            //<div className="min-h-screen flex items-center justify-center">
            //    <PlaceHolder 
            //    label="ticket not found" 
            //    button={
            //        <Button asChild variant="ghost">
            //            <Link href={ticketsPath()}>
            //                Go Back to Tickets 
            //            </Link>
            //        </Button>
            //    }
            //    />
            //</div>
            notFound()
        )
    }
    return(
        <div className="flex justify-center fade-in-from-top">
            <TicketItem ticket={ticket} isDetail />
        </div>
    )
}


export default TicketPageWithID