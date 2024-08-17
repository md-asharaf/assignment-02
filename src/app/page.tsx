"use client";
import { useTopic } from "@/context/TopicProvider";
import DeleteIcon from "../../public/images/bin.png";
import EditIcon from "../../public/images/pen.png";
import { useRouter } from "next/navigation";
import axios from "axios";
const Home = () => {
    const router=useRouter();
    const { topics,deleteTopic } = useTopic();
    const handleDelete = async (topicId: string) => {
        const res=await axios.delete('/api/delete-topic',{data:{topicId}});
        if(res.data.success){
            deleteTopic(topicId);
        }
    }
    return (
        <div className="flex flex-col gap-y-2 text-black">
            {topics?.map((topic) => (
                <div key={topic._id} className="flex justify-between items-center px-4 border-black border-[1px] rounded-lg py-4">
                    <div className="flex flex-col">
                        <h3 className="text-2xl font-bold">{topic.title}</h3>
                        <p>{topic.description}</p>
                    </div>
                    <div className="flex space-x-4">
                        <button>
                            <img src={EditIcon.src} onClick={()=>router.push(`/${topic._id}/edit-topic`)} className="w-10 h-10" />
                        </button>
                        <button>
                            <img src={DeleteIcon.src} onClick={()=>handleDelete(topic._id)} className="w-10 h-10" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;