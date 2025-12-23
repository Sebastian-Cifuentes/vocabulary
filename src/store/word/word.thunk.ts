import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/vocabulary.api";
import { Word } from "./word.slice";

export const loadWords = createAsyncThunk<
  Word[],
  void,
  { rejectValue: string }
>('word/load', async (_, { rejectWithValue }) => {
  try {
    const { data }: any = await api.get('/words');

    if (data.error) {
      return rejectWithValue(data.message);
    }

    return data.words;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const createWord = createAsyncThunk<
  Word,
  { text: string },
  { rejectValue: string }
>('word/create', async (payload, { rejectWithValue }) => {
  try {
    const { data }: any = await api.post('/words', payload);
    return data.word;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const updateWord = createAsyncThunk<
  Word,
  Word,
  { rejectValue: string }
>('word/update', async (word, { rejectWithValue }) => {
  try {
    const { data }: any = await api.put(`/words/${word.id}`, word);
    return data.word;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const deleteWord = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('word/delete', async (id, { rejectWithValue }) => {
  try {
    await api.delete(`/words/${id}`);
    return id;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});