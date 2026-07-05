import TicketList from '@/tickets/TicketList'

const page = () => {
    return (
        <div className='w-[80vw] mx-auto flex flex-col items-center justify-center'>
            <h2>Tickets</h2>
            <TicketList />
        </div>
    )
}

export default page