import { dataHobbies } from '../Data/hobbies.data';
import { CardIdiomas } from './Idiomas';
import './IdiomasGallery.css';

export const Gallery3 = () => {
    const data = dataHobbies;

    return (
        <div id="container-gallery3">
            {data.languages.map((item) => (
                <CardIdiomas language={item.language} wrlevel={item.wrlevel} splevel={item.splevel} key={item.language} />
            ))}
        </div>
    );
};