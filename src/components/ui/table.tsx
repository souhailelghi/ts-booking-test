import { ReactNode } from 'react';

interface TableProps {
  children: ReactNode;
}

export const Table = ({ children }: TableProps) => {
  return (
    <table className="min-w-full table-auto bg-white rounded-lg shadow-md">
      {children}
    </table>
  );
};

export const TableHeader = ({ children }: TableProps) => {
  return (
    <thead className="bg-gray-200 text-left">
      <tr>{children}</tr>
    </thead>
  );
};

export const TableBody = ({ children }: TableProps) => {
  return <tbody className="text-gray-700">{children}</tbody>;
};

export const TableRow = ({ children }: TableProps) => {
  return <tr className="border-b">{children}</tr>;
};

export const TableHead = ({ children }: TableProps) => {
  return <th className="px-4 py-2 font-semibold">{children}</th>;
};

export const TableCell = ({ children }: TableProps) => {
  return <td className="px-4 py-2">{children}</td>;
};
