import { LoadingState } from "@/components/site/loading-state";

export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <LoadingState label="頁面載入中" />
    </main>
  );
}
