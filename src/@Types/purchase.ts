import { Schedule } from "./schedule";

export interface Purchase {
  id: number;
  buyer_pubkey: string;
  seller_pubkey: string;
  amount: number;
  months: number;
  monthly_payment: string;
  created_at: string;
  schedule: Schedule[];
}
