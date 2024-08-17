"use client";
import { ITopic } from "@/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import TopicProvider  from "@/context/TopicProvider";
const Header = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [topics, setTopics] = useState<ITopic[]>([]);
    const addTopic = (topic: ITopic) => {
        setTopics((prev) => [...prev, topic]);
    };
    const deleteTopic = (topicId: string) => {
        setTopics((prev) => prev.filter((topic) => topic._id !== topicId));
    };
    const updateTopic=(id:string,topic:ITopic)=>{
        setTopics(prev=>prev.map(t=>t._id==id?topic:t));
    }
    useEffect(() => {
        axios.get("/api/all-topics").then((res: any) => {
            setTopics(res.data.data);
        });
      }, []);
    return (
      <TopicProvider value={{ topics, addTopic, deleteTopic,updateTopic }}>
        <div className="w-screen h-screen bg-white pt-8">
            <div className="w-full md:w-[700px] mx-auto space-y-8">
                <div className="flex justify-between items-center px-8 bg-blue-900 py-4">
                    <h1 className="text-xl">Tournamax Assignment</h1>
                    <button
                        className="p-2 bg-white text-black rounded-lg"
                        onClick={() => router.push("/add-topic")}
                    >
                        Add Topic
                    </button>
                </div>
                {children}
            </div>
        </div>
        </TopicProvider>
    );
};

export default Header;
