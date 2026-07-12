interface HostSectionProps {
  hostName: string;
  hostYears: number;
}

export const HostSection = ({ hostName, hostYears }: HostSectionProps) => {
  return (
    <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-zinc-100">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-zinc-300" aria-hidden="true" />
        <div>
          <p className="text-base font-semibold text-zinc-900">Anfitrión: {hostName}</p>
          <p className="text-sm text-zinc-600">{hostYears} años como anfitrión</p>
        </div>
      </div>
    </section>
  );
};
