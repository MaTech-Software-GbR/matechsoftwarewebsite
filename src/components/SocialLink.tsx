import { SocialProperties } from "../models/SocialProperties.Interface"

const SocialLink: React.FC<SocialProperties> = ({
  href,
  iconClass,
  linkText
}: SocialProperties) => (
  <li data-testid="social-1">
    <a href={href} rel="noopener noreferrer" target="_blank">
      <i aria-hidden="true" className={iconClass} />
      <span>{linkText}</span>
    </a>
  </li>
)

export default SocialLink
