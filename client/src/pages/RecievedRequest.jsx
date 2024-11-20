import DashboardNavbar from "../components/DashboardNavbar"

const RecievedRequest = () => {
  return (
    <div>
        {/* navbar */}
        <DashboardNavbar />
        <div>
            <h1 className="text-center text-lg font-bold mt-40">No Received Request</h1>
        </div>
    </div>
  )
}

export default RecievedRequest