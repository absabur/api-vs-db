import Link from "next/link";

export default async function StudentPage() {
  const response = await fetch(`${process.env.CLIENT_URL}/api/student`);
  const { students } = await response.json();
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Student Directory
      </h2>

      {students.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-600">
            No student data found matching your criteria.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {students.map((member) => (
            <div
              key={member._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Avatar Section */}
                  {member.avatar && (
                    <div className="flex-shrink-0">
                      <img
                        src={member.avatar.url}
                        alt="Avatar"
                        className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
                      />
                    </div>
                  )}

                  {/* Main Content */}
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <Link href={`/student/${member._id}`} className="group">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {member.name}
                        </h3>
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="text-gray-800">{member.email || "-"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="text-gray-800">{member.phone || "-"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Type</p>
                        <p className="text-gray-800">{member.type || "-"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Profession</p>
                        <p className="text-gray-800">
                          {member.profession || "-"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Batch</p>
                        <p className="text-gray-800">
                          {member.batch?.name || "-"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Status</p>
                        <p
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            member.isActive
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {member.isActive ? "Active" : "Inactive"}
                        </p>
                      </div>
                    </div>

                    {member.about && (
                      <div className="mt-4">
                        <p className="text-sm text-gray-500">About</p>
                        <p className="text-gray-800 line-clamp-2">
                          {member.about}
                        </p>
                      </div>
                    )}

                    <div className="flex justify-between mt-4 text-sm text-gray-500">
                      <span>
                        Created: {member.createDate?.date} at{" "}
                        {member.createDate?.formatedTime}
                      </span>
                      <span>
                        Updated: {member.updateDate?.date} at{" "}
                        {member.updateDate?.formatedTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Link
        className="mt-3 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        href="/"
        rel="noopener noreferrer"
      >
        Home
      </Link>
    </div>
  );
}
