import { IconButton } from "./icon-button";

interface HeaderDesktopActionsProps {
  showHostText: boolean;
}

export const HeaderDesktopActions = ({ showHostText }: HeaderDesktopActionsProps) => {
  return (
    <div className="flex items-center gap-2">
      {showHostText ? (
        <span className="mr-2 text-sm font-medium text-zinc-800">Conviértete en anfitrión</span>
      ) : null}
      <IconButton label="Seleccionar idioma">
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      </IconButton>

      <IconButton label="Menu de usuario">
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </IconButton>
    </div>
  );
};
