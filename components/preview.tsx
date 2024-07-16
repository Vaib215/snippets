import { cn } from "@/lib/utils";
import { SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react";
import components from "@/utils/components.json";

const Preview = ({
  code,
  className,
  packages,
  internalComponents,
}: {
  code: string;
  className?: string;
  packages: string[];
  internalComponents?: string[];
}) => {
  const requiredComponents = components.filter((c) =>
    internalComponents?.includes(c.name)
  );
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
        "tsconfig.json": `
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": [
      "DOM",
      "DOM.Iterable",
      "ESNext"
    ],
    "paths": {
      "@/*": ["./src/*"]
    },
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ],
  "references": [
    {
      "path": "./tsconfig.node.json"
    }
  ]
}
        `,
        "vite.config.ts": `
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
        `,
        "src/lib/utils.ts": `
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

        `,
        ...requiredComponents?.reduce((acc: Record<string, string>, curr) => {
          curr.files.map((file) => {
            acc[`src/${file.dir}/${file.name}`] = file.content;
          });
          return acc;
        }, {}),
      }}
      className={cn("!aspect-square !w-full", className)}
      options={{
        externalResources: ["https://cdn.tailwindcss.com"],
        visibleFiles: [
          "App.tsx",
          "index.html",
          "index.tsx",
          "tsconfig.json",
          "vite.config.ts",
        ],
      }}
      customSetup={{
        dependencies: {
          ...packages?.reduce((acc: Record<string, string>, curr) => {
            acc[curr] = "latest";
            return acc;
          }, {}),
          ...requiredComponents?.reduce((acc: Record<string, string>, curr) => {
            curr.dependencies?.map((dep) => {
              acc[dep] = "latest";
            });
            return acc;
          }, {}),
          "lucide-react": "latest",
          "@types/node": "latest",
          "class-variance-authority": "latest",
          clsx: "latest",
          "tailwind-merge": "latest",
        },
        environment: "node",
      }}
    >
      <SandpackPreview
        className="!h-full"
        showNavigator
        actionsChildren={<></>}
      />
    </SandpackProvider>
  );
};

export default Preview;
