
import { ArrowLeft } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router";
import { ModeToggle } from "@/components/mode-toggle";

const Layout = () => {
  const { pathname } = useLocation();
  const atRoot = pathname === "/";

  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
          {atRoot ? (
            <Link to="/" className="font-semibold tracking-tight">
              Lab Activity 11: Posts with TanStack Query & React Router 6
            </Link>
          ) : (
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              All posts
            </Link>
          )}

          <ModeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;