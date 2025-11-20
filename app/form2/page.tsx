import { functionToHandleFormSubmition } from "@/lib/formHandlingFile";

export default function AnythingYouWant() {
  return (
    <>
      <form action={functionToHandleFormSubmition}>
        <label htmlFor="filename">filename</label>
        <input type="text" name="filename" />
        <br />
        <label htmlFor="file">file</label>
        <input type="file" name="file" />
        <br />
        <label htmlFor="email">email</label>
        <input type="email" name="email" />
        <br />
        <button type="submit">submit</button>
      </form>
    </>
  );
}
