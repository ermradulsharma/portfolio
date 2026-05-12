"use client";

import { ResponsiveContainer, AreaChart, Area } from "recharts";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/backend/ui";

const sparklineData = [
  { v: 30 }, { v: 40 }, { v: 35 }, { v: 50 }, { v: 49 }, { v: 60 }, { v: 70 }, { v: 90 }
];

const sparklineDown = [
  { v: 80 }, { v: 75 }, { v: 60 }, { v: 65 }, { v: 50 }, { v: 45 }, { v: 35 }, { v: 30 }
];

export default function MetricCard({ title, value, description, isTrendUp, icon: Icon }) {
  const data = isTrendUp ? sparklineData : sparklineDown;
  const color = isTrendUp ? "#22d3ee" : "#f87171"; // Cyan-400 : Red-400

  return (
    <Card className="group p-6">
      <CardContent className="p-0">
        <div className="relative flex justify-between items-start">
          <div>
            <p className="text-white/50 text-sm font-medium tracking-wide">{title}</p>
            <h3 className="text-3xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              {value}
            </h3>
          </div>

          {Icon && (
            <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 group-hover:scale-110 group-hover:border-white/20 ${isTrendUp ? 'text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)]' : 'text-red-400'}`}>
              <Icon size={20} strokeWidth={2} />
            </div>
          )}
        </div>


        <div className="mt-6 flex items-end justify-between gap-4">
          {/* Inline Trend Indicator */}
          <div className="flex flex-col justify-end pb-1">
            <div className={`flex items-center gap-1 text-sm font-semibold ${isTrendUp ? "text-cyan-400" : "text-red-400"}`}>
              {isTrendUp ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              {description.split(" ")[0]}
            </div>
            <p className="text-xs text-white/40 whitespace-nowrap mt-0.5">vs last cycle</p>
          </div>

          {/* Mini-Spark Area Chart */}
          <div className="h-12 w-24 relative -mb-2 -mr-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id={`gradient-${title.replace(/\s+/g, '')}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity={0.4} />
                    <stop offset="100%" stopColor={color} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="v"
                  stroke={color}
                  strokeWidth={2}
                  fill={`url(#gradient-${title.replace(/\s+/g, '')})`}
                  isAnimationActive={true}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

