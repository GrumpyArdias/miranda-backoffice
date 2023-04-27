import {
  createAsyncThunk,
  createSlice,
  isAnyOf,
  isAllOf,
} from "@reduxjs/toolkit";
import ContactsArray from "../data/coments.json";
import { CommentType, ICommentState, UpdateComment } from "../@types/contacts";
import { v4 as uuid } from "uuid";

const initialState: ICommentState = {
  comments: [],
};

export const getAllComments = createAsyncThunk(
  "comments/getAllComments",
  async () => {
    try {
      const data = await new Promise<CommentType[]>((resolve) => {
        setTimeout(() => {
          resolve(ContactsArray);
        }, 200);
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const getOneComment = createAsyncThunk(
  "comments/getOneComment",
  async ({ id }: CommentType) => {
    try {
      const data = await new Promise<CommentType>((resolve) => {
        setTimeout(() => {
          resolve(ContactsArray.find((coment) => coment.id === id));
        }, 200);
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const createComment = createAsyncThunk(
  "comments/createComment",
  async (newComment: CommentType) => {
    try {
      const id = uuid();
      const data = await new Promise<CommentType>((resolve) => {
        setTimeout(() => {
          resolve({ ...newComment, id });
        }, 200);
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async ({ id }: CommentType) => {
    try {
      const data = await new Promise<string>((resolve) => {
        resolve(id);
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const updateComment = createAsyncThunk(
  "comments/updateComment",
  async ({ body, id }: UpdateComment) => {
    try {
      const data = await new Promise<CommentType>((resolve) => {
        setTimeout(() => {
          resolve({ ...body, id });
        }, 200);
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

const contactSlice = createSlice({
  name: "coment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllComments.fulfilled, (state, action) => {
      console.log("getAllComments.fulfilled", action.payload);
      state.comments = action.payload;
    });

    builder.addCase(getOneComment.fulfilled, (state, action) => {
      const { id }: CommentType = action.payload;
      state.coment = state.comments.find((booking) => booking.id === id);
      console.log("getOneBook.fulfilled", state.coment.id);
    });
    builder.addCase(createComment.fulfilled, (state, action) => {
      state.comments = [...state.comments, action.payload];
    });
    builder.addCase(deleteComment.fulfilled, (state, action) => {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
    });
    builder.addCase(updateComment.fulfilled, (state, action) => {
      state.comments = state.comments.map((contact) => {
        const { id } = action.payload;
        return contact.id === id ? action.payload : contact;
      });
    });
    builder.addMatcher(
      isAnyOf(
        getAllComments.pending,
        getOneComment.pending,
        createComment.pending,
        deleteComment.pending,
        updateComment.pending
      ),
      (state) => {
        console.log("Loading...");
      }
    );
    builder.addMatcher(
      isAnyOf(
        getAllComments.rejected,
        getOneComment.rejected,
        createComment.rejected,
        deleteComment.rejected,
        updateComment.rejected
      ),
      (state) => {
        console.log("Error");
      }
    );
  },
});

export default contactSlice.reducer;
