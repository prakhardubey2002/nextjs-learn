"use client"

import usefetch from "@/hooks/usefetch"
import type { Ticket } from "@/types"

const TicketDetails = ({ id }: { id: string }) => {
    const { data, error, isLoading } = usefetch<Ticket>(
        `http://localhost:4000/tickets/${id}`
    )

    if (error) return <div>Error: {error.message}</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return <div>No data found</div>

    return (
        <div className="w-[80vw] mx-auto flex flex-col items-start justify-center gap-2">
            <h2>Ticket Details</h2>
            <h1>{data.title}</h1>
            <p>Body: {data.body}</p>
            <p>Priority: {data.priority}</p>
            <p>Created by: {data.user_email}</p>
        </div>
    );
}

export default TicketDetails
