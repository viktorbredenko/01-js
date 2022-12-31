//https://www.youtube.com/watch?v=hkrmyIecHR0        24:25
const  fetchUrl = (url)  => {
    console.log(`fetching ${url}...`);
}

function debounce(callback, delay){
    let timer  = null;

    return (url) => {
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            callback(url)
        }, delay)
    }
}

const fetching = debounce(fetchUrl, 1500);

fetching(1);
fetching(2);
fetching(3);
fetching(4);
fetching(5);
//console.log(fetchUrl(1))

//https://www.youtube.com/watch?v=YaM0CaDTshc

