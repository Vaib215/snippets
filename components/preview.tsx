import { cn } from "@/lib/utils";
import { SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react";

const Preview = ({
  code,
  className,
  packages,
}: {
  code: string;
  className?: string;
  packages: string[];
}) => {
  return (
    <SandpackProvider
      template="vite-react-ts"
      theme={"dark"}
      files={{
        "App.tsx": code,
        "index.html": `
                  <!doctype html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Snippets</title>
            <script src="https://unpkg.com/tailwindcss-cdn@3.4.3/tailwindcss.js"></script>
          </head>
          <body>
            <div id="root"></div>
            <script type="module" src="/index.tsx"></script>
          </body>
        </html>
                `,
      }}
      className={cn("!aspect-square !w-full", className)}
      options={{
        externalResources: ["https://cdn.tailwindcss.com"],
        visibleFiles: ["App.tsx", "index.html", "index.tsx"],
      }}
      customSetup={{
        dependencies: {
          ...packages?.reduce((acc: Record<string, string>, curr) => {
            acc[curr] = "latest";
            return acc;
          }, {}),
        },
        environment: "node",
      }}
    >
      <SandpackPreview className="!h-full" />
    </SandpackProvider>
  );
};

export default Preview;
