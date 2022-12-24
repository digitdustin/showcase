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

//settings anim is used for the settings panel, should stagger the children
export const settingsAnim = {
  hidden: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
      staggerChildren: 0.15,
    },
  },
};

export const appearAnim = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
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
