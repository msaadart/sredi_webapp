// overall hours
export type barChart = {
  month: string;
  cumulative: number;
  total: number;
};

export type chartDount = {
  name: string;
  hours: number;
  percentage: string;
  name_hours: string;
};

//employee summary
export type employeeSummaryTableHeader = {
  field: string;
  cellRenderer?:unknown;
};

export type EmployeeSummary = {
  Name: string;
  profilePhoto: string,
  Timesheet_Expected: number;
  Unconfirmed_Timesheet: number;
  Confirmed_Timesheet: number;
  Missing_Timesheets: number;
};

// timesheet summary
export type timesheetSummary = {
  title: string;
  value: number;
  change: number;
  action?: string;
  actionLabel?: string;
};

// project Hours
export type chartsAdditionalData = {
  shape: Shape;
  axes_position: string;
  label_add_word: string;
  bg_fill:string;
};

export type Shape = 'circle' | 'square' | 'cross' | 'plus' | 'triangle';

export type columnChart = {
  name: string;
  hours: number;
  color: string;
};


export type TTableHeader = {
  field: string;
  cellRenderer?:unknown;
};

export type REDSummary = {
  Name: string,
  profilePhoto: string,
  Tracking_Score: string,
  Expected_Hours: number,
  Worked_Hours: number,
  Tracked_Hours: number,
  New:number,
  Fiber:number,
  FD_Test:number,
  SRED_Hours:number
};
