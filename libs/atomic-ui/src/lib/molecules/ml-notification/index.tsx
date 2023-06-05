import { PortableText, PortableTextProps } from '@portabletext/react'
import { AtLink, AtLinkProps } from '../../atoms'
import { variants } from './variants'

export type NotificationType = 'informative' | 'negative' | 'positive'

export interface MlNotificationProps {
  title: string
  body: PortableTextProps['value']
  link?: AtLinkProps
  type: NotificationType
  className?: string
}

export const MlNotification = ({ body, link, title, type, className = '' }: MlNotificationProps) => {
  const { bgColor, Icon, textColor } = variants[type]

  return (
    <div className={`${bgColor} p-6 rounded-4 flex flex-col lg:flex-row gap-4 ${className}`}>
      <div className="shrink-0 flex justify-center items-center w-12 h-12 bg-neutrals-white rounded-full">
        <Icon className={`${textColor} w-6 h-6`} />
      </div>
      <div>
        <p className={`${textColor} my-2 font-bold text-20 leading-1.5`}>{title}</p>
        <div className="text-neutrals-800 leading-1.5">
          <PortableText value={body} />
        </div>
        {link && (
          <div className="mt-4">
            <AtLink {...link} />
          </div>
        )}
      </div>
    </div>
  )
}
