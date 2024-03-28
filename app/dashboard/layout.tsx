
import {PropsWithChildren} from "react";
import TeamSwitcher from "@/lib/components/dashboard/team-switcher";
import {MainNav} from "@/lib/components/dashboard/main-nav";
import {Search} from "lucide-react";
import {UserNav} from "@/lib/components/dashboard/user-nav";

const sections = [
  {
    name: 'Overview (Test)',
    path: '/a',
  },
  {
    name: 'Cocina',
    path: '/a/cocina',
  },
  {
    name: 'Cajero',
    path: '/a/cajero',
  },

]

type DashboardLayoutProps = {
} & PropsWithChildren;

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav sections={sections} className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6 bg-primary-foreground">
          <div>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout;