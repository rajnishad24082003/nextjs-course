export default function AnythingYouWant() {
  async function functionToHandleFormSubmition(formData: FormData) {
    "use server"; //this is used to create a server action but this is not a good practice as we might need it to be a client component

    const data = {
      filename: formData.get("filename"),
      email: formData.get("email"),
      file: formData.get("file"),
    };

    console.log(data);
  }

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
