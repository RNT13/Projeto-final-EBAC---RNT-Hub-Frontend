import { createSlice } from '@reduxjs/toolkit'

interface renderSectionSlice {
  activeSection: SectionType
}

const initialState: renderSectionSlice = {
  activeSection: 'feed'
}

const renderSectionSlice = createSlice({
  name: 'renderSection',
  initialState,
  reducers: {
    setRenderSection: (state, action) => {
      state.activeSection = action.payload
    }
  }
})

export const { setRenderSection } = renderSectionSlice.actions

export default renderSectionSlice.reducer
