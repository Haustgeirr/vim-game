function handleA() {
  console.log('a');
}

function handleB() {
  console.log('b');
}

const keyMap = [
  { key: 'ArrowUp', keyFn: handleA },
  { key: 'ArrowDown', keyFn: handleB },
];

function initInputBindings(event: KeyboardEvent) {
  keyMap.find(({ key, keyFn }) => {
    if (event.key === key) {
      keyFn();
      return true;
    }
  });
}

export { initInputBindings };
