import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import { parseListCurrency } from './utils'

const List = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        async function getData() {
                setIsLoading(true)
                const promise = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(require("./data.json"))
                    }, 2000)
                })
        
                try {
                    const responce = await promise
                    setData(responce)
                } finally {
                    setIsLoading(false)
                }
        }

        if (!data)
            getData()   
    }, [data])

    const currency = data?.base
    const list = React.useMemo(() => parseListCurrency(data), [data])

    const renderRow = ({ cur, rate }) =>
        <div key = { cur } className = "currency">
            <div>{ cur }</div>
            <div>{ rate }</div>
        </div>

    const renderList = () => 
        <div className = "wrapper">
            <h1>{ `Currency: ${ currency }` }</h1>
            { list.map(row => renderRow(row)) }
        </div>

    return isLoading ? <Loader /> : renderList()
}

export default List