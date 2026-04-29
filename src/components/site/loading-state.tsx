export function LoadingState({ label = "內容載入中" }: { label?: string }) {
  return (
    <div className="rounded-[2rem] border border-[var(--border)] bg-white/76 p-8 text-center shadow-[0_24px_60px_rgba(90,67,42,0.1)]">
      <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-black/10 border-t-[var(--accent)]" />
      <p className="mt-4 text-sm text-[var(--muted)]">{label}</p>
    </div>
  );
}
