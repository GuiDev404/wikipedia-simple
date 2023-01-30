import { useBookmarkStore } from '../hooks/useBookmarkStore'

import Button from './Button'
import { SavedIcon } from './Icons'

const SaveButton = ({ page } = {}) => {
  const toggleSave = useBookmarkStore(state => state.toggleSave)
  const bookmarks = useBookmarkStore(state => state.bookmarks)

  const isSaved = bookmarks.some(p => p?.pageid === page.pageid)

  const handleToggle = () => toggleSave(page)

  return (
    <Button
      onClick={handleToggle}
      className='w-8 h-8 flex justify-center items-center'
    >
      <SavedIcon
        width={20}
        height={20}
        fillPath={isSaved ? 'currentColor' : 'none'}
      />
    </Button>
  )
}

export default SaveButton
