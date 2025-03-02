export function Header() {
    const nextCohortDate = "May 15, 2025";

    return (
        <header className="w-full bg-gray-900 text-white">
        {/* Running Banner */}
        <div className="w-full bg-grey-600 py-2 overflow-hidden">
          <div className="whitespace-nowrap text-center text-xs sm:text-sm font-medium">
            <a href="/liveClass" className="text-white hover:underline">
              🚀 Next Live Cohort Starts on <span className="font-bold">{nextCohortDate}</span> - Click To Enroll Now!
            </a>
          </div>
        </div>
        </header>
    )
}