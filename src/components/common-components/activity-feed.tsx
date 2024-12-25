import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    user: "Task Updated",
    action: "Hikmat",
    target: "Updated a Task",
    time: "1 Min Ago",
    avatar: "H"
  },
  {
    user: "Deal Added",
    action: "Harry",
    target: "Added a Deal",
    time: "10 Min Ago",
    avatar: "H"
  },
  // {
  //   user: "Dock Updated",
  //   action: "John",
  //   target: "Updated a Dock",
  //   time: "1 Hour Ago",
  //   avatar: "J"
  // },
  // {
  //   user: "Task Updated",
  //   action: "Hikmat",
  //   target: "Updated a Task",
  //   time: "4 Hours Ago",
  //   avatar: "H"
  // }
]

export function ActivityFeed() {
  return (
    <div className="bg-white p-6 rounded-lg  ">
      <h3 className="font-semibold mb-4">Recent Activities</h3>
      <div className="space-y-4">
        {activities.map((activity, i) => (
          <div key={i} className="flex items-start space-x-4">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-blue-100 text-blue-600">{activity.avatar}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium">{activity.user}</p>
              <p className="text-xs text-gray-500">{activity.action}</p>
              <p className="text-xs text-gray-500">{activity.target}</p>
              <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

