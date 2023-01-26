
import { useBookmarkStore } from '../hooks/useBookmarkStore'
// import useStorage from '../hooks/useStorage'
// import { KEY_GUARDADOS } from '../utils/localStorage'
import Button from './Button'
import { SavedIcon } from './Icons'

const SaveButton = ({ page } = {}) => {
  const toggleSave = useBookmarkStore(state => state.toggleSave)
  const bookmarks = useBookmarkStore(state => state.bookmarks)
  const isSaved = bookmarks.some(p => p?.pageid === page.pageid)

  // const [bookmarks, addToBookmarks] = useStorage(KEY_GUARDADOS, [])

  // const toggleSave = () => {
  //   addToBookmarks(isSaved
  //     ? bookmarks.filter(p => p.pageid !== page.pageid)
  //     : [page, ...bookmarks]
  //   )
  // }

  return (
    <Button
      onClick={() => toggleSave(page)}
      styles='w-8 h-8 flex justify-center items-center'
      leftIcon={<SavedIcon width={20} height={20} fillPath={isSaved ? 'currentColor' : 'none'} />}
    />
  )
}

export default SaveButton
