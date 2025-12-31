import { ticketPath } from "@/app/data/paths";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ICON1 } from "../constant";
import { Ticket } from "../types";
import { LucideSquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";


type TicketItemProps = {
    ticket: Ticket;
    isDetail?: boolean;
}

const TicketItem = ({ticket,isDetail} : TicketItemProps) => {
    
    const detailButton = (
        <Button variant="outline" size="icon" asChild>
            <Link href={ticketPath(ticket.id)}>
                <LucideSquarePen className="h-4 w-4" />
            </Link>
        </Button>
    )
    
    return(
        <div className={clsx("w-full flex gap-x-1",{
            "max-w-[520px]": isDetail,
            "max-w-[420px]": !isDetail
        })}>
        <Card key={ticket.id} className="w-full">
            <CardHeader>
                <CardTitle className="flex gap-x-2 items-center">
                    <span>{ICON1[ticket.status]}</span>
                    <span className="truncate">{ticket.title}</span>
                </CardTitle>
                </CardHeader>
                    <CardContent>
                        <span className={clsx("whitespace-break-spaces text-slate-600",{
                            "line-clamp-3" : !isDetail,
                        })}>{ticket.content}</span>
                    </CardContent>
                    <CardFooter>
                    </CardFooter>
                </Card>
        {isDetail ? null : (
            <div className="flex flex-col gap-y-1">
                {detailButton}
            </div>
        )}    
        </div>
    )
}

export {TicketItem}