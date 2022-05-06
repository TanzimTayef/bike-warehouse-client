import { useEffect, useState } from "react"

const useStocksDetails = (stockId) => {
    const [stock, setStock] = useState({});
   
    useEffect(() => {
        fetch(`http://localhost:8080/stocks/${stockId}`)
            .then(res => res.json())
            .then(data => setStock(data));
    }, [stockId])
    return [stock, setStock];
}


export default useStocksDetails;