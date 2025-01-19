import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Signed out successfully",
        duration: 2000,
      });
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
      toast({
        title: "Error signing out",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  const navItems = [
    { name: "Services", href: "/services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="fixed w-full z-50 flex justify-center items-center px-4 py-4">
      <div className="max-w-4xl w-full mx-auto">
        <div className="backdrop-blur-md bg-emerald-950/20 rounded-full border border-emerald-600/20 shadow-lg">
          <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                  WireLab Solution
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex md:items-center md:space-x-8">
                <div className="flex items-center space-x-8">
                  {navItems.map((item) => (
                    item.href.startsWith('/') ? (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-emerald-100/90 hover:text-emerald-400 transition-colors text-sm font-medium"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleClick(e, item.href)}
                        className="text-emerald-100/90 hover:text-emerald-400 transition-colors text-sm font-medium"
                      >
                        {item.name}
                      </a>
                    )
                  ))}
                </div>
                {user ? (
                  <Button
                    variant="outline"
                    onClick={handleLogout}
                    className="bg-emerald-950/40 text-emerald-100 border-emerald-600/30 hover:bg-emerald-900/50"
                  >
                    Sign out
                  </Button>
                ) : (
                  <Button
                    variant="default"
                    onClick={() => navigate("/login")}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    Sign in
                  </Button>
                )}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-emerald-100 hover:text-emerald-400 transition-colors"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <div className="backdrop-blur-md bg-emerald-950/90 rounded-lg border border-emerald-600/20 shadow-lg px-4 py-3 space-y-2">
              {navItems.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-emerald-100/90 hover:text-emerald-400 transition-colors text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className="block px-3 py-2 text-emerald-100/90 hover:text-emerald-400 transition-colors text-sm font-medium"
                  >
                    {item.name}
                  </a>
                )
              ))}
              {user ? (
                <Button
                  variant="outline"
                  onClick={handleLogout}
                  className="w-full mt-4 bg-emerald-950/40 text-emerald-100 border-emerald-600/30 hover:bg-emerald-900/50"
                >
                  Sign out
                </Button>
              ) : (
                <Button
                  variant="default"
                  onClick={() => navigate("/login")}
                  className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  Sign in
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};