import { cn } from "@/lib/utils";
import { SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react";
import components from "@/utils/components.json";
import { Iframe } from "./iframe";

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
            <script src="https://cdn.tailwindcss.com"></script>
            <script>
            tailwind.config = {
              theme: {
                container: {
                  center: true,
                  padding: "2rem",
                  screens: {
                    "2xl": "1400px",
                  },
                },
                extend: {
                  colors: {
                    border: "hsl(var(--border))",
                    input: "hsl(var(--input))",
                    ring: "hsl(var(--ring))",
                    background: "hsl(var(--background))",
                    foreground: "hsl(var(--foreground))",
                    primary: {
                      DEFAULT: "hsl(var(--primary))",
                      foreground: "hsl(var(--primary-foreground))",
                    },
                    secondary: {
                      DEFAULT: "hsl(var(--secondary))",
                      foreground: "hsl(var(--secondary-foreground))",
                    },
                    destructive: {
                      DEFAULT: "hsl(var(--destructive))",
                      foreground: "hsl(var(--destructive-foreground))",
                    },
                    muted: {
                      DEFAULT: "hsl(var(--muted))",
                      foreground: "hsl(var(--muted-foreground))",
                    },
                    accent: {
                      DEFAULT: "hsl(var(--accent))",
                      foreground: "hsl(var(--accent-foreground))",
                    },
                    popover: {
                      DEFAULT: "hsl(var(--popover))",
                      foreground: "hsl(var(--popover-foreground))",
                    },
                    card: {
                      DEFAULT: "hsl(var(--card))",
                      foreground: "hsl(var(--card-foreground))",
                    },
                  },
                  borderRadius: {
                    lg: "var(--radius)",
                    md: "calc(var(--radius) - 2px)",
                    sm: "calc(var(--radius) - 4px)",
                  },
                  keyframes: {
                    "accordion-down": {
                      from: { height: "0" },
                      to: { height: "var(--radix-accordion-content-height)" },
                    },
                    "accordion-up": {
                      from: { height: "var(--radix-accordion-content-height)" },
                      to: { height: "0" },
                    },
                  },
                  animation: {
                    "accordion-down": "accordion-down 0.2s ease-out",
                    "accordion-up": "accordion-up 0.2s ease-out",
                  },
                },
              }
            }
            </script>
            <style type="text/tailwindcss">
              @layer base {
                :root {
                  --background: 0 0% 100%;
                  --foreground: 222.2 47.4% 11.2%;

                  --muted: 210 40% 96.1%;
                  --muted-foreground: 215.4 16.3% 46.9%;

                  --popover: 0 0% 100%;
                  --popover-foreground: 222.2 47.4% 11.2%;

                  --border: 214.3 31.8% 91.4%;
                  --input: 214.3 31.8% 91.4%;

                  --card: 0 0% 100%;
                  --card-foreground: 222.2 47.4% 11.2%;

                  --primary: 222.2 47.4% 11.2%;
                  --primary-foreground: 210 40% 98%;

                  --secondary: 210 40% 96.1%;
                  --secondary-foreground: 222.2 47.4% 11.2%;

                  --accent: 210 40% 96.1%;
                  --accent-foreground: 222.2 47.4% 11.2%;

                  --destructive: 0 100% 50%;
                  --destructive-foreground: 210 40% 98%;

                  --ring: 215 20.2% 65.1%;

                  --radius: 0.5rem;
                }

                .dark {
                  --background: 224 71% 4%;
                  --foreground: 213 31% 91%;

                  --muted: 223 47% 11%;
                  --muted-foreground: 215.4 16.3% 56.9%;

                  --accent: 216 34% 17%;
                  --accent-foreground: 210 40% 98%;

                  --popover: 224 71% 4%;
                  --popover-foreground: 215 20.2% 65.1%;

                  --border: 216 34% 17%;
                  --input: 216 34% 17%;

                  --card: 224 71% 4%;
                  --card-foreground: 213 31% 91%;

                  --primary: 210 40% 98%;
                  --primary-foreground: 222.2 47.4% 1.2%;

                  --secondary: 222.2 47.4% 11.2%;
                  --secondary-foreground: 210 40% 98%;

                  --destructive: 0 63% 31%;
                  --destructive-foreground: 210 40% 98%;

                  --ring: 216 34% 17%;

                  --radius: 0.5rem;
                }
              }

              @layer base {
                * {
                  @apply border-border;
                }
                body {
                  @apply bg-background text-foreground;
                  font-feature-settings: "rlig" 1, "calt" 1;
                }
              }
            </style>
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
    "baseUrl": ".",
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
          const additionalFiles = curr.registryDependencies?.map((dep) => {
            return components.find((c) => c.name === dep)?.files;
          });
          additionalFiles?.map((files) => {
            files?.map((file) => {
              acc[`src/${file.dir}/${file.name}`] = file.content;
            });
          });
          return acc;
        }, {}),
      }}
      className={cn("!w-full", className)}
      options={{
        externalResources: ["https://cdn.tailwindcss.com"],
        visibleFiles: ["App.tsx", "index.html", "index.tsx", "styles.css"],
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
            const additionalDependencies = curr.registryDependencies?.map(
              (dep) => {
                return components.find((c) => c.name === dep)?.dependencies;
              }
            );
            additionalDependencies?.map((deps) => {
              deps?.map((dep) => {
                acc[dep] = "latest";
              });
            });
            return acc;
          }, {}),
          "lucide-react": "latest",
          "@types/node": "latest",
          "class-variance-authority": "latest",
          clsx: "latest",
          "tailwind-merge": "latest",
          "tailwindcss-animate": "latest",
          typescript: "latest",
          "@types/react": "latest",
        },
        environment: "node",
      }}
    >
      <SandpackPreview
        className="!h-full"
        showOpenInCodeSandbox={false}
        showOpenNewtab={false}
      />
    </SandpackProvider>
  );
};

export default Preview;
