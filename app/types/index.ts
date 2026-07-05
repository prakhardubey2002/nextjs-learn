export type TicketPriority = 'low' | 'medium' | 'high'

export interface Ticket {
  id: string
  title: string
  body: string
  priority: TicketPriority
  user_email: string
}

export type CreateTicketInput = Omit<Ticket, 'id'>
