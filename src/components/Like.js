import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLikes } from "../actions/post.action";
import { addUserLikes } from "../actions/user.action";

const Like = ({ post }) => {
  
  const dispatch = useDispatch()

  const user = useSelector((state) => state.userReducer);

  const handleLikes = () => {

    const postData = {
      title : post.title,
      author : post.author,
      content : post.content,
      likes : ++post.likes,
      id : post.id
    };

    const userData = {
      pseudo : user[0].pseudo,
      likes : ++user[0].likes,
      id : user[0].id
    }

    dispatch(addLikes(postData));
    dispatch(addUserLikes(userData));
  }
  return (
    <div onClick = {handleLikes}>
      <img src="./icons/clap.png" className="clap" alt="clap" />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
