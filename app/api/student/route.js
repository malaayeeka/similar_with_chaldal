import { db } from "../../../lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      first_name,
      last_name,
      class: studentClass,
      section,
      roll_number,
      date_of_birth,
      gender,
    } = body;

    const query = `
      INSERT INTO student
      (first_name, last_name, \`class\`, section, roll_number, date_of_birth, gender)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    await db.execute(query, [
      first_name,
      last_name,
      studentClass,
      section,
      roll_number,
      date_of_birth,
      gender,
    ]);

    return NextResponse.json({ message: "Student added successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}