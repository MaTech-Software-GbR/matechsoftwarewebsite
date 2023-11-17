import { SocialProps } from "../models/social.interface"

const SocialLink: React.FC<SocialProps> = ({
  href,
  iconClass,
  linkText
}: SocialProps) => (
  <li data-testid="social-1">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <i className={iconClass} aria-hidden="true" />
      <span>{linkText}</span>
    </a>
  </li>
)

export default SocialLink
