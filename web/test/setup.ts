import { vi } from 'vitest'

globalThis.fetch = vi.fn().mockResolvedValue({
  json: () => ({})
})