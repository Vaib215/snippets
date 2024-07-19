import { updateThumbnail } from "@/db/queries";
import axios from "axios";

export const captureAndStoreThumbnail = async (id: number | undefined) => {
  if (!id) return;
  // Capture Thumbnail
  const screenshotConfig = {
    url: `https://snip.vaib.live/snippet/${id}?preview=true&userAgent=screenshot`,
    screenshot: {
      element: "#secret",
    },
    animations: false,
    filter: "screenshot",
    meta: false,
    colorScheme: "dark",
    "viewport.width": 600,
    "viewport.height": 475,
    "viewport.isMobile": true,
    "viewport.deviceScaleFactor": 1,
  };
  const { data: screenshotData } = await axios.get("https://api.microlink.io", {
    params: screenshotConfig,
  });
  const screenshotURL = screenshotData.data.screenshot.url;
  const form = new FormData();
  form.append("url", screenshotURL);
  const result = await axios.post(
    "https://beeimg.com/api/upload/url/json/",
    form
  );
  await updateThumbnail(id, result.data.url);
};
