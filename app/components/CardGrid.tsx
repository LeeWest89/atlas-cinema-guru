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
  selectedGenres: string[];
  updateTotalPages: (pages: number) => void;
}

export const MovieGrid: React.FC<MovieGridProps> = ({ currentPage, selectedGenres, updateTotalPages }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async (page: number, genres: string[]) => {
      try {
        const genreQuery = genres.length > 0 ? `&genres=${encodeURIComponent(genres.join(","))}` : "";
        const res = await fetch(`/api/titles?page=${page}${genreQuery}`);
        const data = await res.json();

        setMovies(data.titles || []);

        const pages = Math.ceil(data.totalCount / data.resultsPerPage);
        updateTotalPages(pages);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    fetchMovies(currentPage, selectedGenres);
  }, [currentPage, selectedGenres]);

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