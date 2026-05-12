"use client";

import dynamic from "next/dynamic";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/backend/ui";

// Load the actual recharts visualizer dynamically preventing SSR dimension collision warnings completely!
const ActivityChart = dynamic(
    () => import("./ActivityChart"),
    { 
        ssr: false,
        loading: () => <div className="h-full w-full flex items-center justify-center text-white/20 text-xs font-mono tracking-widest animate-pulse">LOADING VISUALIZER...</div>
    }
);

export default function OverviewChart() {
    return (
        <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div className="space-y-1">
                    <CardTitle>Activity Trends</CardTitle>
                    <CardDescription>Real-time platform interactions</CardDescription>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-white/60">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                    Live
                </div>
            </CardHeader>

            <CardContent className="pt-4">
                <div className="h-[250px] w-full">
                    <ActivityChart />
                </div>
            </CardContent>
        </Card>
    );
}
