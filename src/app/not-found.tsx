import { EmptyState } from "@/components/site/empty-state";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <EmptyState
        title="找不到這個頁面"
        description="你要找的內容可能已調整，或目前尚未公開。你可以先回到首頁繼續瀏覽課程與文章。"
        actionHref="/"
        actionLabel="回到首頁"
      />
    </main>
  );
}
