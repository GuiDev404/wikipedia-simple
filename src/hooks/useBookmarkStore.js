import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const KEY_GUARDADOS = 'GUARDADOS'

export const useBookmarkStore = create(
  persist(
    (set, get) => ({
      bookmarks: [],
      toggleSave: (page) => {
        const isSaved = get().bookmarks.some(p => p.pageid === page.pageid)

        set(prevState => {
          // const isSaved = [...prevState.bookmarks].some(p => p.pageid === page.pageid)

          return {
            bookmarks: isSaved
              ? prevState.bookmarks.filter(p => p.pageid !== page.pageid)
              : [page, ...prevState.bookmarks]
          }
        })
      }
    }),
    {
      name: KEY_GUARDADOS
    }
  )
)
