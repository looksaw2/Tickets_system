"use client";
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



const ICON1 = {
    "OPEN" : <LucideFileText />,
    "IN_PROGRESS" : <LucidePencil />,
    "DONE" : <LucideCircleCheck />
}

const Tickets = () => {
    return(
        <div className="flex-1 flex flex-col gap-y-8">
            <Heading title="All Tickets" description="Here is All Your Tickets" />

            <div className="flex-1 flex flex-col items-center gap-y-4 fade-in-from-top">
            {initialTicket.map(ticket => (
                <TicketItem key={ticket.id} ticket={ticket} />
            ))}
            </div>
        </div>
    )
}


export default Tickets;