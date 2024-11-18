import { EllipsisVerticalIcon } from "@heroicons/react/16/solid";
import { COLORS } from "../../styles/mansonary";;
import { PRIORITY } from "../../constants";
import { Task } from "../../data/mansonary";

export default function Card({ task }: { task: Task }) {
  const {
    deadline,
    description,
    taskCategory,
    members,
    numberOfMembers,
    priorityTaskTitle,
    projectName,
    priority,
  } = task;

  // Generate initials from a name
  function generateInitials({ name }: { name: string }) {
    const [firstName, lastName] = name.split(" ");
    return `${firstName?.[0]?.toUpperCase() || ""}${lastName?.[0]?.toUpperCase() || ""}`;
  }

  // Generate a consistent random color from a name
  function generateRandomColor({ name }: { name: string }) {
    if (!name) {
      throw new Error("Name is required to generate a color.");
    }

    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      color += value.toString(16).padStart(2, "0");
    }

    return color;
  }

  return (
    <div  className="bg-white rounded-[20px] border border-gray-200 p-4 flex flex-col gap-2">
      <div className="flex justify-between">
        <p className="capitalize">{taskCategory}</p>
        <EllipsisVerticalIcon className="h-5 w-5" />
      </div>

      <h3
        style={{ color: COLORS.PRIMARY }}
        className="capitalize text-xl font-bold"
      >
        {priorityTaskTitle}
      </h3>
      <p className="mb-2 text-gray-500 text-[14px]">{projectName}</p>
      <p className="text-md font-medium text-gray-700">{description}</p>

      {/* Avatar Group */}
      <div className="avatar-group -space-x-6 rtl:space-x-reverse">
        {members.map((member) => (
          <div
            key={member.id}
            style={{ backgroundColor: generateRandomColor({ name: member.name }) }}
            className="avatar"
          >
         <div className="py-auto w-8 h-8 flex items-center justify-center rounded-full">
  <span className="text-sm font-bold text-white text-center flex items-center justify-center">
    {generateInitials({ name: member.name })}
  </span>
</div>

          </div>
        ))}
      </div>

      {/* Buttons for Priority and Deadline */}
      <div className="flex gap-3 mt-4">
        <button className={`py-1 px-3 text-sm ${priority==PRIORITY.HIGH?'bg-red-300':
          priority===PRIORITY.LOW?'bg-blue-400':priority==PRIORITY.MEDIUM?'bg-orange-300':'bg-gray-400'
        } text-white rounded`}>
          {priority}
        </button>
        <button className="py-1 px-3 text-sm bg-gray-200 rounded">
          {deadline}
        </button>
      </div>
    </div>
  );
}
