
import Link from "next/link";
import { initialTicket } from "../data/data";
import { ticketPath } from "../data/paths";
import { title } from "process";
import clsx from "clsx";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LucideCircleCheck, LucideFileText, LucidePencil } from "lucide-react";
import { Heading } from "@/components/heading";
import { TicketItem } from "../features/ticket/components/ticket-item";
//import { useEffect, useState } from "react";
import { Ticket } from "../features/ticket/types";
import { getTickets } from "../features/ticket/queries/get-tickets";
import { Suspense } from "react";
import { TicketList } from "../features/ticket/components/ticket-list";
import { Spinner } from "@/components/spinner";



const ICON1 = {
    "OPEN" : <LucideFileText />,
    "IN_PROGRESS" : <LucidePencil />,
    "DONE" : <LucideCircleCheck />
}

const Tickets =  () => {
    //const [tickets,setTickets] = useState<Ticket[]>([])
    //const tickets = await getTickets()
    //useEffect(()=>{
    //    const fetchTickets = async () => {
    //        const result = await getTickets()
    //        setTickets(result)
    //    }
    //    fetchTickets()
    //},[])
    return(
        <div className="flex-1 flex flex-col gap-y-8">
            <Heading title="All Tickets" description="Here is All Your Tickets" />
            <Suspense fallback={<Spinner />}>
                <TicketList />
            </Suspense>
        </div>
    )
}


export default Tickets;