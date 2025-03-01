export function Header() {


    const nextCohortDate = "March 15, 2025";

    return (

        <header className="w-full bg-gray-900 text-white">
        {/* Running Banner */}
        <div className="w-full bg-grey-600 py-2 overflow-hidden">
          <div className="whitespace-nowrap animate-marquee text-center text-sm font-medium">
            🚀 Next Live Cohort Starts on <span className="font-bold">{nextCohortDate}</span> - Enroll Now!
          </div>
        </div>
        </header>
    )
}