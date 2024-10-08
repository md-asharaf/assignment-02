import { ITopic } from "@/types";
import { createContext, useContext } from "react";
const TopicContext=createContext({
    topics:[] as ITopic[],
    addTopic:(topic:ITopic)=>{},
    deleteTopic:(id:string)=>{},
    updateTopic:(id:string,topic:ITopic)=>{}
})
export const useTopic=()=>{
    return useContext(TopicContext);
}

export default TopicContext.Provider;