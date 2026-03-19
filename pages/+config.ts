import type { Config } from "vike/types";
import vikeReact from "vike-react/config";

export default {
  lang: "de",
  stream: true,
  extends: [vikeReact],
  prerender: true,
} satisfies Config;
