import { classNames } from 'helpers'

import styles from './Button.module.scss'

const Button = (
    {
        className,
        children,
    },
) => {
    return (
        <button className={classNames(styles.button, className)}>
            {children}
        </button>
    )
}

export default Button
