import { getBlogSeo } from "./seo";

export default function title() {
  return getBlogSeo().title;
}