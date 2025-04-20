import adapter from '@sveltejs/adapter-auto' // or @sveltejs/adapter-static, @sveltejs/adapter-node

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
}

export default config
