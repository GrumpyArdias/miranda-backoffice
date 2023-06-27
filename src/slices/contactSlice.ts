import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { CommentType, ICommentState, UpdateComment } from "../@types/contacts";
import { v4 as uuid } from "uuid";
import { apiFetch } from "../utils/apiFetch";

const initialState: ICommentState = {
  comments: [],
};

export const getAllComments = createAsyncThunk(
  "comments/getAllComments",
  async () => {
    try {
      const token = localStorage.getItem("token");
      const params = {
        option: "comments",
        method: "GET",
        token: token,
      };
      const data = await apiFetch(params);
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
      const token = localStorage.getItem("token");
      const params = {
        option: "comments",
        method: "GET",
        token: token,
        id: id,
      };
      const data = await apiFetch(params);
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
      const token = localStorage.getItem("token");
      const commentToString = JSON.stringify(newComment);
      const params = {
        option: "comments",
        method: "POST",
        token: token,
      };
      const data = await apiFetch(params);
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
      const token = localStorage.getItem("token");
      const params = {
        option: "comments",
        method: "DELETE",
        token: token,
        id: id,
      };
      const data = await apiFetch(params);
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
      const token = localStorage.getItem("token");
      const commentToString = JSON.stringify(body);
      const params = {
        option: "comments",
        method: "PUT",
        token: token,
        id: id,
        body: commentToString,
      };
      const data = await apiFetch(params);
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
