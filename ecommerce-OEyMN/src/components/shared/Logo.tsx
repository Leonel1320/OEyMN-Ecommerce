import { Link } from "react-router-dom";


export const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 text-2xl font-bold tracking-tighter transition-all"
    >
      <img
        src='/public/img/foto.png'
        alt="Logo Capibyte"
        className="w-10 h-10 object-contain"
      />
      <div className="leading-tight">
        <p className="hidden lg:block">

            ECO
            <span className="text-cyan-600">MPUTER</span>
        </p>
        <p className="flex text-4xl lg:hidden">
            <span className="-skew-x-6">E</span>
            <span className="text-cyan-600 skew-x-6">M</span>

        </p>
      </div>
    </Link>
  );
};

