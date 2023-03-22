import styles from './styles.module.css'
export default function DashBoard() {
  return (
    <section className="section-body h-[600px]">
      <div className="contain-body grid grid-cols-2 gap-4 max-md:grid-cols-1">
        <div className="card-white divide-y divide-gray-200 flex flex-col">
          <div className="h-[55px] px-3 flex items-center">
            <h2 className="text-base font-normal">Latest Blocks</h2>
          </div>
          <div className="h-[545px] grid grid-cols-1 divide-gray-200 divide-y overflow-y-auto">
            <div className={styles.dashboardItem}>1</div>
            <div className={styles.dashboardItem}>2</div>
            <div className={styles.dashboardItem}>2</div>
            <div className={styles.dashboardItem}>2</div>
          </div>
        </div>
        <div className="card-white divide-y divide-gray-200">
          <div className="h-[55px] px-3 flex items-center">
            <h2 className="text-base font-normal">Latest Transactions</h2>
          </div>
          <div className="h-[545px] grid grid-cols-1 divide-gray-200 divide-y overflow-y-auto">
            <div className={styles.dashboardItem}>1</div>
            <div className={styles.dashboardItem}>2</div>
            <div className={styles.dashboardItem}>2</div>
            <div className={styles.dashboardItem}>2</div>
          </div>
        </div>
      </div>
    </section>
  )
}