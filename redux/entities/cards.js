import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
    cards: [
        {
            id: 1,
            name: 'Banamex CitiRewards'
        },
        {
            id: 2,
            name: "Banamex Oro"
        }
    ],
    isLoadingCards: false,
    errorCards: "",
}

// export const dolarPeso = createAsyncThunk(
//     'asyncReducer/dolarPeso',
//     async (dolar, thunkAPI) => {
//         try{
//             const response = await axios.get(`https://api.frankfurter.app/latest?amount=${dolar}&from=USD&to=MXN`);
    
//             return response.data

//         }catch(error){
//             return thunkAPI.rejectWithValue(error.response.data.message)
//         }
//     });

export const cardsReducer = createSlice({
    name: "cardsReducer",
    initialState,
    reducers: {
        setCards: (state, action) => {
            state.cards = action.payload
        },
        clearInfoCards: (state) => {
            state.cards ={};
            state.isLoading= false;
            state.error= "";
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(dolarPeso.pending, (state) => {
    //         state.isLoading = true;
    //     });
    //     builder.addCase(dolarPeso.fulfilled, (state, action) => {
    //         state.isLoading = false;
    //         state.error = "";
    //         state.message = action.payload.rates.MXN;
    //     });
    //     builder.addCase(dolarPeso.rejected, (state, action) => {
    //         state.isLoading = false;
    //         state.message = "";
    //         state.error = action.payload;
    //         // state.error = action.error.message;
    //     });
    // }
});



export const { clearInfoCards, setCards } = cardsReducer.actions;
export default cardsReducer.reducer;