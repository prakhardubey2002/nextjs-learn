import Loading from '@/Loading'
import TicketList from '@/tickets/TicketList'
import { Suspense } from 'react'

const page = () => {
    return (
        <div className='w-[80vw] mx-auto flex flex-col items-center justify-center'>
            <h2>Tickets</h2>
            {/* Suspense is used to show a fallback component while the component is loading  while above data is loaded only suspense wrapped component is rendered as loading */}
            <Suspense fallback={<Loading />}>
                <TicketList />
            </Suspense>
        </div>
    )
}

export default page