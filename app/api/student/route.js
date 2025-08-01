// app/api/students/route.js
import { getPaginatedStudents } from "@/lib/getDatas";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await getPaginatedStudents();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
