export const Incoming = {
  baseStyle: {
    p: 3,
    py: 2,
    bg: 'gray.200',
    w: 'fit-content',
  },
  variants: {
    normal: {
      borderRadius: '18px',
    },
    top: {
      borderRadius: '18px',
      borderBottomLeftRadius: '3px',
    },
    mid: {
      borderRadius: '18px',
      borderBottomLeftRadius: '3px',
      borderTopLeftRadius: '3px',
    },
    bot: {
      borderRadius: '18px',
      borderTopLeftRadius: '3px',
    },

  },
  defaultProps: {
    variant: 'normal',
  },

};
export const Outcoming = {
  baseStyle: {
    p: 3,
    py: 2,
    bg: 'purple.500',
    color: 'white',
    w: 'fit-content',
    maxW: '70%',
  },
  variants: {
    normal: {
      borderRadius: '18px',
    },
    top: {
      borderRadius: '18px',
      borderBottomRightRadius: '3px',
    },
    mid: {
      borderRadius: '18px',
      borderBottomRightRadius: '3px',
      borderTopRightRadius: '3px',
    },
    bot: {
      borderRadius: '18px',
      borderTopRightRadius: '3px',
    },

  },
  defaultProps: {
    variant: 'normal',
  },
};
