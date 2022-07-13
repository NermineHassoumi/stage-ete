import React from 'react';

const CreatePost = () =>{
    return(
     <div className="new-post-modal">
        <form>
            <textarea placeholder='Comment vas-tu ce jour ?'></textarea>
            <input type="submit" value="Partager"></input>
        </form>
     </div>
    );
};

export default CreatePost;