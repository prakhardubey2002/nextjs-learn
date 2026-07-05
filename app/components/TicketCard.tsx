import type { Ticket } from '@/types'

interface TicketCardProps {
  ticket: Ticket
}

const TicketCard = ({ ticket }: TicketCardProps) => {
  return (
    <div className="card">
      <h3>{ticket.title}</h3>
      <p>{ticket.body.slice(0, 200)}...</p>
      <span className={`pill ${ticket.priority}`}>{ticket.priority}</span>
    </div>
  )
}

export default TicketCard
