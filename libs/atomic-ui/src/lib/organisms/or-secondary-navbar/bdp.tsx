import { AtAnchorLinks, AtAnchorLinksProps, AtButton, AtButtonProps } from '../../atoms'

export interface OrSecondaryNavbarBdpProps extends AtAnchorLinksProps {
  button?: AtButtonProps
}

/** Links for sections inside the Building Detail Page, **visible only on desktop** */
export const OrSecondaryNavbarBdp = ({ button, links }: OrSecondaryNavbarBdpProps) => (
  <div className="hidden lg:flex w-full h-[5.9375rem] gap-16 items-center bg-neutrals-white px-[10.4375rem] sticky top-0">
    <AtAnchorLinks links={links} />
    {button && <AtButton {...button} />}
  </div>
)
