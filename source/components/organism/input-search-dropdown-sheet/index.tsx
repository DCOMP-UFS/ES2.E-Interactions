/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useMemo, useState } from 'react'
import { Searchbar } from 'react-native-paper'

import ListDropdown from '@/components/molecule/list-dropdown'

import { Container } from './styles'

import useDebounce from '@/hooks/use-debounce'

const SUM_MIN_ITEMS = 10

type Options = {
  name: string
  rxcui: string
}

type Props = {
  items: Options[]
  onChangeSelected: (item: Options) => void
  selected: Options
}

export type Data = Options & {
  selected: boolean
  active: boolean
}

type RefProps = {
  current: InputSearchDropdownProps
}

export type InputSearchDropdownProps = {
  onToggleSelection: (items: Options) => void
  onRemoveSelection: () => void
}

const InputSearchDropdownSheet = React.forwardRef(
  ({ items, onChangeSelected, selected }: Props, ref?: RefProps) => {
    const [data, setData] = useState<Data[]>(() =>
      items.map((item) => ({ ...item, selected: false, active: true }))
    )
    const [itemsPerPage, setItemsPerPage] = useState(SUM_MIN_ITEMS)

    const [focusedSearch, setFocusedSearch] = useState(false)
    const [focusedKeyboard, setFocusedKeyboard] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const debounce = useDebounce()

    const focused = useMemo(() => {
      if (focusedKeyboard || searchQuery.trim().length > 0 || focusedSearch) {
        return true
      }
      return false
    }, [focusedKeyboard, searchQuery, focusedSearch])

    const onChangeSearch = (query: string) => setSearchQuery(query)

    const sliceData = useMemo(() => {
      if (searchQuery.trim().length === 0) {
        return data.slice(0, itemsPerPage)
      }

      return data
        .filter((item) => {
          const itemName = item.name.toLowerCase()
          const query = searchQuery.toLowerCase()
          return itemName.includes(query)
        })
        .slice(0, itemsPerPage)
    }, [data, searchQuery, itemsPerPage])

    const onToggleSelection = (item: Data) => {
      onChangeSelected?.(item)
      setSearchQuery('')
    }

    const onRemoveSelection = () => {
      onChangeSelected?.(null)
    }

    const loadData = async () => {
      if (!(sliceData.length < itemsPerPage)) {
        await new Promise((resolve) => setTimeout(resolve, 50))
        setItemsPerPage(itemsPerPage + SUM_MIN_ITEMS)
      }
    }

    ref.current = {
      onToggleSelection,
      onRemoveSelection,
    }

    const onBlurDebounce = () => {
      debounce(() => {
        setFocusedSearch(false)
      }, 200)
    }

    return (
      <Container>
        <Searchbar
          onFocus={() => setFocusedSearch(true)}
          onBlur={onBlurDebounce}
          placeholder="Procure o Medicamento"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{
            zIndex: 10,
          }}
        />
        <ListDropdown
          visible
          onToggleSelection={onToggleSelection}
          loadData={loadData}
          sliceData={sliceData}
        />
      </Container>
    )
  }
)

export default InputSearchDropdownSheet
