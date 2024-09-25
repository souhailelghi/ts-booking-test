import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar"; 
import { 
  LayoutDashboard, 
  ClipboardList, 
  UserX, 
  List, 
  Users, 
  Settings,
  Menu
} from "lucide-react"; 

const bookings = [
  {
    id: 1,
    dateBooked: "2024-09-18 09:46",
    timeBooked: "12H to 13H",
    name: "ghiouane souhail el",
    sport: "Single Court for Badminton",
    player: "Badminton"
  },
  {
    id: 2,
    dateBooked: "2024-09-15 15:52",
    timeBooked: "10H to 11H",
    name: "ghiouane souhail el",
    sport: "Indoor Basketball Court",
    player: "Basketball"
  },
];

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="container-fluid h-100 bg-light">
      <div className="row h-100">
        {/* Sidebar */}
        <aside className={`col-md-2 bg-dark text-white pt-4 vh-100 ${isSidebarOpen ? 'd-block' : 'd-none'} d-md-block`}>
          <div className="text-center mb-4">
            <div className="d-inline-block bg-primary rounded-circle p-2">UB</div>
            <span className="h3 ms-2">UIR</span>
          </div>
          <nav className="nav flex-column">
            <button className="btn btn-dark text-start mb-2">
              <LayoutDashboard className="me-2" />
              Dashboard
            </button>
            <button className="btn btn-dark text-start mb-2">
              <ClipboardList className="me-2" />
              Sport List
            </button>
            <button className="btn btn-primary text-start mb-2">
              <ClipboardList className="me-2" />
              Booking List
            </button>
            <button className="btn btn-dark text-start mb-2">
              <UserX className="me-2" />
              Black List
            </button>
            <button className="btn btn-dark text-start mb-2">
              <List className="me-2" />
              Categories List
            </button>
            <button className="btn btn-dark text-start mb-2">
              <Users className="me-2" />
              User List
            </button>
            <button className="btn btn-dark text-start mb-2">
              <Settings className="me-2" />
              Settings
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="col-md-10">
          {/* Header */}
          <header className="d-flex justify-content-between align-items-center p-3 bg-white shadow-sm">
            <div className="d-flex align-items-center">
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="btn btn-outline-secondary d-md-none">
                <Menu />
              </button>
              <h2 className="ms-3">Sports Booking System - Admin</h2>
            </div>
            <div className="d-flex align-items-center">
              <Avatar>
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
              <span className="ms-2">Administrator Admin</span>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="p-4">
            <h3 className="mb-4">Booking List</h3>
            <div className="d-flex justify-content-end mb-4">
              <input className="form-control w-25" type="search" placeholder="Search..." />
            </div>
            <div className="table-responsive bg-white shadow-sm rounded">
              <Table >
                <TableHeader>
                  <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead>Date Booked</TableHead>
                    <TableHead>Time Booked</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Sport</TableHead>
                    <TableHead>Player</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell>{booking.id}</TableCell>
                      <TableCell>{booking.dateBooked}</TableCell>
                      <TableCell>{booking.timeBooked}</TableCell>
                      <TableCell>{booking.name}</TableCell>
                      <TableCell>{booking.sport}</TableCell>
                      <TableCell>{booking.player}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
