import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
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
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(
        getAllContacts.fulfilled,
        getOneContact.fulfilled,
        createContact.fulfilled,
        deleteContact.fulfilled
      ),
      (state, action) => {
        switch (action.type) {
          case getAllContacts.fulfilled.type:
            state.contacts = action.payload;
            console.log("getAllContacts.fulfilled", state.contacts);

            break;

          case getOneContact.fulfilled.type:
            state.coment = state.contacts.find(
              (contact) => contact.id === action.payload
            );
            console.log("getOneContact.fulfilled", state.contact);
            break;

          case createContact.fulfilled.type:
            state.contacts = [...state.contacts, action.payload];
            console.log("createContact.fulfilled", state.contacts);
            break;

          case deleteContact.fulfilled.type:
            state.contacts = state.contacts.filter(
              (contact) => contact.id !== action.payload
            );
            console.log("deleteContact.fulfilled", state.contacts);
            break;
          case updateContact.fulfilled.type:
            state.contacts = state.contacts.map((contact) => {
              return contact.id === action.payload.id
                ? action.payload
                : contact;
            });
            break;

          default:
            break;
        }
      }
    );
    builder.addMatcher(
      isAnyOf(
        getAllContacts.pending,
        getOneContact.pending,
        createContact.pending,
        deleteContact.pending,
        updateContact.pending
      ),
      (state) => {
        console.log("Loading...");
      }
    );
    builder.addMatcher(
      isAnyOf(
        getAllContacts.rejected,
        getOneContact.rejected,
        createContact.rejected,
        deleteContact.rejected,
        updateContact.rejected
      ),
      (state) => {
        console.log("Error");
      }
    );
  },
});

export default contactSlice.reducer;
