import React from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const items = [
  {
    id: "1",
    name: "Alex Thompson",
    email: "alex.t@company.com",
    location: "San Francisco, US",
    status: "Active",
    balance: "$1,250.00",
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah.c@company.com",
    location: "Singapore",
    status: "Active",
    balance: "$600.00",
  },
  {
    id: "3",
    name: "James Wilson",
    email: "j.wilson@company.com",
    location: "London, UK",
    status: "Inactive",
    balance: "$650.00",
  },
  {
    id: "4",
    name: "Maria Garcia",
    email: "m.garcia@company.com",
    location: "Madrid, Spain",
    status: "Active",
    balance: "$0.00",
  },
  {
    id: "5",
    name: "David Kim",
    email: "d.kim@company.com",
    location: "Seoul, KR",
    status: "Active",
    balance: "-$1,000.00",
  },
];

function ComparisionTable() {
  const { theme, color } = useContext(ThemeContext);
  return (
    <div
      className="w-[70%] m-20 border backdrop-blur-sm
        border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 cursor-pointer overflow-hidden inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none rounded-xl"
      style={{
        background: theme
          ? "linear-gradient(135deg, #18212F 0%, #1e293b 100%)"
          : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
        color: color ? "white" : "#111827",
      }}
    >
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent overflow-hidden">
            <TableHead>Plan</TableHead>
            <TableHead>Ram</TableHead>
            <TableHead>CPU</TableHead>
            <TableHead>SSD Storage</TableHead>
            <TableHead>Price (Ours)</TableHead>
            <TableHead>Price (Others)</TableHead>
            <TableHead>Notes on Others</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.location}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell className="text-right">{item.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="bg-transparent">
        </TableFooter>
      </Table>
    </div>
  );
}

export default ComparisionTable;
