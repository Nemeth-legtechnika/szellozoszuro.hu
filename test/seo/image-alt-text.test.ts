import blogPosts from '@/assets/data/blogs.json'

describe('Blog image alt text', () => {
  it('every blog entry has a non-empty alt field', () => {
    for (const post of blogPosts) {
      expect(post.alt, `Blog id=${post.id} ("${post.title}") is missing alt`).toBeTruthy()
      expect(typeof post.alt).toBe('string')
      expect(post.alt.length).toBeGreaterThan(0)
    }
  })

  it('every blog entry has a non-empty altDe field', () => {
    for (const post of blogPosts) {
      expect(post.altDe, `Blog id=${post.id} ("${post.title}") is missing altDe`).toBeTruthy()
      expect(typeof post.altDe).toBe('string')
      expect(post.altDe.length).toBeGreaterThan(0)
    }
  })
})
