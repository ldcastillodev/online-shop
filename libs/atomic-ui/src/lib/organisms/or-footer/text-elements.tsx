import { PortableTextComponents } from '@portabletext/react'

export const textElements: PortableTextComponents = {
  marks: {
    strong: ({ children }) => (
      <strong className="group-first:mt-0 inline-block mt-4 text-16 leading-1.5">{children}</strong>
    ),
    em: ({ children }) => <em className="group-first:mt-0 inline-block mt-4 text-16 leading-1.5">{children}</em>,
  },
  block: {
    normal: ({ children }) => <p className="text-14 leading-1.5 group">{children}</p>,
  },
}
