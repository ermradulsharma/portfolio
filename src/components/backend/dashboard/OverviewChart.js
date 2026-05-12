"use client";

import { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/backend/ui";

const data = [
  { name: "Mon", value: 4000 },
  { name: "Tue", value: 3000 },
  { name: "Wed", value: 5000 },
  { name: "Thu", value: 2780 },
  { name: "Fri", value: 6890 },
  { name: "Sat", value: 2390 },
  { name: "Sun", value: 8490 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/80 backdrop-blur-lg border border-white/10 p-3 rounded-xl shadow-2xl">
        <p className="text-white/60 text-xs font-medium mb-1">{label}</p>
        <p className="text-cyan-400 font-bold text-sm">{`Activity: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

export default function OverviewChart() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      setIsMounted(true);
    });
    return () => cancelAnimationFrame(rafId);
  }, []);

  if (!isMounted) {
    return (
      <Card className="lg:col-span-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div className="space-y-1"><CardTitle>Activity Trends</CardTitle></div>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="h-[250px] w-full flex items-center justify-center text-white/30 text-xs">Initializing visualizer...</div>
        </CardContent>
      </Card>
    );
  }

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

          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" opacity={0.05} vertical={false} />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: "rgba(34, 211, 238, 0.2)", strokeWidth: 2 }} />
              <Area
                type="monotone"
                dataKey="value"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorPv)"
                animationDuration={1500}
                stroke="#22d3ee"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

