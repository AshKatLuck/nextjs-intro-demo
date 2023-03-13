import { useRouter } from "next/router";
function NewsDetailsPage() {
  const router = useRouter();
  const newsId = router.query.newsId;
  console.log(newsId);
  return <h1>News Details Page: {newsId}</h1>;
}

export default NewsDetailsPage;
