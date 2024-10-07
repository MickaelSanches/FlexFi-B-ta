export interface Schedule {
  id: number;
  sale_id: number;
  month_number: number;
  payment_amount: string;
  due_date: string;
  paid: boolean;
  payment_hash: string;
  created_at: string;
}
