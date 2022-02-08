import BulletinBoard from "./BulletinBoard";
export default function ReactPost({ React }) {
  return (
    <div>
      <h2> React Bulletin Board</h2>
      {React.map(({ question, answer }, i) => (
        <BulletinBoard question={question} answer={answer} key={i} />
      ))}
      <strong>By Mohammad Awad</strong>
    </div>
  );
}
