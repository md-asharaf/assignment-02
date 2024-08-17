"use client";
import AddTopic from '@/components/AddTopic';
import { useParams } from 'next/navigation';

const page = () => {
    const {topicId} = useParams();
  return (
    <AddTopic id={topicId as string}/>
  )
}

export default page