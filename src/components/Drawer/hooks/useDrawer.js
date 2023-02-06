import { useContext } from 'react'
import { DrawerContext } from '../context/DrawerContext'

export function useDrawer () {
  return useContext(DrawerContext)
}
