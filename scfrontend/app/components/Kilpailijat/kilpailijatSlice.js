import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const haeKilpailijat = createAsyncThunk('kilpailijat/kilpailijatSlice', async () => {
    try {
      const response = await fetch('http://localhost:5092/api/kilpailijat');
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  });

  //kirjoita logiikka, joka katsoo, löytyykö kilpailijat jo vai onko arvo tyhjä
  const KilpailijatSlice = createSlice({
    name: "Kilpailijat",
    initialState: {
        kilpailijat:[],
        error:""
    },
    reducers: {
        haeKilpailijatOnnistui: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.kilpailijat = action.payload
        state.error = "";
        
        },
        haeKilpailijatEpäonnistui: (state, action) => {
            state.error = action.payload
        },
     
    },
    extraReducers: (builder) => {
    builder
      .addCase(haeKilpailijat.pending, (state) => {
        state.loading = true;
      })
      .addCase(haeKilpailijat.fulfilled, (state, action) => {
        state.loading = false;
        state.kilpailijat = action.payload;
      })
      .addCase(haeKilpailijat.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

  

  export const {
    haeKilpailijatOnnistui,
    haeKilpailijatEpäonnistui
  } = KilpailijatSlice.actions

export default KilpailijatSlice