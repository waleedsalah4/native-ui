import Link from "next/link";

function BasicFooter() {
  return (
    <footer className="mb-2 flex items-center justify-between bg-black/10 px-4 py-2 text-sm text-gray-500 md:px-6 dark:bg-gray-200">
      <div className="flex items-center gap-x-2 md:gap-x-6">
        <Link href="#">About</Link>
        <Link href="#">Privacy Policy</Link>
      </div>
      <div>
        &copy;
        {new Date().getFullYear()} Company, Inc.
      </div>
    </footer>
  );
}

export default BasicFooter;
