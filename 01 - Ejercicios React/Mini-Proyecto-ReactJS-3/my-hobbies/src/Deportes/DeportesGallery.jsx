import { dataHobbies } from '../Data/hobbies.data';
import { CardDeportes } from './Deportes';
import './DeportesGallery.css';

export const Gallery1 = () => {
    const data = dataHobbies;

    return (
        <div id="container-gallery1">
            {data.sports.map((item) => (
                <CardDeportes name1={item.name1} logo={item.favoriteTeam.logo} name={item.favoriteTeam.name} key={item.name} />
            ))}
        </div>
    );
};
