import React, {useState, KeyboardEvent, useEffect} from "react";
import styles from './Select.module.css'

type ItemType = {
    id: number
    value: any
}

type SelectPropsType = {
    value: any
    items: ItemType[]
    onChange: (value: any) => void
}

export function Select(props: SelectPropsType) {


    const [collapseItems, setCollapseItems] = useState<boolean>(false)
    const [hovoredElemetValue, setHovoredElemetValue] = useState<any>(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hovoredItem = props.items.find(i => i.value === hovoredElemetValue)

    useEffect(() => {
        setHovoredElemetValue(props.value)
    }, [props.value])

    const toggleItems = () => setCollapseItems(!collapseItems)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hovoredElemetValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setCollapseItems(false)
        }
    }

    return (
        <>
            <div onKeyUp={onKeyUp} tabIndex={0}>
                <span className={styles.select} onClick={toggleItems}>{selectedItem && selectedItem.value}</span>
                {collapseItems && <div className={styles.items}
                >{props.items.map(i => <div
                    onMouseEnter={() => setHovoredElemetValue(i.value)}
                    className={hovoredItem === i ? styles.item : ''}
                    key={i.id}
                    onClick={() => onItemClick(i.value)}>{i.value}</div>)}</div>}
            </div>

        </>
    )
}