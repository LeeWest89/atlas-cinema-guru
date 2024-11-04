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
  minYear?: string;
  maxYear?: string;
  query?: string;
}

export const MovieGrid: React.FC<MovieGridProps> = ({ currentPage, selectedGenres, updateTotalPages, minYear, maxYear, query }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async (page: number, genres: string[], minYear?: string, maxYear?: string, query?: string) => {
      try {
        const genreQuery = genres.length > 0 ? `&genres=${encodeURIComponent(genres.join(","))}` : "";
        const yearQuery = (minYear || maxYear) ? `&minYear=${minYear}&maxYear=${maxYear}` : "";
        const queryParam = query ? `&query=${encodeURIComponent(query)}` : "";
        const res = await fetch(`/api/titles?page=${page}${genreQuery}${yearQuery}${queryParam}`);
        const data = await res.json();

        setMovies(data.titles || []);

        const pages = Math.ceil(data.totalCount / data.resultsPerPage);
        updateTotalPages(pages);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    fetchMovies(currentPage, selectedGenres, minYear, maxYear, query);
  }, [currentPage, selectedGenres, minYear, maxYear, query]);

  return (
    <div className="px-10 py-3">
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-x-40 gap-y-2"> {/* Add gap for spacing between cards */}
          {movies.map((movie) => (
            <div key={movie.id}>
              <Card movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};