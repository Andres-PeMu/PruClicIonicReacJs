const initialUrl = "https://swapi.dev/api/films/";

export const fetchDAta = async () => {
    try {
        const response = await Promise.resolve(
            fetch(initialUrl)
                .then(res => res.json())
        );
        return response;
    } catch (error) { console.log(Error, error); }
};

export const fetchDAtaName = async ( moviesApi, numMovies ) => {
    let datosResponse = [];
    datosResponse = moviesApi[numMovies].characters
    try {
        const response = await Promise.all(
            datosResponse.map(url => fetch(url)
                .then(res => res.json()))
        );
        return response;
    } catch (error) { console.log(Error, error); }
};