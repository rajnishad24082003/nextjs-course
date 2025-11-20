"use server";

import { writeFile } from "fs/promises";
import path from "path";
import xss from "xss";

export async function functionToHandleFormSubmition(formData: FormData) {
  // Sanitize inputs
  const filename = xss((formData.get("filename") as string) || "");
  const email = xss((formData.get("email") as string) || "");
  const file = formData.get("file") as File;

  if (!file || file.size === 0) {
    throw new Error("No file uploaded");
  }

  // Convert file -> Node buffer
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Upload path
  const uploadDir = path.join(process.cwd(), "public", "uploads");

  // Create folder if missing
  await import("fs/promises")
    .then((fs) => fs.mkdir(uploadDir, { recursive: true }))
    .catch(() => {});

  // Sanitize file name OR replace it entirely
  const safeFileName = xss(file.name.replace(/[^a-zA-Z0-9_.-]/g, "_"));

  const filePath = path.join(uploadDir, safeFileName);

  // Save the file
  await writeFile(filePath, buffer);

  console.log("Saved file to:", filePath);
  console.log("Email:", email);
  console.log("Filename:", filename);
}
