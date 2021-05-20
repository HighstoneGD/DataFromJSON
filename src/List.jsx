import React, { useEffect, useState } from 'react'
import Loader from './Loader'

const List = () => {
    const [content, setContent] = useState(<Loader />)

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(require("./data.json"))
            }, 2000)
        })

        promise.then(responce => {
            const dataList = Object.keys(responce).map(key => {
                return typeof responce[key] === 'object' ?
                    [ 
                        <li key = { key }>{ `${ key }:` }</li>,
                        <ul>{ Object.keys(responce[key]).map(key2 => 
                            <li key = { key2 }>{ `   ${ key2 }: ${ responce[key][key2] }` }</li>
                        ) }</ul> 
                    ] :
                    <li key = { key }>{ `${ key }: ${ responce[key] }` }</li>
            })
            setContent(<ul className = "list">{ dataList }</ul>)
        })
    }, [])

    return content
}

export default List