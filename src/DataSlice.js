const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

const getData = createAsyncThunk("getData", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(
      "https://simple-posts-server-wine.vercel.app/posts"
    );
    return response.data; 
  } catch (error) {
   
    return rejectWithValue(error.response.data);
  }
});

const DataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
    .addCase(getData.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getData.fulfilled, (state,action) => {
      state.isLoading = false,
     state.data =  action.payload 
    })
    .addCase(getData.rejected, (state,action) => {
      state.isLoading = false,
     state.error =  action.payload 
    })


  },
});
export {getData}
export default DataSlice.reducer;