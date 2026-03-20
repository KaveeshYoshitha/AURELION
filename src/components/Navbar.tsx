import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-6 left-0 z-20 w-full px-4 md:left-1/2 md:top-8 md:w-auto md:-translate-x-1/2 md:px-0 overflow-hidden ">
        {/* Mobile */}
        <div className="relative md:hidden">
          {isOpen && (
            <button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-10 cursor-default bg-black/60"
              onClick={() => setIsOpen(false)}
            />
          )}

          <div className="flex justify-end">
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative z-20 inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/40 bg-black/40 backdrop-blur transition hover:border-white/70"
            >
              <span className="sr-only">Menu</span>
              <span
                aria-hidden="true"
                className={
                  "absolute block h-0.5 w-5 bg-white transition duration-200 " +
                  (isOpen
                    ? "translate-y-0 rotate-45"
                    : "-translate-y-2 rotate-0")
                }
              />
              <span
                aria-hidden="true"
                className={
                  "absolute block h-0.5 w-5 bg-white transition duration-200 " +
                  (isOpen ? "opacity-0" : "opacity-100")
                }
              />
              <span
                aria-hidden="true"
                className={
                  "absolute block h-0.5 w-5 bg-white transition duration-200 " +
                  (isOpen
                    ? "translate-y-0 -rotate-45"
                    : "translate-y-2 rotate-0")
                }
              />
            </button>
          </div>

          <div
            id="mobile-nav"
            className={
              "absolute right-0 z-20 mt-3 min-w-52 origin-top-right rounded-lg border border-white/20 bg-black/90 p-3 backdrop-blur transition duration-200 " +
              (isOpen
                ? "scale-100 opacity-100"
                : "pointer-events-none scale-95 opacity-0")
            }
          >
            <div className="flex flex-col gap-1 text-sm uppercase tracking-wide font-inter">
              <a
                className="rounded-md px-3 py-2 hover:bg-white/10"
                href="#about"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                className="rounded-md px-3 py-2 hover:bg-white/10"
                href="#collection"
                onClick={() => setIsOpen(false)}
              >
                Collection
              </a>
              <a
                className="rounded-md px-3 py-2 hover:bg-white/10"
                href="#contact"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 text-sm uppercase tracking-wide font-inter">
          <a className="hover:opacity-80" href="#about">
            About
          </a>
          <a className="hover:opacity-80" href="#collection">
            Collection
          </a>
          <a className="hover:opacity-80" href="#contact">
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
