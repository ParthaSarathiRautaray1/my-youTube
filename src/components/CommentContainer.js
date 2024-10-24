import React from 'react'


const commentsData = [

    {
        name: "Partha",
        text: "Namaste React",
        replies: [

        ]
    },
    {
        name: "Partha",
        text: "Namaste React",
        replies: [
            {
                name: "Partha",
                text: "Namaste React",
                replies: [
                    {
                        name: "Partha",
                        text: "Namaste React",
                        replies: [
                
                        ]
                    },
                    {
                        name: "Partha",
                        text: "Namaste React",
                        replies: [
                
                        ]
                    },
                    {
                        name: "Partha",
                        text: "Namaste React",
                        replies: [
                
                        ]
                    },
        
                ]
            },
            {
                name: "Partha",
                text: "Namaste React",
                replies: [
        
                ]
            },
            {
                name: "Partha",
                text: "Namaste React",
                replies: [
        
                ]
            },

        ]
    },
    {
        name: "Partha",
        text: "Namaste React",
        replies: [

        ]
    },
   
]

const Comment = ({ data }) => {
    const { name , text , replies } = data;
    return(
        <div className='flex shadow-sm bg-gray-100 rounded-lg hover:bg-gray-200 my-2'>
            <img 
                className='w-12 h-12 rounded-full '
                alt="user"
                src="https://tse1.mm.bing.net/th?id=OIP.21inJiiFwDwSAuKlQjc8oAHaHa&pid=Api&P=0&h=180"
            />
            <div>
                <p className='font-[Roboto] font-bold px-4'>{name}</p>
                <p className='font-[Roboto] font-thin px-4'>{text}</p>
            </div>
        </div>
    )
}


const CommentsList = ({ comments}) => {
    return comments.map((comment,index) =>(
        <div key={index}>
            <Comment data={comment} />

            <div>
                <CommentsList comments={comment.replies} />
            </div>
        </div>
    ))
}
const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold font-[Roboto]'>Comments:</h1>
        <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer
