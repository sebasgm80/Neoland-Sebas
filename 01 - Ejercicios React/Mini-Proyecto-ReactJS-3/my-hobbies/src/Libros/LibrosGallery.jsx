import { dataHobbies } from '../Data/hobbies.data';
import { CardLibro } from './Libros';
import './LibrosGallery.css';

export const Gallery = () => {
    const data = dataHobbies;

    return (
        <div id="container-gallery">
            {data.read.map((item) => (
                <CardLibro bookImage={item.bookImage} title={item.title} key={item.title} />
            ))}
        </div>
    );
};
