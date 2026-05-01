import React from 'react'
import Image from "next/image";
import DataTable from "@/components/DataTable";

const columns: DataTableColumn<TrendingCoin>[] = [
    {header: "Name", key: "name"},
]

const Page = () => {
    return (
        <main className="main-container">
             <section className='home-grid'>
                 <div id='coin-overview'>
                    <div className='header pt-2'>
                        <Image src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png'
                               alt='Bitcoin'
                               height={56}
                               width={56}
                        />
                        <div className='info'>
                            <p>Bitcoin / BTC</p>
                            <h1>$76,800.00</h1>
                        </div>
                    </div>
                 </div>

                 <DataTable data={[]} columns={[{header:'Title'},{header:'Price'}]}/>
             </section>

            <section className='w-full mt-7 space-y-4'>
                <p>Categories</p>
            </section>
        </main>
    )
}
export default Page
