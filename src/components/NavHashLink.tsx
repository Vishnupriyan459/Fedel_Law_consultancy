import { Link, useLocation } from "react-router-dom";

interface NavHashLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavHashLink = ({
  to,
  className,
  children,
  onClick,
}: NavHashLinkProps) => {
  const location = useLocation();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (!to.startsWith("/#")) return;


    if (location.pathname === "/") {
      e.preventDefault();

      const id = to.replace("/#", "");

      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    onClick?.();
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={className}
    >
      {children}
    </Link>
  );
};

export default NavHashLink;