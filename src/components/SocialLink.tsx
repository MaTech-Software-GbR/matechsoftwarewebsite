import { SocialProperties } from "../models/SocialProperties.Interface"

const SocialLink: React.FC<SocialProperties> = ({
  href,
  iconClass,
  linkText
}: SocialProperties) => (
  <li data-testid="social-1">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <i className={iconClass} aria-hidden="true" />
      <span>{linkText}</span>
    </a>
  </li>
)

export default SocialLink
