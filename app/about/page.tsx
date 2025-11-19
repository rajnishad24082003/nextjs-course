import sty from "./styles.module.css";
import Link from "next/link";

export default function AnythingYouWant() {
  return (
    <>
      <h1 className={sty.allthings}>about us</h1>
      <Link href="/community">community</Link>
    </>
  );
}
