import dbConnect from "@/lib/connection";
import Topic from "../../../models/Topic";

export async function POST(req: Request) {
    await dbConnect();
    try {
        const { topicId, title, description } = await req.json();
        const existingTopic = await Topic.findById(topicId);
        if (!existingTopic) {
            return Response.json(
                {
                    success: false,
                    message: "topic does not exist",
                },
                {
                    status: 404,
                }
            );
        }
        existingTopic.title = title;
        existingTopic.description = description;
        await existingTopic.save();
        return Response.json(
            {
                success: true,
                message: "Topic edited successfully",
            },
            {
                status: 200,
            }
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
