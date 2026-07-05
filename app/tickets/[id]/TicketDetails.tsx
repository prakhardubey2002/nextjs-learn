"use client"
//The dynamicParams option allows you to control what happens when a dynamic segment is visited that was not generated with generateStaticParams.
//true (default): Dynamic route segments not included in generateStaticParams are generated at request time.
//false: Dynamic route segments not included in generateStaticParams will return a 404.
//dynamicParams = true (default)
// URL	Behavior
// /tickets/1
// Works (pre-built at build)
// /tickets/2
// Works (pre-built at build)
// /tickets/99
// Still works — Next.js generates the page on-demand at request time
// New ticket IDs added after build can still be visited. Next.js creates the page when first requested.

// dynamicParams = false
// URL	Behavior
// /tickets/1
// Works (was in generateStaticParams)
// /tickets/2
// Works
// /tickets/3
// Works
// /tickets/99
// 404 immediately — Next.js won't generate it
// Only IDs returned by generateStaticParams at build time are allowed. Anything else → 404 at the routing level (your component never runs).

// Behavioral difference in plain terms
// dynamicParams = true  →  "Allow any [id], build page if needed"
// dynamicParams = false →  "Only allow ids I listed at build time"
// Use false when you want a closed set of routes (e.g. known blog posts, fixed product catalog). Use true when new items can appear anytime (e.g. new tickets in your DB).
export const dynamicParams = true;
import usefetch from "@/hooks/usefetch"
import type { Ticket } from "@/types"
import { notFound } from "next/navigation";

const TicketDetails = ({ id }: { id: string }) => {
    const { data, error, isLoading } = usefetch<Ticket>(
        `http://localhost:4000/tickets/${id}`
    )
    if (error) return <div>Error: {error.message}</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return notFound();

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
