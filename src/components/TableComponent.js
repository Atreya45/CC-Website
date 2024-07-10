"use client"; // Add this line at the top

import React from "react";
import "./TableComponent.css";
import moment from "moment-timezone"; // Import moment-timezone library
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const TableComponent = ({ contests }) => {
  // Function to convert UTC time to IST
  const convertToIST = (utcTime) => {
    return moment.utc(utcTime).tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss");
  };

  // Ensure contests is not null or undefined
  if (!contests || contests.length === 0) {
    return <div>No upcoming contests</div>; // Handle case where contests are empty or not fetched
  }

  const columns = [
    {
      key: "event",
      label: "Event",
    },
    {
      key: "start",
      label: "Start Time (IST)",
    },
    {
      key: "end",
      label: "End Time (IST)",
    },
    {
      key: "duration",
      label: "Duration",
    },
    {
      key: "link",
      label: "Link",
    },
  ];

  const rows = contests.map((contest) => ({
    key: contest.id,
    event: contest.event,
    start: convertToIST(contest.start),
    end: convertToIST(contest.end),
    duration: `${Math.floor(contest.duration / 60)} minutes`,
    link: (
      <a href={contest.href} target="_blank" rel="noopener noreferrer">
        Link
      </a>
    ),
  }));

  return (
    <div className="blurred-table-container">
      <table className="blurred-table">
        <Table
          aria-label="Upcoming Programming Contests"
          className="nextui-table"
        >
          <TableHeader>
            {columns.map((column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            ))}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => <TableCell>{item[columnKey]}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </table>
    </div>
  );
};

export default TableComponent;
