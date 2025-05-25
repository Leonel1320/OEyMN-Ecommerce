import { Link } from "react-router-dom";
import foto from "../../assets/images/foto.png";

export const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 text-2xl font-bold tracking-tighter transition-all"
    >
      <img
        src={foto}
        alt="Logo Capibyte"
        className="w-10 h-10 object-contain"
      />
      <div className="leading-tight">
        <p className="hidden lg:block">
          Componentes
          <span className="text-cyan-600">PC</span>
        </p>
        <p className="flex text-4xl lg:hidden">
          <span className="-skew-x-6">C</span>
          <span className="text-cyan-600 skew-x-6">P</span>
        </p>
      </div>
    </Link>
  );
};

