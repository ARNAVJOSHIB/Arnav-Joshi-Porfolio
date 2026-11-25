/**
 * Authentic, project-specific architectural blueprints grounded directly in the
 * inspected source files and specifications of AURELIAN OS and The Chronicle Finance,
 * preserving each project's own visual identity and distinguishing implemented vs. planned layers.
 */

export function AurelianArchitectureDiagram() {
  const runtimeStates = [
    "Booting",
    "Configuring",
    "Registering",
    "Ready",
    "Running",
    "Shutdown",
  ];

  const kernelModules = [
    { name: "AurelianKernel", role: "Lifecycle & Dispatch Metrics", status: "IMPLEMENTED" },
    { name: "LocalCommandBus", role: "Single-Handler Intent Routing", status: "IMPLEMENTED" },
    { name: "LocalQueryBus", role: "Read-Only Deterministic Queries", status: "IMPLEMENTED" },
    { name: "LocalEventBus", role: "Broadcast State Notifications", status: "IMPLEMENTED" },
    { name: "LocalEngineRegistry", role: "Duplicate Guard & Lifecycle", status: "IMPLEMENTED" },
    { name: "Agency Engine (RFC-002)", role: "Advisory Pipeline & Agency Score", status: "SPECIFIED" },
  ];

  return (
    <div className="space-y-4 border border-[#D8C57C]/25 bg-[#141519] p-4 text-[#ECEAE4]">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D8C57C]/20 pb-2.5">
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D8C57C]">
          AURELIAN KERNEL &amp; ARCH-000 IMPLEMENTATION STATUS
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#ECEAE4]/60">
          SRC/KERNEL + SPECIFICATIONS
        </span>
      </div>

      {/* Kernel Modules vs Specified Components */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {kernelModules.map((mod) => (
          <div
            key={mod.name}
            className="border border-white/10 bg-[#1B1D23] px-3 py-2"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[10px] font-bold text-[#F3E59A]">
                {mod.name}
              </span>
              <span
                className={`px-1.5 py-0.5 font-mono text-[8px] font-bold tracking-[0.1em] ${
                  mod.status === "IMPLEMENTED"
                    ? "bg-[#D8C57C]/20 text-[#F3E59A]"
                    : "border border-white/20 text-[#ECEAE4]/70"
                }`}
              >
                {mod.status}
              </span>
            </div>
            <p className="mt-1 text-[10px] text-[#ECEAE4]/72">{mod.role}</p>
          </div>
        ))}
      </div>

      {/* RM-001 State Transition Chain */}
      <div className="border-t border-white/10 pt-3">
        <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#D8C57C]">
          KERNEL LIFECYCLE (SDD-001 / RM-001) · DEFERRED: BLACKBOARD, SCHEDULER, UI
        </p>
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.08em]">
          {runtimeStates.map((state, idx) => (
            <span key={state} className="inline-flex items-center gap-1.5">
              <span
                className={`border px-2 py-0.5 ${
                  state === "Ready" || state === "Shutdown"
                    ? "border-[#D8C57C]/65 text-[#F3E59A]"
                    : "border-white/15 text-[#ECEAE4]/75"
                }`}
              >
                {state}
              </span>
              {idx < runtimeStates.length - 1 && (
                <span className="text-[#D8C57C]">→</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ChronicleArchitectureDiagram() {
  const modules = [
    {
      name: "Broadsheet Editorial UI",
      detail: "Next.js 16 · Playfair Display · UnifrakturMaguntia · #F8F5EF Paper",
      status: "IMPLEMENTED",
    },
    {
      name: "8 TypeScript Simulation Engines",
      detail: "Compound, DCF, Monte Carlo, GBM, VaR, Frontier, Correlation, Volatility",
      status: "IMPLEMENTED",
    },
    {
      name: "7 Visualization Systems",
      detail: "Bubble Ledger, Stochastic Path Cloud, D3 Efficient Frontier, VaR Histogram",
      status: "IMPLEMENTED",
    },
    {
      name: "Supabase Auth & RLS Persistence",
      detail: "Protected Simulation Routes (/auth) & Simulation Ledger",
      status: "IMPLEMENTED",
    },
    {
      name: "Android Companion Client",
      detail: "Kotlin · Jetpack Compose · Hilt DI · Room DB (android/)",
      status: "IMPLEMENTED",
    },
    {
      name: "FastAPI / Python Backend Spec",
      detail: "Documented target service layer in SYSTEM_ARCHITECTURE.md",
      status: "PLANNED SPEC",
    },
  ];

  return (
    <div className="space-y-3 border border-[#111111]/20 bg-[#F8F5EF] p-4 text-[#111111]">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#111111]/15 pb-2.5">
        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#182230]">
          CHRONICLE FINANCE · CODEBASE ARCHITECTURE
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#444444]">
          IVORY &amp; NAVY BROADSHEET SYSTEM
        </span>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {modules.map((mod) => (
          <div
            key={mod.name}
            className="border border-[#111111]/12 bg-[#F2EEE6] px-3 py-2"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.06em] text-[#182230]">
                {mod.name}
              </span>
              <span
                className={`px-1.5 py-0.5 font-mono text-[8px] font-bold tracking-[0.08em] ${
                  mod.status === "IMPLEMENTED"
                    ? "bg-[#182230] text-[#F8F5EF]"
                    : "border border-[#B69B57] text-[#8B3A3A]"
                }`}
              >
                {mod.status}
              </span>
            </div>
            <p className="mt-1 text-[10px] leading-snug text-[#444444]">
              {mod.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
