import { AtLink, AtLinkTarget, AtLinkType } from '../../../atoms'

export const TermsText = ({ className = '', privacyLink = '' }) => (
  <p className={`${className} text-neutrals-700 text-14 leading-1.5`}>
    By sending an inquiry, you agree to our terms of service, including our{' '}
    <AtLink
      type={AtLinkType.INLINE}
      title="privacy policy"
      className="h-fit"
      actionTarget={privacyLink}
      target={AtLinkTarget.BLANK}
    />
    .
  </p>
)
