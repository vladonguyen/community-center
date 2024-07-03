import Link from "next/link";

export const ButtonLink = ({ destination, label, fullWidth }) => {
    const newDestination = destination.toString();
    
  return (
    <Link
      href={destination}
      className={`btn${fullWidth ? " w-full text-center" : ""}`}
    >
      {label}
    </Link>
  );
};