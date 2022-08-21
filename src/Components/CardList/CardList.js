import React from "react";
import Card from '../Card/Card'
const CardList = () => {
    const images = [
            'https://source.unsplash.com/720x720?painting',
            'https://iiif.micr.io/yzksg/full/1801,/0/default.webp',
            'https://images.unsplash.com/photo-1602738328654-51ab2ae6c4ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80ttps://unsplash.com/photos/zdiMKVb5fl0',
            'https://source.unsplash.com/900x900/?black',
            'https://source.unsplash.com/900x900/?river',
            'https://source.unsplash.com/900x900/?aesthetic',
            'https://source.unsplash.com/900x900/?dark',
            'https://source.unsplash.com/900x900/?stars',
            'https://source.unsplash.com/900x900/?sky',
            'https://source.unsplash.com/900x900/?planets',
            'https://source.unsplash.com/900x900/?art',
            'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        ]
    

    return (
        <>
            {
                images.map((image,i) =>{
                    return <Card key={i} url={image} />
                })
            }
        </>

    )
}

export default CardList;


/* <img src=""/>
<img src=""/>
<img src="https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"/>
<img src="https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
<img src="https://images.unsplash.com/photo-1585007600263-71228e40c8d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
<img src="https://images.unsplash.com/photo-1586447795212-b8ea5253ac2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
<img src="https://images.unsplash.com/photo-1540408055539-b4dd7d0da12e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
<img src="https://images.unsplash.com/photo-1549277513-f1b32fe1f8f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
<img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
<img src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
<img src="https://source.unsplash.com/1080x720?painting" alt="art" /> */