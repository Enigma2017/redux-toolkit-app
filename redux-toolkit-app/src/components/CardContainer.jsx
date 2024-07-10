import { Card } from "./Card";
import { useSelector } from 'react-redux';
import { selectPosts } from '../redux/postSlice';

export const CardContainer = () => {
    const posts = useSelector(selectPosts);

    return (
        <div className="card-container">
            <h1>Card Container</h1>

            {
                posts.map((item) => (
                    <Card key={item.id} item={item} />
                ))
            }

        </div>
    )
}