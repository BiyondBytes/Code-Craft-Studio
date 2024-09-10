
import { NextRequest, NextResponse } from "next/server";
import { dataBasePrisma } from "../../../../prisma/databasePrisma";
export async function GET(req: NextRequest) {

    try {
        const res = await dataBasePrisma.user.create({data:{email:"lkdfjlk"}})
        console.log(res)
        return NextResponse.json({ success: true, message: "Token saved successfully",data:'' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: "error.message" }, { status: 500 });
    }
}
