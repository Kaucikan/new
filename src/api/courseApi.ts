// src/api/courseApi.ts
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getCourses = async () => {
  const res = await axios.get(`${API_URL}/courses`);
  return res.data;
};

export const addCourse = async (course: any) => {
  const res = await axios.post(`${API_URL}/courses`, course);
  return res.data;
};

export const updateCourse = async (id: string, rating: number) => {
  const res = await axios.put(`${API_URL}/courses/${id}`, { rating });
  return res.data;
};
