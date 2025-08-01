import Student from "@/models/studentModel";
import connectDB from "./db";

export async function getPaginatedStudents({
  batch,
  type,
  search,
  sortBy,
  sortOrder,
  isActive,
  page = 1,
  limit = 10,
}) {
  await connectDB();

  const filter = {};
  if (batch) filter.batch = batch;
  if (type) filter.type = { $regex: type, $options: "i" };
  if (search) {
    filter.$or = [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
      { phone: { $regex: search, $options: "i" } },
      { profession: { $regex: search, $options: "i" } },
    ];
  }
  filter.isActive = isActive;

  const sort = {};
  if (sortBy) sort[sortBy] = sortOrder === "desc" ? -1 : 1;

  const skip = (page - 1) * limit;

  const students = await Student.find(filter)
    .sort(sort)
    .skip(skip)
    .limit(limit)

  const total = await Student.countDocuments(filter);

  return {
    students,
    count: students.length,
    total,
    page,
    limit,
  };
}
