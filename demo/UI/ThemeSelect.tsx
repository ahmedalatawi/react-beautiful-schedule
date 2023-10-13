import type { SyntheticEvent } from 'react'
import React, { useState } from 'react'
import styled from 'styled-components'
import type { EventDefaultTheme } from '../../src/components/Event/EventCard'

interface Props {
  theme: EventDefaultTheme | string | undefined
  onSelect: (theme: EventDefaultTheme) => void
}

export default function ThemeSelect({ theme = '', onSelect }: Props) {
  const [selectedTheme, setSelectedTheme] = useState(theme ?? 'blue')

  function handleSelectTheme(e: SyntheticEvent<HTMLSelectElement>) {
    const theme = e.currentTarget.value as EventDefaultTheme
    setSelectedTheme(theme)
    onSelect(theme)
  }

  return (
    <>
      <Label htmlFor='theme'>Theme</Label>
      <Select name='theme' value={selectedTheme} onChange={handleSelectTheme}>
        <option value=''>None</option>
        <option value='blue'>Blue</option>
        <option value='darkBlue'>Dark blue</option>
        <option value='lightBlue'>Light blue</option>
        <option value='green'>Green</option>
        <option value='gray'>Gray</option>
        <option value='yellow'>Yellow</option>
        <option value='purple'>Purple</option>
        {theme === 'custom' && <option value='custom'>Custom</option>}
      </Select>
    </>
  )
}

const Select = styled.select`
  cursor: pointer;
  display: block;
  border: 1px solid #a4a9c5;
  font-size: 0.8rem;
  padding: 12px 10px;
  background-color: transparent;
  color: #15a4fa;
  outline: none;
  width: 100%;
  &:active {
    border-color: #15a4fa;
  }
`

const Label = styled.label`
  margin-bottom: 10px;
  display: block;
  width: 200px;
`
