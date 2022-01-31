import { useEffect, useState } from "react";
import { getAll } from "../../services/data-service";
import { QuoteType } from "../../typings";

const QuoteGenerator = () => {
    const [quotes, setQuotes] = useState<QuoteType[]>([]);

    useEffect(() => {
        getAll().then((response) => {
            console.log('response:', response.data);
            setQuotes(response.data);
        }).catch((err) => {
            console.log('ERROR: ', err);
        })
    }, []);


    const randomIndex = Math.floor(Math.random() * quotes?.length);

    return (
        <div>
            {
                quotes.length > 0 ?
                    <h1 color="white">
                        {quotes[randomIndex].title}
                    </h1>
                : null
            }
        </div>
    );
}

export default QuoteGenerator;