import { NavLink, Routes, Route, Link } from "react-router-dom";
import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark, FaRegUser } from "react-icons/fa6";
import { MdOutlineSpeaker } from "react-icons/md";

// Accent gradient class used in a few places
const accentText = "bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent";
const accentBorder = "ring-1 ring-white/10 hover:ring-white/20";

const nav = [
  { to: "dashboard", label: "Dashboard", icon: BsGraphDown },
  { to: "bookings", label: "Bookings", icon: FaRegBookmark },
  { to: "users", label: "Users", icon: FaRegUser },
  { to: "products", label: "Products", icon: MdOutlineSpeaker },
];

export default function AdminPage() {
  return (
    <div className="relative min-h-screen text-slate-100">
      {/* Subtle glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-slate-950">
        <div className="absolute inset-0 opacity-60 [background:radial-gradient(900px_600px_at_10%_-10%,rgba(14,165,233,0.15),transparent),radial-gradient(800px_500px_at_90%_0%,rgba(168,85,247,0.12),transparent)]" />
      </div>

      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="hidden lg:flex w-80 shrink-0 flex-col border-r border-white/10 bg-white/5 backdrop-blur-md">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 px-5 py-6">
            <img src="/icon-only.svg" alt="KV Audio" className="h-9 w-9" />
            <span className={`text-2xl font-extrabold tracking-tight ${accentText}`}>kv-audio</span>
          </Link>

          {/* Nav */}
          <nav className="px-3 py-2 space-y-1">
            {nav.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end
                className={({ isActive }) =>
                  [
                    "group relative flex items-center gap-3 rounded-xl px-4 py-3 font-semibold transition-colors",
                    isActive
                      ? `text-white bg-white/10 ${accentBorder}`
                      : "text-slate-300 hover:text-white hover:bg-white/5 " + accentBorder,
                  ].join(" ")
                }
              >
                {/* Icon with subtle gradient */}
                <span className="grid place-items-center rounded-lg bg-white/5 p-2">
                  <Icon className="h-5 w-5 text-white/90" />
                </span>
                <span>{label}</span>
                {/* Active indicator bar */}
                <span
                  className="pointer-events-none absolute left-1 top-1 bottom-1 w-1 rounded-full bg-gradient-to-b from-cyan-400 via-violet-500 to-fuchsia-500 opacity-0 transition-opacity group-[.active]:opacity-100"
                  aria-hidden="true"
                />
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto p-4 text-sm text-slate-400">
            <p>Manage bookings, products, and users.</p>
          </div>
        </aside>

        {/* Main area */}
        <main className="flex-1 overflow-y-auto">
          {/* Top bar */}
          <div className="sticky top-0 z-10 border-b border-white/10 bg-slate-950/50 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
              <h1 className="text-xl font-semibold">
                <span className={accentText}>Admin</span> Console
              </h1>
              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
                  <span className="i-lucide-search" />
                  <input
                    placeholder="Search..."
                    className="bg-transparent outline-none placeholder:text-slate-400"
                  />
                </div>
                <div className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 font-bold">
                  KV
                </div>
              </div>
            </div>
          </div>

          {/* Routed views */}
          <div className="mx-auto max-w-7xl p-6">
            <Routes>
              <Route index element={<DashboardView />} />
              <Route path="dashboard" element={<DashboardView />} />
              <Route path="bookings" element={<BookingsView />} />
              <Route path="users" element={<UsersView />} />
              <Route path="products" element={<ProductsView />} />
              <Route path="*" element={<NotFoundView />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ---------- Views (simple, clean placeholders) ---------- */

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset,0_10px_30px_-10px_rgba(139,92,246,0.25)] ${className}`}>
      {children}
    </div>
  );
}

function Stat({ icon: Icon, label, value, delta }) {
  return (
    <Card>
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-fuchsia-500/20 ring-1 ring-white/10">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <div className="text-sm text-slate-400">{label}</div>
          <div className="text-2xl font-bold">{value} <span className="text-sm font-semibold text-emerald-400">{delta}</span></div>
        </div>
      </div>
    </Card>
  );
}

function DashboardView() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <Stat icon={FaRegBookmark} label="Active Bookings" value="12" delta="+3" />
        <Stat icon={FaRegUser} label="Total Users" value="248" delta="+12" />
        <Stat icon={MdOutlineSpeaker} label="Products" value="86" delta="+5" />
        <Stat icon={BsGraphDown} label="Revenue (mo)" value="$7,420" delta="+8%" />
      </div>

      <Card>
        <h2 className="mb-3 text-lg font-semibold">Overview</h2>
        <p className="text-slate-300">
          Quick snapshot of your store performance. Replace this with charts or tables whenever ready.
        </p>
      </Card>
    </div>
  );
}

function BookingsView() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Bookings</h2>
      <Card>
        <p className="text-slate-300">List and manage bookings here.</p>
      </Card>
    </div>
  );
}

function UsersView() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Users</h2>
      <Card>
        <p className="text-slate-300">User management goes here.</p>
      </Card>
    </div>
  );
}

function ProductsView() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Products</h2>
      <Card>
        <p className="text-slate-300">Create, edit, and organize equipment.</p>
      </Card>
    </div>
  );
}

function NotFoundView() {
  return (
    <Card>
      <p className="text-slate-300">Nothing to see here.</p>
    </Card>
  );
}