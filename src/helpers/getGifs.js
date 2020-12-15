export const getGifs = async( category ) =>{
    const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) } &limit=10&api_key=48Qzvn6bYuINFc6tnXrL0MfuU7Njc9zf`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id : img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}