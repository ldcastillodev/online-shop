import './styles.css'

export const parameters = {
  controls: { expanded: true },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#FFFFFF',
      },
      {
        name: 'dark',
        value: '#000000',
      },
    ],
  },
  viewport: {
    viewports: {
      mobile: {
        name: 'Mobile (iPhone XS)',
        styles: {
          width: '375px',
          height: '812px',
        },
      },
      tablet: {
        name: 'Tablet (iPad)',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      desktop: {
        name: 'Desktop (MacBook Pro)',
        styles: {
          width: '1440px',
          height: '900px',
        },
      },
    },
  },
}
