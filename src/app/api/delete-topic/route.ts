import dbConnect from "@/lib/connection";
import Topic from "../../../models/Topic";

export async function DELETE(req: Request) {
    await dbConnect();
    try {
        const { topicId} = await req.json();
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
        await existingTopic.deleteOne();
        return Response.json(
            {
                success: true,
                message: "Topic deleted successfully",
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
