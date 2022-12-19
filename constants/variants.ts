export const tabAnim = {
  hide: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "linear",
      when: "beforeChildren",
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "linear",
      when: "beforeChildren",
    },
  },
};

export const appearAnim = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "linear",
    },
  },
};

export const heightAnim = {
  open: {
    opacity: 1,
    height: "auto",
  },
  collapsed: { opacity: 0, height: 0 },
};
