import { socialsMedia } from "@/Props/SocialMedia";

export default function SocialMedia() {
  return (
    <div className="flex gap-4">
      {socialsMedia.map((socialMedia) => (
        <a href={socialMedia.Link} key={socialMedia.Name} className="hover:text-aquamarine-400 transition">
          {socialMedia.Icon}
        </a>
      ))}
    </div>
  );
}
