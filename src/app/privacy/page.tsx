import { redirect } from "next/navigation";

// The canonical privacy policy route is /privacy-policy. This route is kept only to
// avoid breaking any external links that may already point to /privacy.
export default function PrivacyRedirect() {
  redirect("/privacy-policy");
}
