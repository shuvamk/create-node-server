"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Github,
  Terminal,
  Shield,
  Zap,
  Activity,
  Box,
  BarChart,
} from "lucide-react";
import Link from "next/link";
import { CopyButton } from "@/components/copy-button";
import { GridPattern } from "@/components/grid-pattern";
import { RetroGrid } from "@/components/ui/retro-grid";

export default function Home() {
  const features = [
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "TypeScript First",
      description:
        "Built with TypeScript for better maintainability and developer experience.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security Built-in",
      description:
        "Pre-configured security with Helmet, CORS, and rate limiting.",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "OpenTelemetry",
      description: "Distributed tracing and monitoring out of the box.",
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Performance",
      description: "Optimized for production with response compression.",
    },
    {
      icon: <Box className="h-6 w-6" />,
      title: "API Documentation",
      description: "Swagger/OpenAPI integration for easy API documentation.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Developer Experience",
      description:
        "Hot reload, ESLint, Prettier, and Git hooks pre-configured.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-32 mx-auto max-w-7xl overflow-hidden">
        <GridPattern />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center relative z-10"
        >
          <h1 className="mb-8 text-6xl font-bold tracking-tight">
            Express TypeScript
            <span className="text-primary"> Starter</span>
          </h1>
          <p className="mx-auto mb-12 text-xl text-muted-foreground max-w-2xl">
            A production-ready Express.js starter template with TypeScript,
            comprehensive tooling, security best practices, and monitoring
            capabilities.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <Link href="https://github.com/shuvamk/express-typescript-starter">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Link>
            </Button>
            <div className="relative group">
              <Button size="lg" variant="outline">
                npx @shuvamk/create-node-server
              </Button>
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <CopyButton value="npm i @shuvamk/create-node-server" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-background py-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-xl text-muted-foreground">
              Built with modern tools and best practices in mind
            </p>
          </motion.div>
        </div>

        <div className="px-4 max-w-[90rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group">
                  <div className="space-y-4 h-full flex flex-col">
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground flex-grow">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Get Started Now</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start building your next Express.js application with confidence
          </p>
          <div className="inline-flex items-center p-4 bg-card rounded-lg shadow-lg">
            <code className="text-sm">npx @shuvamk/create-node-server</code>
            <CopyButton value="npx @shuvamk/create-node-server my-app" />
          </div>
          <div className="mt-4">
            <Link
              href="https://www.npmjs.com/package/@shuvamk/create-node-server"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on npm
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 bg-background">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-muted-foreground">
            Created by{" "}
            <Link
              href="https://github.com/shuvamk"
              className="text-primary hover:underline"
            >
              shuvamk
            </Link>{" "}
            • MIT License
          </p>
        </div>
      </footer>
    </div>
  );
}
