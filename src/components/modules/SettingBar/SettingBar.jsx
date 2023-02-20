import { Input } from "components/UI/Input";

import styles from './SettingBar.module.scss'

const SettingBar = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.block}>
                <div className={styles.title}>
                    Line width:
                </div>
                <Input
                    className={styles.input}
                    placeholder="1"
                />

            </div>
        </div>
    );
};

export default SettingBar;