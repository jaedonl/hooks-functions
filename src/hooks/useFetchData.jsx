import React, { useEffect, useState } from 'react'
import axios from 'axios'


const useFetchData = (apiUrl) => {
    const [data, setData] = useState(null)  

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(apiUrl)
            
            setData(res.data)
        } 
    }, [apiUrl])
    
    return [data]
}

export default useFetchData