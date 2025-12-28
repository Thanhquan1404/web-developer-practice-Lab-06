import { fetchUserProfile } from '@/lib/api/user';
import { SettingsToggle } from '@/components/SettingsToggle';

export default async function DashboardPage() {
  const user = await fetchUserProfile();

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">User Profile</h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{user.name}</h2>
              <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">ID</label>
              <p className="mt-1 text-sm text-gray-900 dark:text-white">{user.id}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Role</label>
              <p className="mt-1 text-sm text-gray-900 dark:text-white">{user.role}</p>
            </div>
          </div>
        </div>

        {/* Embed Client Component */}
        <SettingsToggle />
      </div>
    </div>
  );
}