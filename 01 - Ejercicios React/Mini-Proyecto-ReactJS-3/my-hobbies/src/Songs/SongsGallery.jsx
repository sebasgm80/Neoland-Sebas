import { dataHobbies } from '../Data/hobbies.data';
import { CardSong } from './Songs';
import './SongsGallery.css';

export const Gallery4 = () => {
    const data = dataHobbies;

    return (
        <div4 id="container-gallery4">
            {data.songsHeard.map((item) => (
                <CardSong name={item.name} artist={item.artist}  key={item.name} />
            ))}
        </div4>
    );
};