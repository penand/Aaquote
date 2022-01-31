import { useEffect, useState } from "react";

import { getAll } from "../../services/data-service";
import { QuoteType } from "../../typings";
import { StyledContainer, StyledH1 } from "./style";

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

    // const randomIndex = Math.floor(Math.random() * quotes?.length);

    return (
        <StyledContainer>
            {
                quotes.length > 0 ?
                    <StyledH1>
                        {quotes[4].title}
                    </StyledH1>
                : null
            }
        </StyledContainer>
    );
}

export default QuoteGenerator;