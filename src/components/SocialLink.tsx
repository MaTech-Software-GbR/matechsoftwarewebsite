const SocialLink: React.FC<{
  href: string
  iconClass: string
  linkText: string
}> = ({ href, iconClass, linkText }) => (
  <li data-testid="social-1">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <i className={iconClass} aria-hidden="true" />
      <span>{linkText}</span>
    </a>
  </li>
)

export default SocialLink
