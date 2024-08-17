import dbConnect from "@/lib/connection";
import Topic from "@/models/Topic";


export async function POST(req:Request){
    await dbConnect();
    try {
        const {id, title, description} = await req.json();
        const existingTopic =  await Topic.findById(id);
        if(!existingTopic){
            return Response.json({
                success:false,
                message:"topic does not exist"
            },{
                status:404
            })
        }
        existingTopic.title=title;
        existingTopic.description=description;
        await existingTopic.save();
        return Response.json({success:true,
            message:"topic updated successfully"
        },{
            status:200
        })
    } catch (error) {
        return Response.json({
            status:500,
            message:"Internal Server Error"
        },{status:500})
    }
}