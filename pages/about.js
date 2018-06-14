import Link from "next/link";
import Image from "../components/Image";

const About = () => {
  return (
    <div style={{fontSize: '20px', color: 'skyblue'}}>
      <h1>About</h1>
      <Link href="/">
        <a>back</a>
      </Link>
      <Image />
      <p>I was a magician once</p>
    </div>
  );
};

export default About;
