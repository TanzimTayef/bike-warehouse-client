import { useEffect, useState } from "react"

const useStocksDetails = (stockId) => {
    const [stock, setStock] = useState({});
   
    useEffect(() => {
        fetch(`https://mighty-mesa-23179.herokuapp.com/stocks/${stockId}`)
            .then(res => res.json())
            .then(data => setStock(data));
    }, [stockId])
    return [stock, setStock];
}


export default useStocksDetails;