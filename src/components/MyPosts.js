import  React, {useState, useEffect} from 'react';
import '../styles/myPost.css'
import axios from 'axios';

const page = ({mypost, setDeleted}) => {
    return (
      <div className="card2-container">
        <div className="card2">
          <img
            src={mypost.content}
            style={{ width: "250px", height: "150px" }}
            alt="my_post"
          />

          <p>{mypost.text_description}</p>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={async () => {
              const result = await axios.delete(
                "http://localhost:8000/mypost",
                {
                  data: {
                    _id: mypost._id,
                  },
                }
              );

              alert("Post deleted successfully");
              setDeleted(true);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
}

const MyPosts = () => {
    const [myposts, setmyPosts] = useState([]);
    const [deleted, setDeleted] = useState(false);
    const userObj = JSON.parse(sessionStorage.getItem("curr_user"));

    
    useEffect(() => {
        const func = async() => {
            try{
                const result = await axios.get('http://localhost:8000/mypost', {
                    params:{
                        owner:userObj._id
                    }
                });
                console.log(myposts);
                setmyPosts(result.data)

                // console.log(myposts);
            } catch(error){
                console.log(error);
            }
        };
        func();
    }, [deleted])

    useEffect(() => {
      console.log(myposts);

    }, [myposts]);

    return (
        <div>
        <h1 style={{textAlign:"center"}}>My Posts</h1>
        {myposts.map((mypost)=>{
            return page({mypost, setDeleted});
        })}
        </div>
    );
}

export default MyPosts;
