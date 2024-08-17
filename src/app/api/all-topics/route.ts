import dbConnect from "@/lib/connection";
import Topic from "../../../models/Topic";
export const revalidate = 0;
export async function GET(req: Request) {
    await dbConnect();
    try {
        const topics = await Topic.find();
        return Response.json(
            {
                success: true,
                message: "Topics fetched successfully",
                data: topics,
            },
            { status: 200 }
        );
    } catch (error) {
        return Response.json(
            {
                success: false,
                message: "Something went wrong",
            },
            {
                status: 500,
            }
        );
    }
}