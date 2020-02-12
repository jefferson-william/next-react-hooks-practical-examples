module.exports = [
  {
    name: 'users',
    pattern: '/users',
    slug: 'users',
  },
  {
    name: 'users/[name]',
    pattern: '/users/:name',
    slug: 'users-name',
  },
  {
    name: 'primary',
    pattern: `/(primaries|landing-pages)`,
    slug: 'primary',
  },
  {
    name: 'secondary/[foo]',
    pattern: `/secondary/:foo(bar|baz)+`,
    slug: 'secondary-foo',
  },
  {
    name: 'numbers/[numbers]',
    pattern: `/numbers/:numbers(\d{3})`,
    slug: 'numbers-numbers',
  },
]
