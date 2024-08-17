"use client";
import Topic from '@/components/Topic';
import { useParams } from 'next/navigation';

const EditTopic = () => {
    const {topicId} = useParams();
  return (
    <Topic id={topicId as string}/>
  )
}

export default EditTopic;