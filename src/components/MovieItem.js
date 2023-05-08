import { Link } from "react-router-dom";

export const MoviesItem = ({ title, id }) => (
    <li>
        <Link to={`movie/${id}`}>
            {title}
        </Link>
    </li>
);