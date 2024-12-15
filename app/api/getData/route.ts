import clientPromise from "../../../utils/mongodb";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const filter = request.nextUrl.searchParams.get("filter") || "All";
    const client = await clientPromise;
    const db = client.db("joblist");
    const collection = db.collection("jobs");

    const query = filter === "All" ? {} : { company: filter };
    const data = await collection.find(query).toArray();

    if (data.length === 0) {
      return NextResponse.json({ error: "No data found" }, { status: 404 });
    } else {
      return NextResponse.json({ data }, { status: 200 });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Unable to fetch data" },
      { status: 500 }
    );
  }
}
