export function Mark({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M16 1.2 18.5 13.5 30.8 16 18.5 18.5 16 30.8 13.5 18.5 1.2 16 13.5 13.5Z"
      />
    </svg>
  );
}
