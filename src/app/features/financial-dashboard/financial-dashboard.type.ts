export type barChartStaff = {
  month: string;
  sr_ed: number;
  unclaimed: number;
};

// project Hours
export type chartsAdditionalData = {
  shape: Shape;
  axes_position: string;
  label_add_word: string;
  bg_fill: string;
  axes_left_title: string;
  axes_center_title: string;
  legend_position: string;
};

export type Shape = 'circle' | 'square' | 'cross' | 'plus' | 'triangle';

export type columnChart = {
  name: string;
  hours: number;
  color: string;
};


// projections types
export type Quarter = {
  amount?: string;
  hours?: string;
  start_Date: string;
  end_Date: string;
  quarter: string;
};

export type Project = {
  name_status: string;
  amount?: string;
  hours?: string;
  class_name: string;
};

export type DataSection = {
  quater: Quarter[];
  current_year: string;
  full_year: string;
  projects: Project[];
  hours_status: boolean;
};

export type Projections = {
  show_hours: DataSection;
  show_expenditures: DataSection;
  show_credits: DataSection;
};

export enum TProjectionType {
  show_credits = 'show_credits',
  show_expenditures = 'show_expenditures',
  show_hours = 'show_hours'
}

export type TVendorInvoice = {
  invoice_submitted: string;
  invoice_number: number; 
  invoice_amount: number;
  vendor_name: string;
  name_of_provider: string; 
  project: string;
  description: string; 
  is_SRED: string;
  province: string; 
  status: string
};

export type TTableHeader = {
  field?: string;
  cellRenderer?:unknown;
  headerName?:string;
  suppressSorting?:boolean
};