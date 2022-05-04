import { useEffect, useState } from "react"

const useStocks = () => {
    const [stocks, setStocks] = useState({});
   
    useEffect(() => {
        fetch("stocks.js")
            .then(res => res.json())
            .then(data => setStocks(data));
    })
    return [stocks, setStocks];
}


export default useStocks;