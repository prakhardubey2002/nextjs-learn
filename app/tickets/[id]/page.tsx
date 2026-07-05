import TicketDetails from "./TicketDetails"
import type { Ticket } from "@/types"
//The generateStaticParams function can be used in combination with dynamic route segments to statically generate routes at build time instead of on-demand at request time.
// will generate all the tickets pages at build time also will revalidate as needed
// (SSG) Static Site Generation -    prerendered as static HTML (uses generateStaticParams)
export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/tickets")// run on build time thats why native fetch instead of useswr
  const tickets: Ticket[] = await res.json()
  return tickets.map((ticket) => ({
    id: ticket.id,
  }))
}
export default async function TicketPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    return <TicketDetails id={id} />
}
