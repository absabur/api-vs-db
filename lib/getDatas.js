import Student from "@/models/studentModel";
import connectDB from "./db";

export async function getPaginatedStudents() {
  await connectDB();

  const students = await Student.find();

  return {
    students,
  };
}
