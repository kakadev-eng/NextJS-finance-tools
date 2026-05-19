import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex"; // <-- Garanta que importou este cara
import { getPostBySlug } from "@/lib/posts";
import { AdBanner } from "@/components/AdBanner";

// ESSA LINHA É CRUCIAL: Sem ela, os símbolos matemáticos não ganham estilo!
import "katex/dist/katex.min.css"; 

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <main className="prose prose-invert mx-auto max-w-4xl p-8">
      <AdBanner />
      
      <ReactMarkdown 
        remarkPlugins={[remarkMath, remarkGfm]} 
        rehypePlugins={[rehypeKatex]} // <-- Garanta que adicionou este plugin aqui
        components={{
          table: ({ node, ...props }) => (
            <div className="my-6 overflow-x-auto">
              <table className="w-full min-w-full border-collapse border border-zinc-700 text-left text-sm" {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => <thead className="bg-zinc-800 text-zinc-200" {...props} />,
          th: ({ node, ...props }) => <th className="border border-zinc-700 p-3 font-semibold" {...props} />,
          td: ({ node, ...props }) => <td className="border border-zinc-700 p-3 text-zinc-300" {...props} />,
        }}
      >
        {post.content}
      </ReactMarkdown>
    </main>
  );
}