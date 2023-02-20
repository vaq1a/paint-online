import { useCallback, useState } from 'react'
import { classNames } from 'helpers'

import styles from './Input.module.scss'
const Input = (
    {
        onChange,
        setValue,
        setValueOptions,
        type,
        className,
        field,
        register,
        rules,
        errors,
        ...restProps
    },
) => {
    const [compositionEnded, setCompositionEnded] = useState(true)

    const onChangeValue = useCallback((e) => {
        if (compositionEnded) {
            setValue?.(field, e.target.value, setValueOptions)
            onChange?.(e)
        }
    }, [field, setValue, setValueOptions, onChange, compositionEnded])

    return (
        <>
            <input
                {...restProps}
                className={classNames(styles.input, className)}
                type={type}
                onChange={onChangeValue}
                {...register?.(field, {
                    ...rules,
                    onChange: onChangeValue,
                })}
                onCompositionStart={() => {
                    setCompositionEnded(false)
                }}
                onCompositionEnd={() => {
                    setCompositionEnded(true)
                }}
            />

            {errors?.[field] && <p className={styles.error}>{errors[field]?.message}</p>}
        </>
    )
}

export default Input
