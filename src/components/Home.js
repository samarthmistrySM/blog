import React ,{ useState, useEffect } from 'react'

export default function Home() {

    const [postData,setPostData] = useState(null);
    const apikey = "AIzaSyBlDkNTgDiEeK-ah-TC9k2TaS6VGQL396g";
    const API_URL = `https://www.googleapis.com/blogger/v3/blogs/2399953/posts?key=${apikey}`;
    useEffect(()=>{
        fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const totalPosts = data.items.length;
            if(totalPosts !== 0){
                // for(var i=0; i<totalPosts;i++ ){
                    setPostData(data.items[0]);
                // }
            }
            else{
                console.log("no blog found.");
            }
        })
        .catch(error=>console.log(error))
    },[]);

    if (!postData) {
        return <div>Loading...</div>;
      }

  return (
    <>
    <div className="post-container">
      <h2>{postData.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
    </div>
    </>
  )
}
