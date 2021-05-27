export const useRecord = (init) => {
  return {
    current: init,
    undo: () => {},
    redo: () => {},
    record: () => {}
  };
};

