import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-green-600 py-4 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <h1 className="text-3xl font-bold sm:text-4xl">Italian Food</h1>
        <nav className="space-x-6 text-lg sm:text-xl">
          <Link href="#">
            <p className="hover:underline">Home</p>
          </Link>
          <Link href="#">
            <p className="hover:underline">About</p>
          </Link>
          <Link href="#">
            <p className="hover:underline">Menu</p>
          </Link>
          <Link href="#">
            <p className="hover:underline">Shop</p>
          </Link>
          <Link href="#">
            <p className="hover:underline">Contact</p>
          </Link>
        </nav>
      </div>
    </header>
  );
}
