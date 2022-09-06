import Head from "next/head";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import parse from "html-react-parser";
import { generateHTML } from "@tiptap/core";

import Tiptap from "../components/Tiptap";
import styles from "../styles/Home.module.css";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function Home() {
  const [content, setContent] = useState("");
  // const [editable, setEditable] = useState(false);
  // const editor = useEditor({
  //   editable,
  //   content: content,
  //   extensions: [StarterKit],
  // });

  // const output = useMemo(() => {
  //   return generateHTML(content, [StarterKit]);
  // }, [content]);

  // if (!editor) {
  //   return null;
  // }

  // console.log(output);
  return (
    <>
      <div className={styles.container}>
        <h2>
          Text Edtior{" "}
          <span>
            <a
              href="https://github.com/spikeoze/tiptap-text-editor-"
              target="_blank"
              rel="noreferrer"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              source code
            </a>
          </span>
        </h2>

        <Tiptap content={content} setContent={setContent} />
        {content && <div className="content">{parse(content)}</div>}
      </div>
    </>
  );
}
