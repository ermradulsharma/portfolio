import React from "react";

const Table = React.forwardRef(({ className = "", ...props }, ref) => (
    <div className="relative w-full overflow-auto rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm shadow-2xl">
        <table ref={ref} className={`w-full caption-bottom text-sm border-collapse ${className}`} {...props} />
    </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef(({ className = "", ...props }, ref) => (
    <thead ref={ref} className={`border-b border-white/10 bg-white/[0.03] ${className}`} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef(({ className = "", ...props }, ref) => (
    <tbody ref={ref} className={`divide-y divide-white/5 [&_tr:last-child]:border-0 ${className}`} {...props} />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef(({ className = "", ...props }, ref) => (
    <tfoot ref={ref} className={`border-t border-white/10 bg-white/[0.03] font-medium [&>tr]:last:border-b-0 ${className}`} {...props} />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef(({ className = "", ...props }, ref) => (
    <tr ref={ref} className={`transition-colors hover:bg-white/[0.03] group data-[state=selected]:bg-white/10 ${className}`} {...props} />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef(({ className = "", ...props }, ref) => (
    <th ref={ref} className={`p-4 text-center align-middle text-xs font-medium text-white/50 uppercase tracking-wider [&:has([role=checkbox])]:pr-0 ${className}`} {...props} />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef(({ className = "", ...props }, ref) => (
    <td ref={ref} className={`p-3 text-center align-middle [&:has([role=checkbox])]:pr-0 ${className}`} {...props} />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef(({ className = "", ...props }, ref) => (
    <caption ref={ref} className={`mt-4 text-sm text-white/40 ${className}`} {...props} />
));
TableCaption.displayName = "TableCaption";

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
