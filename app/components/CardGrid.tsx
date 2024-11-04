import { useEffect, useState } from 'react';
import { Card } from './Card';

interface Movie {
  id: string;
  title: string;
  synopsis: string;
  released: number;
  genre: string;
  favorited?: boolean;
  watchLater?: boolean;
}

interface MovieGridProps {
  currentPage: number;
}

export const MovieGrid: React.FC<MovieGridProps> = ({ currentPage }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async (page: number) => {
      try {
        const res = await fetch(`/api/titles?page=${page}`);
        const data = await res.json();
        setMovies(data.titles || []);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    fetchMovies(currentPage);
  }, [currentPage]);

  return (
    <div className="p-4">
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-3 gap-10">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};