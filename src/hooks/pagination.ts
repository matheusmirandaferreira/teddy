import { useCallback, useState } from 'react';

export function usePagination(initialLimit = 12) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(initialLimit);

  const nextPage = useCallback(() => {
    setPage((prev) => {
      const newPage = prev + 1;

      if (newPage >= limit) return limit;
      else return newPage;
    });
  }, [limit]);

  const prevPage = useCallback(() => {
    setPage((prev) => {
      const newPage = prev - 1;

      if (newPage <= 1) return 1;
      else return newPage;
    });
  }, []);

  const updateLimit = useCallback((val: number) => setLimit(val), []);

  return { page, limit, nextPage, prevPage, updateLimit };
}
