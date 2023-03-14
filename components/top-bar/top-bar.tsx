import styles from './top-bar.module.scss'

export default function TopBar() {
    let theme = 'light';
    return (
        <div className={styles.container}>
            <span className="material-symbols-outlined">search</span>
            <div className={styles.search}>
                <input placeholder='Search'/>
                <button>    
                    <span className="material-symbols-outlined">search</span>
                </button>
            </div>
            <div className={styles.actions}>
                <button>
                    Log in
                </button>
                <button>
                    Setting
                </button>
            </div>
        </div>
    )
}