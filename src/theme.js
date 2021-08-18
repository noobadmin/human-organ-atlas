import { useAppStore } from './App/stores';
import { light, dark } from './colors';

export function useTheme() {
  const isDark = useAppStore((state) => state.isDark);

  return {
    colors: isDark ? dark : light,
    breakpoints: ['37.5em', '56.25em', '75em', '112.5em'],
    fonts: {
      body: 'Open Sans, system-ui, sans-serif',
      heading: 'inherit',
      monospace: 'Menlo, monospace',
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
    fontWeights: {
      light: 300,
      body: 400,
      heading: 700,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.25,
      badge: 1.75,
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    sizes: {
      navIcon: 25,
      nav: 60,
    },
    text: {
      heading: {
        fontFamily: 'heading',
        lineHeight: 'heading',
        color: 'heading',
        fontSize: [1, 2, 2, 3],
        fontWeight: 'body',
        mb: [1, 2],
      },
      display: {
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontSize: [3, 4, 4, 5],
        fontWeight: 'light',
        mb: 3,
      },
      small: {
        fontSize: [2],
        fontWeight: 600,
        mb: 2,
      },
      caps: {
        fontSize: [0],
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        lineHeight: 'body',
      },
      badge: {
        px: 2,
        borderRadius: 16,
        bg: 'foreground',
        color: 'badge',
        fontSize: 0,
        lineHeight: 'badge',
      },
    },
    variants: {
      avatar: {
        width: 'avatar',
        height: 'avatar',
        borderRadius: 'circle',
      },
      card: {
        p: [1, 2, 3, 4],
        bg: 'middleground',
        lineHeight: 'body',
      },
      accentedCard: {
        p: [1, 1, 2, 3],
        my: [1, 2, 3, 4],
        lineHeight: 'body',
        bg: 'foreground',
      },
      keyword: {
        p: [1],
        mr: [1],
        my: [1],
        bg: 'foreground',
      },
      link: {
        color: 'primary',
        textDecoration: 'none',
        ':hover, :focus, .active': {
          color: 'text',
        },
        ':hover': {
          textDecoration: 'underline',
        },
      },
      nav: {
        fontSize: 1,
        fontWeight: 'bold',
        display: 'inline-block',
        p: 2,
        color: 'inherit',
        textDecoration: 'none',
        ':hover,:focus,.active': {
          color: 'primary',
        },
      },
      navIcon: {
        width: 'navIcon',
        height: 'navIcon',
      },
    },
    buttons: {
      base: {
        display: 'flex',
        flex: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
        px: 0,
        py: 0,
        bg: 'transparent',
        border: 'none',
        borderRadius: 8,
        color: 'inherit',
        fontSize: 'inherit',
        cursor: 'pointer',
        outlineOffset: 2,
        ':disabled': {
          pointerEvents: 'none',
          cursor: 'default',
          opacity: 0.2,
        },
        ':focus-visible': {
          outlineColor: 'currentColor',
        },
      },
      primary: {
        variant: 'buttons.base',
        px: 3,
        py: 2,
        fontSize: [1, 1, 2],
        fontWeight: 'bold',
        color: 'white',
        bg: 'foreground',
        ':hover': {
          color: 'black',
          bg: 'white',
        },
      },
      action: {
        variant: 'buttons.base',
        p: 2,
        ml: 2,
        border: '1px solid transparent',
        fontSize: 2,
        ':hover': {
          bg: 'background',
          color: 'white',
          boxShadow: '0 0 2px background',
        },
      },
    },
    styles: {
      root: {
        fontFamily: 'body',
        fontWeight: 'body',
        lineHeight: 'body',
      },
    },
    forms: {
      input: {
        p: 1,
        bg: 'highlight',
        borderRadius: 4,
        borderColor: 'secondary',
      },
      switch: {
        p: '2px',
        background: 'white',
        border: 'none',
        cursor: 'pointer',
        '&[aria-checked=true]': {
          bg: 'pink',
        },
        ':focus': {
          boxShadow: 'none',
        },
        thumb: {
          border: 'none',
          width: 20,
          height: 20,
          mt: '0',
          ml: '0',
        },
      },
    },
  };
}
