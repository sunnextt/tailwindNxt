import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Card from '../components/card'

export default function Home() {
  return (
    <div className={styles.container}>
            <Head>
                <title>Travel Jinni</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
                <div className="border-t border-gray-500"></div>
                <div className="flex flex-row px-8 min-h-[80vh] flex-wrap gap-8 ">
                    <div className="basis-1/4">
                        <h1 className="font-bold text-xl font-serif py-1">Six Days In Dubai</h1>
                        <ul className="flex md:flex-col sm:flex-col">
                            <li className="w-8 h-8 flex items-center justify-center">FEB</li>
                            <li className="bg-opacity-50 bg-black text-yellow-300 w-8 h-8 rounded-full flex items-center justify-center border-yellow-300 border-2 text-sm font-bold font-mono" >15</li>
                            <li className="w-8 h-10 flex items-center justify-center text-xs">16</li>
                            <li className="w-8 h-10 flex items-center justify-center text-xs">17</li>
                            <li className="w-8 h-10 flex items-center justify-center text-xs">18</li>
                            <li className="w-8 h-10 flex items-center justify-center text-xs">19</li>
                            <li className="w-8 h-10 flex items-center justify-center text-xs">20</li>
                        </ul>
                    </div>
            <Card/>
                <div className="basis-1/4"></div>
            </div>
    </div>
  )
}
