import react, {useState, useEffect} from 'react';
import axios from 'axios';

function FoodJoke(){

    const [jokes, setJoke] = useState([]);

    useEffect(() => {

        //let order = 'banana&number=2&sort=calories&sortDirection=desc'
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
        <div>
            <h2>Joke of the Day!</h2>
            <p>{jokeText}</p>   
        </div>
        
    )
    
}


export default FoodJoke