import React from 'react'
import styles from './dashboard.module.css'

const dashboard = () => {
  return (
    <div className={styles.dashboard}>
        <div className={styles.DashboardLeft}>
            <div className={styles.DashboardHeaderTitle}> Smart Resume Analyzer</div>
            <div className={styles.DashboardHeaderLargeTitle}> Resume Mathing Score</div>
            <div className={styles.DashboardInstructions}>
                <div className={styles.InstructionTitle}>🔔 Important Instructions: </div>
                <p>📄 Please Upload the job description before anayzing the score</p>
                <p>⬆️ Upload the Resume in the pdf format only</p>
            </div>
        </div>
        <div className= {styles.DashboardRight}>
            Right Dashboard
        </div>
    </div>
  )
}
export default dashboard