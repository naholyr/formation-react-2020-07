function start({
  host = '127.0.0.1',
  port = 80,
  truc,
} = {}) {
  const host = options.host || '127.0.0.1';
  const port = options.port || 80;
  const truc = options.truc;
  ...
}

start()

// Object

const object = { a: 1, b: 2, c: 3 };

const a = object.a
const b = object.b
const { a, b } = object

const x = object.a
const y = object.b
const { a: x, b: y } = object

const a = object.a !== undefined ? object.a : 42;
const b = object.b !== undefined ? object.b : true;
const { a = 42, b = true } = object

const a = (object.a !== undefined && object.a !== null) ? object.a : 42;
const b = (object.b !== undefined && object.b !== null) ? object.b : true;
const a = object.a ?? 42;
const b = object.b ?? true

// Array

const array = [1, 2, 3]

const [a, b] = array
