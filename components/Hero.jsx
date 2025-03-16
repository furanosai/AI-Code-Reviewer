"use client";
import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import Editor from "react-simple-code-editor";
import "prism-themes/themes/prism-atom-dark.css"; // Atom One Dark theme
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

const Hero = () => {
  const [code, setCode] = useState(`function sum() {
    return a + b;
}`);
  const [review, setReview] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    Prism.highlightAll(); // Highlight all code blocks on component mount
  }, [code]); // Re-highlight when the code changes

  async function reviewCode() {
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post("/api/ai", {
        code,
      });
      setReview(response.data);
    } catch (error) {
      console.error("Error reviewing code:", error);
      setError("Failed to review code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <main className="flex items-start p-[3vh] gap-[2vw] w-full">
        <div className="relative pb-5 px-3 pt-1 border border-zinc-500 rounded-lg w-1/2 h-[88vh]">
          <h1 className="text-xl pt-2 pb-5">✨ Enter your Code here : </h1>
          <Editor
            value={code}
            onValueChange={(newCode) => setCode(newCode)}
            highlight={(code) =>
              Prism.highlight(code, Prism.languages.javascript, "javascript")
            }
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 14,
              backgroundColor: "#1d1f21", // Matches Atom One Dark background
              color: "#c5c8c6", // Matches Atom One Dark text color
              borderRadius: "8px",
              height: "94%",
            }}
            className="editor focus:ring-none overflow-auto w-full" // Add a custom class for targeting
          />

          <button
            onClick={reviewCode}
            disabled={isLoading}
            className="absolute bottom-0 right-0 m-7 p-2 px-10 bg-white text-black font-medium hover:bg-sky-500 hover:text-white cursor-pointer rounded-md disabled:opacity-50"
          >
            {isLoading ? "Reviewing..." : "Review"}
          </button>
        </div>
        <div className="relative overflow-auto opacity-90 leading-9 p-5 border border-zinc-500 rounded-lg w-1/2 h-[88vh]">
          {error && <p className="text-red-500">{error}</p>}
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
    </>
  );
};

export default Hero;
