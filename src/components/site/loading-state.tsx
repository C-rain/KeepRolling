export function LoadingState({ label = "內容載入中" }: { label?: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center">
      <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-white/12 border-t-[var(--accent)]" />
      <p className="mt-4 text-sm text-white/68">{label}</p>
    </div>
  );
}
