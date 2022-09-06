import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = ({ content, setContent }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: "editor",
      },
    },
    content:
      "<p><strong>Hello World! 🌎️</strong></p><p>today I have some exciting news</p><ol><li><p>first click inside the black box to edit</p></li><li><p>second we will conquer the world</p></li><li><p>finally we will <strong><em>rest</em></strong></p></li></ol>",
  });

  if (!editor) {
    return <h1>Loading...</h1>;
  }

  const data = editor.getHTML();

  return (
    <>
      <button
        onClick={() => editor?.chain().focus().toggleBold().run()}
        className={editor?.isActive("bold") ? "isActive" : "noActive"}
      >
        Bold
      </button>

      <button
        onClick={() => editor?.chain().focus().toggleItalic().run()}
        className={editor?.isActive("italic") ? "isActive" : "noActive"}
      >
        Italic
      </button>

      <button
        onClick={() => editor?.chain().focus().toggleStrike().run()}
        className={editor?.isActive("strike") ? "isActive" : "noActive"}
      >
        strike
      </button>

      <button onClick={() => editor?.chain().focus().toggleBulletList().run()}>
        bl
      </button>

      <button onClick={() => editor?.chain().focus().toggleOrderedList().run()}>
        ol
      </button>
      <EditorContent editor={editor} />

      <button onClick={() => setContent(data)}>Post</button>
    </>
  );
};

export default Tiptap;
