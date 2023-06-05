export const simpleBlock = (string = 'Helper text') => [
  {
    _key: '8a1fd7b434db11443bf33bc3a2428b64',
    _type: 'block',
    children: [
      {
        _key: 'v6xmjPqs',
        _type: 'span',
        marks: [],
        text: string,
      },
    ],
    markDefs: [],
    style: 'normal',
  },
]

export const hintContent = simpleBlock()

export const errorContent = simpleBlock('Error text')

export const bodyContent = simpleBlock(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu gravida sit id ultrices. In malesuada a id suscipit ut. Vestibulum tellus aliquet ac posuere. Donec leo congue vitae mauris. Sit purus a duis a sagittis mauris.'
)
