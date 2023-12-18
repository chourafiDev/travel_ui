import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlinks = () => {
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const taretId = href.replace(/.*\#/, "");
    const elem = document.getElementById(taretId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    // Update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  return (
    <ul className="hidden lg:flex items-center gap-16">
      <li className="text-dark dark:text-white font-medium text-lg">
        <Link href="/" className="link">
          Home
        </Link>
      </li>
      <li className="text-dark dark:text-white font-medium text-lg">
        <Link href="/about" className="link">
          About
        </Link>
      </li>

      {pathname !== "/morocco" &&
        pathname !== "/asia" &&
        pathname !== "/south-africa" &&
        pathname !== "/western-europe" &&
        pathname !== "/america" &&
        pathname !== "/faq" &&
        pathname !== "/about" &&
        pathname !== "/career" &&
        pathname !== "/privacy-policy" && (
          <li className="text-dark dark:text-white font-medium text-lg">
            <Link href="/#services" onClick={handleScroll} className="link">
              Our Services
            </Link>
          </li>
        )}
    </ul>
  );
};

export default Navlinks;
