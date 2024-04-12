import { dataHobbies } from '../Data/hobbies.data';
import './MoviesGallery.css';
import { CardMovie } from './Movies';

export const Gallery2 = () => {
    const data = dataHobbies;

    return (
        <div id="container-gallery2">
            {data.movies.map((item) => (
                <CardMovie poster={item.poster} name={item.name} vote={item.vote} genre={item.genre} key={item.name} />
            ))}
        </div>
    );
};
