import ReviewCard, {
  type CodeReview,
} from "./components/Review Card/ReviewCard";
import "./App.css";
import Home from "./components/Home";
const codeReview: CodeReview = {
  name: "Behavioral Analysis",
  programmingLanguage: "Python",
  security: 60,
  cleanliness: 72,
  maintainability: 95,
  recommendations: [
    {
      id: 1,
      type: "security",
      content:
        "If anyone thinks he is something when he is nothing, he deceives himself. Each one should test his own actions. Then he can take pride in himself, without comparing himself to anyone else.",
      cite: "Chat GPT",
    },
    {
      id: 2,
      type: "maintainability",
      content: "one two three four one two three four one two three four",
      cite: "SE Best Practices",
    },
    {
      id: 3,
      type: "cleanliness",
      content: "one two three four one two three four one two three four",
      cite: "SOC Principles",
    },
  ],
};
function App() {
  return (
    <>
      <Home></Home>
      {/* <ReviewCard codeReview={codeReview} /> */}
    </>
  );
}
export default App;
