import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 text-rose-600" aria-label="Ir al inicio">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100">
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M12 3c-1.7 0-3 1.5-3 3.3 0 2.6 3 6.1 3 6.1s3-3.5 3-6.1C15 4.5 13.7 3 12 3Z" />
          <path d="M7.8 13.4A4.7 4.7 0 0 0 4 18a4 4 0 0 0 4.1 4c1.8 0 3-1 3.9-2.1.8 1.1 2 2.1 3.8 2.1A4 4 0 0 0 20 18a4.7 4.7 0 0 0-3.8-4.6" />
        </svg>
      </span>
      <span className="hidden text-2xl font-semibold tracking-tight sm:inline">airbnb</span>
    </Link>
  );
};
