import PostLiked from "./PostLiked"
import { useState } from "react";

const BulletinBoard = (props) => {
  const [showLike, setShowLike] = useState(true);
  return (
    <div className={"myDiv"}>
      <h3>{props.question}</h3>
      <ul>
        {props.answer.map((answer) => (
          <li>{answer}</li>
        ))}
      </ul>
      <button
        className={!showLike && "likebtn"}
        onClick={() => {
          setShowLike(!showLike);
        }}
      >
        {showLike && "Like"}
      </button>
      {!showLike && <PostLiked />}
    </div>
  );
};

export default BulletinBoard;

// Alternativ 2 ish
// import { useState } from "react";

// export default function PostLiked({ question, answer }) {
//   const [like, setLike] = useState(false);
//   const info = () => {
//     setLike(!like);
//   };
//   return (
//     <div style={{ border: "1px solid black" }}>
//       <div className={like ? "likeNone" : "App"}>
//         <h3>{question}</h3>
//         <ol>
//           {answer.map((answer) => (
//             <li>{answer}</li>
//           ))}
//           <button onClick={info}>{like ? "" : "Like"}</button>
//           {like ? (
//             <div>
//               <p>{"hej"}</p>
//             </div>
//           ) : null}
//         </ol>
//       </div>
//     </div>
//   );
// }
