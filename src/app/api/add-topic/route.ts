import dbConnect from "@/lib/connection";
import Topic from "../../../models/Topic";

export async function POST(req: Request) {
    await dbConnect();
    try {
        const { title, description} = await req.json();
        
        const topic = await Topic.create({
            title,
            description,
        });
        return Response.json(
            {
                success: true,
                message: "new topic created successfully",
                data: topic,
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
