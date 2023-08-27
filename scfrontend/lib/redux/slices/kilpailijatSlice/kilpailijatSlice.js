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
  const kilpailijatSlice = createSlice({
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
        state.news = action.payload
        state.error = "";
        
        },
        haeKilpailijatEpäonnistui: (state, action) => {
            state.error = action.payload
        },
     
    }
  }); 

  export const {
    haeKilpailijatOnnistui,
    haeKilpailijatEpäonnistui
  } = kilpailijatSlice.actions

export default kilpailijatSlice.reducer