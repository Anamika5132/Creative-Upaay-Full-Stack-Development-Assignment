import {
  HomeOutlined,
  MessageOutlined,
  AssignmentOutlined,
  PeopleOutlined,
  SettingsOutlined,
  LightbulbOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

const menuItems = [
  { icon: HomeOutlined, label: "Home", active: false },
  { icon: MessageOutlined, label: "Messages", active: false },
  { icon: AssignmentOutlined, label: "Tasks", active: false },
  { icon: PeopleOutlined, label: "Members", active: false },
  { icon: SettingsOutlined, label: "Settings", active: false },
];

const projects = [
  { name: "Mobile App", color: "#7AC554", active: true },
  { name: "Website Redesign", color: "#FFA500", active: false },
  { name: "Design System", color: "#E4CCFE", active: false },
  { name: "Wireframes", color: "#76A4EA", active: false },
];

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <aside
      className={cn(
        "w-64 bg-[#FFFFFF] border-r border-border h-screen fixed left-0 top-0 flex flex-col",
        className
      )}
    >
      {/* Logo Section */}
      <div className="p-6 flex items-center gap-2">
        <div className="w-10 h-10 flex items-center justify-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="12" r="7" fill="#512FE5" opacity="0.8" />
            <circle cx="12" cy="24" r="6" fill="#8B5CF6" opacity="0.7" />
            <circle cx="28" cy="24" r="6" fill="#A78BFA" opacity="0.7" />
          </svg>
        </div>
        <span className="text-lg font-bold text-gray-800">Project M.</span>
      </div>

      {/* Divider after logo */}
      <div className="border-b border-gray-200 mx-4 mb-4"></div>

      {/* Menu Items */}
      <nav className="px-4 py-2">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={item.label}>
              <button
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sm",
                  item.active
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>

              {/* Divider after Settings */}
              {index === menuItems.length - 1 && (
                <div className="border-b border-gray-200 mt-3"></div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* My Projects Section */}
      <div className="px-4 py-4 mt-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            My Projects
          </span>
          <button className="text-gray-500 hover:text-gray-800">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 3.33333V12.6667M3.33333 8H12.6667"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <ul className="space-y-2">
          {projects.map((project) => (
            <li key={project.name}>
              <button
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all text-sm",
                  project.active
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: project.color }}
                  />
                  <span className="flex-1 text-left">{project.name}</span>
                </div>

                {/* Only Mobile App shows dots */}
                {project.name === "Mobile App" && (
                  <MoreHorizOutlined className="w-5 h-5 text-gray-500" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Thoughts Time Section */}
      <div className="mt-auto px-4 pb-6">
        <div className="bg-[#F5F5F5] rounded-2xl p-6 flex flex-col items-center text-center">
          <LightbulbOutlined className="w-10 h-10 text-yellow-400 mb-3" />
          <h3 className="font-semibold text-sm text-gray-800 mb-2">
            Thoughts Time
          </h3>
          <p className="text-xs text-gray-600 mb-4 leading-relaxed px-2">
            We don't have any notice for you, till then you can share your
            thoughts with your peers.
          </p>
          <input
            type="text"
            placeholder="Write a message"
            className="w-full px-3 py-2 bg-white rounded-lg text-xs border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>
    </aside>
  );
};
