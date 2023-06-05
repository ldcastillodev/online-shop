import { PortableTextComponents } from '@portabletext/react'

export const textBody: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-14 lg:text-16 text-neutrals-700 mb-5">{children}</p>,
  },
}
