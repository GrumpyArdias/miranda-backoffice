import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ContactsArray from "../data/coments.json";

const initialState = {
  contacts: [],
  coment: {},
};

function delay(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 200);
  });
}

export const getAllContacts = createAsyncThunk(
  "contacts/getAllContacts",
  async () => {
    try {
      return await delay(ContactsArray);
    } catch (error) {
      alert(`Can't get all the Contacts right now, error: ${error}`);
    }
  }
);

export const getOneContact = createAsyncThunk(
  "contacts/getOneContact",
  async (id) => {
    try {
      return await delay(id);
    } catch {
      throw new Error("Failed to fetch the Coment.");
    }
  }
);

export const createContact = createAsyncThunk(
  "contacts/createContacts",
  async (newContact) => {
    try {
      return await delay({
        ...newContact,
        id: Math.round(Math.random() * 200),
      });
    } catch {
      throw new Error("Failed to create a new Contacts");
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    try {
      return await delay(id);
    } catch {
      throw new Error("Error to delete the Contact");
    }
  }
);

export const updateContact = createAsyncThunk(
  "coment/updateComent",
  async (updateContact) => {
    try {
      return await delay(...updateContact);
    } catch {
      throw new Error("Error updating the Contact");
    }
  }
);

const contactSlice = createSlice({
  name: "coment",
  initialState,
  reducers: {},
  extraReducers: {
    // GET ALL COMENT
    [getAllContacts.fulfilled]: (state, action) => {
      console.log("success");
      state.contacts = action.payload;
    },
    [getAllContacts.pending]: (state) => {
      console.log("Loading...");
    },
    [getAllContacts.rejected]: (state) => {
      console.log("Error fetching Coment...");
    },
    // GET ONE COMENT
    [getOneContact.fulfilled]: (state, action) => {
      console.log("success");
      state.contact = state.contacts.find(
        (contact) => contact.id === action.payload
      );
    },
    [getOneContact.pending]: (state) => {
      console.log("Loading...");
    },
    [getOneContact.rejected]: (state) => {
      console.log("Error Fetching the Contact...");
    },

    // CRREATE ONE COMENT
    [createContact.fulfilled]: (state, action) => {
      console.log("success");
      state.contacts = [...state.contacts, action.payload];
    },
    [createContact.pending]: (state) => {
      console.log("Loading...");
    },
    [createContact.rejected]: (state) => {
      console.log("Error creating new Contacts");
    },

    // DELETING ONE COMENT
    [deleteContact.fulfilled]: (state, action) => {
      console.log("success");
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    [deleteContact.pending]: (state) => {
      console.log("Loading...");
    },
    [deleteContact.rejected]: (state) => {
      console.log("Error Deleting the Contact");
    },
    // UPDATING ONE BOOKING
    [updateContact.fulfilled]: (state, action) => {
      console.log("success");
      state.contacts = state.contacts.map((contact) => {
        return contact.id === action.payload.id ? action.payload : contact;
      });
    },
    [updateContact.pending]: (state) => {
      console.log("Loading...");
    },
    [updateContact.rejected]: (state) => {
      console.log("Error updating the Contact");
    },
  },
});

export default contactSlice.reducer;
