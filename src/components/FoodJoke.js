import {useState, useEffect} from 'react';
import axios from 'axios';

function FoodJoke(){

    const [jokes, setJoke] = useState([]);

    useEffect(() => {

        let apikey = '76539e4840cf430da3c11786bf18ecbe'

        const getJoke = async () => {
            let res = await axios.get('https://api.spoonacular.com/food/jokes/random?apiKey=' + apikey);

            //console.log(res.data.text);
            let jokeText = res.data.text;
            setJoke(jokeText);
            
        }
        

        getJoke();

    },[])

    // console.log(jokes);

    const jokeText = jokes;

    return (
        <>
            <h3>Joke of the Day!</h3>
            <p>{jokeText}</p>   
        </>
        
    )
    
}


export default FoodJoke