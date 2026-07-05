"use client"

import usepost from '@/hooks/usepost'
import type { CreateTicketInput, Ticket, TicketPriority } from '@/types'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const TICKETS_URL = 'http://localhost:4000/tickets'

export default function CreateForm() {
    const router = useRouter()
    const { post, isMutating, error } = usepost<Ticket, CreateTicketInput>(TICKETS_URL)

    const [title, setTitle] = useState<CreateTicketInput['title']>('')
    const [body, setBody] = useState<CreateTicketInput['body']>('')
    const [priority, setPriority] = useState<TicketPriority>('low')
    const [userEmail, setUserEmail] = useState<CreateTicketInput['user_email']>('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const ticket: CreateTicketInput = { title, body, priority, user_email: userEmail }

        try {
            await post(ticket, TICKETS_URL)

            router.refresh();// refresh the page to show the new ticket in the list by using router.refresh()
            router.push('/tickets')

        } catch {
            // error surfaced via hook's error state
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <p className="error">{error.message}</p>}
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value as TicketPriority)}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <input
                type="email"
                placeholder="User Email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
            />
            <button className="btn-primary" disabled={isMutating} type="submit">
                {isMutating ? 'Creating...' : 'Create Ticket'}
            </button>
        </form>
    )
}
