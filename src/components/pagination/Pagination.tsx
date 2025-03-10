import { JSX } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowLeft, Ellipsis } from "lucide-react";

export interface PaginationProps {
  page: number;
  paginationCount: number;
  handleChange: (value: number) => void;
  className?: string;
}

function Pagination({
  page,
  paginationCount,
  handleChange,
  className,
}: PaginationProps) {
  const handlePrev = () => {
    if (page > 1) {
      handleChange(page - 1);
    }
  };

  const handleNext = () => {
    if (page < paginationCount) {
      handleChange(page + 1);
    }
  };
  const renderButton = (pageNumber: number, isActive: boolean) => (
    <button
      key={pageNumber}
      onClick={() => handleChange(pageNumber)}
      className={cn(
        "w-10 border-t-2 border-transparent py-3.5 text-[#8C8B98]",
        {
          "border-[#2713c2] text-[#2713c2]": isActive,
        }
      )}
    >
      {pageNumber}
    </button>
  );

  const PaginationItems = (paginationCount: number, page: number) => {
    const items: JSX.Element[] = [];

    if (paginationCount <= 5) {
      // Show all pages if paginationCount is 5 or less
      for (let i = 1; i <= paginationCount; i++) {
        items.push(renderButton(i, page === i));
      }
    } else if (page < 5) {
      // Show pages 1 to 5 initially, with an ellipsis and the last page
      for (let i = 1; i <= 5; i++) {
        items.push(renderButton(i, page === i));
      }
      items.push(
        <span key="start-ellipsis">
          <Ellipsis />
        </span>
      );
      items.push(renderButton(paginationCount, page === paginationCount));
    } else if (page >= 5 && page < paginationCount - 3) {
      // Show 1, ellipsis, pages around current page, ellipsis, and last page
      items.push(renderButton(1, false));
      items.push(
        <span key="start-ellipsis">
          <Ellipsis />
        </span>
      );
      for (let i = page - 1; i <= page + 1; i++) {
        items.push(renderButton(i, page === i));
      }
      items.push(
        <span key="end-ellipsis">
          <Ellipsis />
        </span>
      );
      items.push(renderButton(paginationCount, page === paginationCount));
    } else {
      // Show 1, ellipsis, and the last 5 pages when nearing the end
      items.push(renderButton(1, false));
      items.push(
        <span key="start-ellipsis">
          <Ellipsis />
        </span>
      );
      for (let i = paginationCount - 4; i <= paginationCount; i++) {
        items.push(renderButton(i, page === i));
      }
    }

    return items;
  };
  return (
    <>
      <div className="md:item-center hidden md:flex md:gap-x-4">
        <div
          className={cn(
            "flex w-full items-center justify-center gap-8 rounded-b-lg border-t bg-white",
            className
          )}
        >
          <button
            type="button"
            className="py-3.5 text-[#8C8B98] disabled:cursor-not-allowed disabled:text-black/30"
            onClick={handlePrev}
            aria-label="Go to previous page"
            disabled={page === 1}
          >
            <ArrowLeft size="20" />
          </button>
          {PaginationItems(paginationCount, page)}
          <button
            type="button"
            className="py-3.5 text-[#8C8B98] disabled:cursor-not-allowed disabled:text-black/30 disabled:opacity-100"
            onClick={handleNext}
            aria-label="Go to next page"
            disabled={page === paginationCount}
          >
            <ArrowRight size="20" />
          </button>
        </div>
      </div>

      {/* mobile pagination */}
      <div
        className={cn(
          "-mt-2 flex items-center justify-around rounded-b-lg bg-white py-4 text-gray-700 md:hidden",
          className
        )}
      >
        <button
          type="button"
          disabled={page === 1}
          onClick={() => handleChange(page - 1)}
          aria-label="Go to previous page"
          className="rounded-md border px-3 py-2"
        >
          Pervious
        </button>
        <p>
          Page {page} of {paginationCount}
        </p>
        <button
          type="button"
          disabled={page === paginationCount}
          aria-label="Go to next page"
          onClick={() => handleChange(page + 1)}
          className="rounded-md border px-3 py-2"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Pagination;
