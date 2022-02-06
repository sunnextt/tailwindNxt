import styles from '../styles/Home.module.css'

const Header = () => {
  return           <header className="flex justify-between flex-wrap px-8 py-2 sm:flex-col xl:flex-row lg:flex-row md:flex-row">
                <div>
                    <p className="text-sm">Remaining Days to my Trip</p>

                    <div className="flex">
                        <div className="flex-col text-center mx-1 w-10">
                            <h2 className={styles.pFlexT}>10</h2>
                            <p className={styles.txtSpan}>Weeks</p>
                        </div>
                        <div className="flex-col text-center mx-1 w-10">
                            <h2 className={styles.pFlexT}>06</h2>
                            <p className={styles.txtSpan}>Days</p>
                        </div>
                        <div className="flex-col text-center mx-1 w-10">
                            <h2 className={styles.pFlexT}>45</h2>
                            <p className={styles.txtSpan}>Hours</p>
                        </div>
                        <div className="flex-col text-center mx-1 w-10">
                            <h2 className={styles.pFlexT}>25</h2>
                            <p className={styles.txtSpan}>Minutes</p>
                        </div>
                        <div className="flex-col text-center mx-1 w-10">
                            <h2 className={styles.pFlexT}>06</h2>
                            <p className={styles.txtSpan}>Seconds</p>
                        </div>
                    </div>
                </div>
                <div className="flex text-sm py-5">
                    <p className="px-2">My Trips</p>
                    <div className="flex">
                        <p className="px-2">|</p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <span>EN (S)</span>
                    </div>
                </div>
            </header>
};

export default Header;
