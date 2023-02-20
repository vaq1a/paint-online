import { Icon } from "components/UI/Icon";
import { Button } from "components/UI/Button";

import styles from './Toolbar.module.scss';

const Toolbar = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.editBar}>
                <Icon
                    name="brush"
                    className={styles.icon}
                />
                <Icon
                    name="rect"
                    className={styles.icon}
                />
                <Icon
                    name="circle"
                    className={styles.icon}
                />
                <Icon
                    name="eraser"
                    className={styles.icon}
                />
                <Icon
                    name="line"
                    className={styles.icon}
                />
                <Button>
                    Change color
                </Button>
            </div>
            <div className={styles.historyBar}>
                <Icon
                    name="undo"
                    className={styles.icon}
                />
                <Icon
                    name="redo"
                    className={styles.icon}
                />
                <Icon
                    name="save"
                    className={styles.icon}
                />
            </div>
        </div>
    );
};

export default Toolbar;