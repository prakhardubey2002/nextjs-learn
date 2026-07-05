"use client"
import TicketCard from '@/components/TicketCard'
import usefetch from '@/hooks/usefetch'
import type { Ticket } from '@/types'

const TicketList = () => {
    const { data, error, isLoading } = usefetch<Ticket[]>('http://localhost:4000/tickets', {
        refreshInterval: 0,//polling interval of revalidation is in milliseconds
    })
    if (error) return <div>Error: {error.message}</div>
    if (isLoading) return <div>Loading...</div>
    if (data?.length === 0) return <div>No tickets found! Yay</div>
    return (
        <main>
            <h1>Our Tickets</h1>
            {data?.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
            ))}
        </main>
    )
}

export default TicketList