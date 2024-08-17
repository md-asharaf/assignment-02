"use client";
import { useTopic } from "@/context/TopicProvider";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Topic = ({id = ""}) => {
    const router = useRouter();
    const { addTopic, topics,updateTopic } = useTopic();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const onClick = async () => {
        let res;
        if(id){
            res=await axios.post('/api/update-topic',{id,title,description});
            updateTopic(id,res.data.data);
        }else{
            res = await axios.post("/api/add-topic", { title, description });
            addTopic(res.data.data);
        }
        router.push("/");
    };
    useEffect(() => {
        const topic = topics.find((topic) => topic._id === id);
        setTitle(topic?.title || "");
        setDescription(topic?.description || "");
    }, []);
    return (
        <div className="flex flex-col space-y-4 text-black">
            <input
                type="text"
                value={title}
                onInput={(e: any) => {
                    setTitle(e.target.value);
                }}
                className="border-black border-2 py-2 px-8"
                placeholder="Topic Title"
            />
            <input
                type="text"
                value={description}
                className="border-black border-2 py-2 px-8"
                onInput={(e: any) => {
                    setDescription(e.target.value);
                }}
                placeholder="Topic Description"
            />
            <button
                className="bg-green-500 p-2 text-lg text-white max-w-[120px]"
                onClick={onClick}
            >
                Add Topic
            </button>
        </div>
    );
};

export default Topic;
