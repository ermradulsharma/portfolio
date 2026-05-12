import { CheckCircle2, Clock, RefreshCw } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/backend/ui";

const tasks = [
  { id: 1, name: "Core UI Upgrade", user: "AM", time: "2m ago", status: "Done", variant: "success", icon: CheckCircle2 },
  { id: 2, name: "API Integration", user: "JS", time: "15m ago", status: "In Progress", variant: "progress", icon: RefreshCw },
  { id: 3, name: "Database Sync", user: "RL", time: "1h ago", status: "Pending", variant: "pending", icon: Clock },
];

const styles = {
  success: "bg-green-500/10 text-green-400 border-green-500/20",
  progress: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  pending: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export default function TaskFeed() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle>Latest Tasks</CardTitle>
        <a href="#" className="text-xs font-medium text-white/40 hover:text-cyan-400 transition-colors">View All</a>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-3">

          {tasks.map((task) => {
            const StatusIcon = task.icon;
            return (
              <div key={task.id} className="group flex items-center justify-between bg-white/[0.02] hover:bg-white/[0.05] border border-transparent hover:border-white/5 p-3 rounded-xl transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-3">
                  {/* Letter Avatar */}
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-xs font-bold text-white/80 group-hover:border-cyan-500/30 transition-colors">
                    {task.user}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">{task.name}</h4>
                    <p className="text-[11px] text-white/40">{task.time}</p>
                  </div>
                </div>

                <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border ${styles[task.variant]}`}>
                  <StatusIcon size={12} className={task.variant === 'progress' ? 'animate-spin-slow' : ''} />
                  {task.status}
                </span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

