'use client';

export const Pagination = ({ currentPage, totalPages, onPageChange }: { currentPage: number, totalPages: number | undefined, onPageChange: (page: number) => void }) => {
  const isPrevDisabled = currentPage === 1;
  const totalPagesSafe = totalPages || 1;
  const isNextDisabled = currentPage >= totalPagesSafe || totalPagesSafe <= 1;

  const handlePrev= () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (totalPagesSafe > 1 && currentPage < totalPagesSafe) {
        onPageChange(currentPage + 1);
    }
  };

  console.log(`Current Page: ${currentPage}, Total Pages: ${totalPages}, Is Next Disabled: ${isNextDisabled}`);

  return (
    <div className="flex items-center justify-center gap-1 my-5 py-5">
      {/* Prev Button */}
      <button
        onClick={handlePrev}
        disabled={isPrevDisabled}
        className={`px-5 py-3 w-28 text-darkBlue bg-Teal transition-opacity duration-300 rounded-l-full 
        ${isPrevDisabled ? 'opacity-20 cursor-not-allowed' : 'hover:opacity-80'}`}
      >
        Previous
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={isNextDisabled}
        className={`px-5 py-3 w-28 text-darkBlue bg-Teal transition-opacity duration-300 rounded-r-full 
        ${isNextDisabled ? 'opacity-20 cursor-not-allowed' : 'hover:opacity-80'}`}
      >
        Next
      </button>
    </div>
  );
};