import { initialTicket } from "@/app/data/data"
import { Ticket } from "../types"

export const getTicket = async(ticketID : string): Promise<Ticket | null> => {
    await new Promise((resolve) => setTimeout(resolve,200))
    const maybeTicket = initialTicket.find(ticket => ticket.id === ticketID)
    return new Promise(resolve => (
        resolve(maybeTicket ?? null)
    ))
}