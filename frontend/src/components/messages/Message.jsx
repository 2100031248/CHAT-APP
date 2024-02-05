

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
        <img alt='Tailwind CSS chat bubble component' src="https://avatar.iran.liara.run/public/boy?username=hi`" />
        </div>
        </div>
        <div>
     <div className={`chat-bubble text-white bg-blue-500 pb-2`} >What is UPP</div>
     <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>10:42</div>
        </div>
    </div>
  )
}

export default Message