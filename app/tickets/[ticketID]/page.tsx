import { initialTicket } from "@/app/data/data";
import type {InitTicketProps}  from "@/app/data/data";
type TicketProps = {
    params : Promise<{
        ticketID : string
    }>
}



const TicketPageWithID = async ({params} : TicketProps) => {
    const {ticketID} = await params;
    const ticket : InitTicketProps | undefined = initialTicket.find(ticket => ticket.id === ticketID);
    return(
        <div>
            <h2>Title {ticket?.title}</h2>
            <h2>Content {ticket?.content}</h2>
        </div>
    )
}


export default TicketPageWithID