import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import Message from './Message'
import MessageSkeleton from "../skeletons/MessageSkeleton";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);
  return (
    <div className='px-4 flex-1 overflow-auto'>

{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} >
						<Message message={message} ref={lastMessageRef}/>
					</div>
				))}

       {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
       {!loading && messages.length === 0 && (
				<p className='text-center text-gray-950'>Send a message to start the conversation</p>
			)}
    </div>
  )
}

export default Messages