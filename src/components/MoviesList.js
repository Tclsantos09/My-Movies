import { MoviesItem } from "./MovieItem";

export const MoviesList = ({ movies }) => (
    <section>
        <ul>
            {movies.map((m) => <MoviesItem title={m.title} id={m.id} />)}
        </ul>
    </section>
);