"use client";
import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import Editor from "react-simple-code-editor";
import "prism-themes/themes/prism-atom-dark.css";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { AiOutlineRightCircle } from "react-icons/ai";
import { Loader2 } from "lucide-react"; // optional spinner icon

const Hero = () => {
  const [code, setCode] = useState(`function sum(a, b) {
  return a + b;
}`);
  const [review, setReview] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  async function reviewCode() {
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post("/api/ai", { code });
      setReview(response.data);
    } catch (error) {
      console.error("Error reviewing code:", error);
      setError("⚠️ Failed to review code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <main className="flex flex-col md:flex-row items-start gap-8 px-6 pt-20 pb-10 w-full transition-colors">
        {/* Code Editor */}
        <div className="relative w-full md:w-1/2 h-[500px] md:h-[600px] bg-zinc-800 border border-zinc-600 rounded-xl shadow-lg p-5 flex flex-col transition-all">
          <h1 className="text-xl font-bold text-white mb-4">
            ✨ Enter your code here
          </h1>

          <Editor
            value={code}
            onValueChange={setCode}
            highlight={(code) =>
              Prism.highlight(code, Prism.languages.javascript, "javascript")
            }
            padding={12}
            className="w-full h-full overflow-auto rounded-md custom-scrollbar"
            style={{
              fontFamily: '"Fira Code", monospace',
              fontSize: 14,
              backgroundColor: "#1d1f21",
              color: "#c5c8c6",
              borderRadius: "8px",
            }}
          />

          <button
            onClick={reviewCode}
            disabled={isLoading}
            className="absolute bottom-8 right-8 flex items-center gap-2 px-5 py-2 text-sm font-semibold bg-sky-500 text-white rounded-md hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin w-4 h-4" /> Reviewing...
              </>
            ) : (
              <>
                Review <AiOutlineRightCircle className="text-lg" />
              </>
            )}
          </button>
        </div>

        {/* AI Review Section */}
        <div className="w-full md:w-1/2 h-[500px] md:h-[600px] bg-white dark:bg-zinc-900 border border-zinc-400 dark:border-zinc-700 rounded-xl shadow-md p-6 overflow-auto custom-scrollbar">
          <h2 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-zinc-200">
            🧠 AI Review Output
          </h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <Markdown
            // className="prose dark:prose-invert max-w-full leading-relaxed"
            rehypePlugins={[rehypeHighlight]}
          >
            {review}
          </Markdown>
        </div>
      </main>
    </>
  );
};

export default Hero;
