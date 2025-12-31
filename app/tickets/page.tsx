"use client";
import Link from "next/link";
import { initialTicket } from "../data/data";
import { ticketPath } from "../data/paths";
import { title } from "process";


const ICON1 = {
    "OPEN" : "O",
    "DONE" : "X"
}

const Tickets = () => {
    return(
        <div className="flex-1 flex flex-col gap-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">TicketsPage</h2>
                <p className="text-sm">
                    All your ticket at one place
                </p>
            </div>
            <div className="flex-1 flex flex-col items-center gap-y-4">
            {initialTicket.map(ticket => (
                <div key={ticket.id} className="w-full max-w-[420px] p-4 border border-slate-500 rounded">
                    <div>{ICON1[ticket.status]}</div>
                    <h2 className="text-lg">{ticket.title}</h2>
                    <p className="text-sm text-slate-500 truncate">{ticket.content}</p>
                    <Link href={ticketPath(ticket.id)} className="underline text-sm">
                        view
                    </Link>
                </div>
            ))}
            </div>
        </div>
    )
}


export default Tickets;